import { useContext, useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";
import { AuthContext } from "../../Context/AuthContext";
import { format } from "timeago.js";
import apiRequest from "./../../lib/apiRequest";
import { SocketContext } from "./../../Context/SocketContext";
const SingleChat = ({ chat, closeChatHandler }) => {
  const [allMessages, setAllMessages] = useState(chat.data?.messages || []);

  const messageEndRef = useRef();

  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const chatSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputMessage = formData.get("chat");
    if (!inputMessage) return;
    try {
      const res = await apiRequest.post(`/messages/${chat.data.id}`, {
        text: inputMessage,
      });
      setAllMessages((prevState) => [...prevState, res.data.data]);
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data.data,
      });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, allMessages]);

  useEffect(() => {
    const readMessage = async () => {
      try {
        await apiRequest.get(`/chats/read/${chat.data.id}`);
      } catch (err) {
        console.log(err);
      }
    };
    if (chat && socket) {
      socket.on("getMessage", (messageData) => {
        console.log("hello from getMessage", messageData);
        if (chat.data.id === messageData.chatId) {
          setAllMessages((prevState) => [...prevState, messageData]);
          readMessage();
        }
      });
    }

    return () => socket.off("getMessage");
  }, [socket, chat]);
  return (
    <div
      className="position-absolute bg-secondary mt-auto rounded"
      style={{ top: "48%", width: "98%", left: "1%", height: "50%" }}
    >
      <div className="rounded-top d-flex bg-secondary align-items-center gap-2 justify-content-between p-2">
        <div className="d-flex gap-2 align-items-center fw-bold fs-5">
          <img
            src={chat.receiver.avatar}
            alt="profile pic"
            className="rounded-circle"
            height={35}
            width={35}
          />
          {chat.receiver.username}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => closeChatHandler(false)}
        >
          <b className="fw-bold fs-5">x</b>
        </button>
      </div>
      <div
        className={`p-2 d-flex bg-light bg-opacity-75 flex-column overflow-y-auto  ${styles["scrollbar-style"]}`}
        style={{ height: "330px" }}
      >
        {allMessages.map((message) => {
          if (message.userId !== currentUser.id) {
            return (
              <div className="w-75 mt-1" key={message.id}>
                <p className="bg-dark text-light p-2 rounded  m-0">
                  {message.text}
                </p>
                <span className="badge">
                  <small className="text-dark">
                    {format(message.createdAt)}
                  </small>
                </span>
              </div>
            );
          } else {
            return (
              <div
                className="w-75 mt-1 align-self-end d-flex flex-column"
                key={message.id}
              >
                <p className="bg-dark text-light p-2 rounded  m-0">
                  {message.text}
                </p>
                <span className="badge align-self-end">
                  <small className="text-dark">
                    {format(message.createdAt)}
                  </small>
                </span>
              </div>
            );
          }
        })}
        <div ref={messageEndRef}></div>
      </div>
      <form className="d-flex" onSubmit={chatSubmitHandler}>
        <input
          className="form-control form-control-lg rounded-0 border-1 border-dark"
          type="text"
          name="chat"
          id="chat"
          placeholder="say anything"
          aria-label=""
        />
        <button className="btn bg-dark text-light rounded-0">send</button>
      </form>
    </div>
  );
};

export default SingleChat;
