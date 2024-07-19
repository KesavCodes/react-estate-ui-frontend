import { useContext, useState } from "react";
import styles from "./Chat.module.css";
import SingleChat from "./SingleChat";
import { AuthContext } from "./../../Context/AuthContext";
import apiRequest from "./../../lib/apiRequest";
import { useNotificationStore } from "./../../lib/notificationStore";
const Chat = ({ chats }) => {
  const [chat, setChat] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const decreaseNotificationCount = useNotificationStore(
    (state) => state.decrease
  );

  const [openedChats, setOpenedChats] = useState([]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest.get(`/chats/${id}`);
      res.data.receiver = receiver;
      setChat({ ...res.data });
      setShowChat(true);
      setOpenedChats((prev) => [...prev, id]);
      if (!openedChats.includes(id)) {
        decreaseNotificationCount();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="rounded bg-secondary bg-opacity-10 p-3 position-relative">
      {showChat && <SingleChat closeChatHandler={setShowChat} chat={chat} />}
      <h3>Messages</h3>
      <div
        className={`overflow-y-auto pe-2  ${styles["container-height"]} ${styles["scrollbar-style"]}`}
      >
        {chats.map((item) => {
          return (
            <div className="d-flex gap-2 mx-1 my-2" key={item.id}>
              <img
                src={item.receiver.avatar}
                alt="profile pic"
                height={30}
                width={30}
                className="rounded-circle"
              />
              <div
                className={`rounded w-100 ${
                  item.seenBy.includes(currentUser.id) ||
                  openedChats.includes(item.id)
                    ? "bg-dark text-light"
                    : "bg-info text-dark"
                }`}
                onClick={() => handleOpenChat(item.id, item.receiver)}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="d-flex justify-content-between">
                  <p className="mx-1 my-0 p-2">{item.receiver.username}</p>
                  <p className="mx-1 my-0 p-2">
                    <small className="">10.30 AM</small>
                  </p>
                </div>
                <p className="px-3">{item.lastMessage.slice(0, 25) + "..."}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
