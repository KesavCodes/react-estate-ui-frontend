import { useState } from "react";
import Chat from "../../Components/chat/Chat";
import ListContainer from "../../Components/listContainer/ListContainer";
import UserInfo from "../../Components/userInfo/UserInfo";
import { listData } from "../../data/dummyData";
import styles from "./ProfilePage.module.css";
const ProfilePage = () => {
  const [showTab, setShowTab] = useState("myList");

  return (
    <div className="container-lg row pt-4 m-0">
      <div className="col-lg-7 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fs-3">User Information</h2>
          <button className="btn btn-dark">Update Profile</button>
        </div>
        <UserInfo />
        <div className="d-flex justify-content-between align-items-end mt-4">
          <div className="d-flex border-bottom w-100">
            <h2
              className={`fs-5 m-0 p-2 rounded rounded-bottom-0 ${
                showTab === "myList" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={()=>setShowTab("myList")}
            >
              My Listing
            </h2>
            <h2
              className={`fs-5 m-0 p-2 rounded rounded-bottom-0 ${
                showTab === "save" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={()=>setShowTab("save")}
            >
              Saved
            </h2>
          </div>
          <button className="btn btn-dark w-25 p-2">
            {showTab === "myList" ? "Add New Post" : "View Listings"}
          </button>
        </div>
        {showTab === "myList" && (
          <>
            <div className="border-bottom">
              <div
                className={`overflow-y-scroll pe-3 rounded ${styles["container-height"]} ${styles["scrollbar-style"]} mt-3`}
              >
                <ListContainer data={listData} />
              </div>{" "}
            </div>
          </>
        )}
        {showTab === "save" && (
          <>
            <div className="border-bottom">
              <div
                className={`overflow-y-scroll pe-3 rounded ${styles["container-height"]} ${styles["scrollbar-style"]} mt-3`}
              >
                <ListContainer data={listData.slice(2,4)} />
              </div>{" "}
            </div>
          </>
        )}
      </div>
      <div className="my-5 mt-lg-0 col-lg-5">
        <Chat />
      </div>
    </div>
  );
};

export default ProfilePage;
