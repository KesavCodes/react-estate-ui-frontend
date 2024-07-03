import { useState } from "react";
import { userData } from "../../data/dummyData";
import styles from "./Chat.module.css";
import SingleChat from "./SingleChat";
const Chat = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="rounded bg-secondary bg-opacity-10 p-3 position-relative">
      {showChat && <SingleChat closeChatHandler={setShowChat} />}
      <h3>Messages</h3>
      <div
        className={`overflow-y-scroll pe-2  ${styles["container-height"]} ${styles["scrollbar-style"]}`}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <div className="d-flex gap-2 mx-1 my-2" key={item}>
              <img
                src={userData.img}
                alt="profile pic"
                height={30}
                width={30}
                className="rounded-circle"
              />
              <div
                className="rounded bg-dark text-light w-100"
                onClick={() => setShowChat(true)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex justify-content-between">
                  <p className="mx-1 my-0 p-2">{userData.name}</p>
                  <p className="mx-1 my-0 p-2">
                    <small className="">10.30 AM</small>
                  </p>
                </div>
                <p className="px-3">Lorem ipsum, dolor sit ame...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chat;
