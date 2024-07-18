import { useContext, useState } from "react";
import Chat from "../../Components/chat/Chat";
import ListContainer from "../../Components/listContainer/ListContainer";
import UserInfo from "../../Components/userInfo/UserInfo";
import styles from "./ProfilePage.module.css";
import { Await, Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "./../../Context/AuthContext";
import { Suspense } from "react";
const ProfilePage = () => {
  const [showTab, setShowTab] = useState("myList");
  const { currentUser } = useContext(AuthContext);
  const userData = useLoaderData();
  return (
    <div className="container-lg row pt-4 m-0">
      <div className="col-lg-7 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fs-3">User Information</h2>
          <Link to={`/profile/update/${currentUser.id}`}>
            <button className="btn btn-dark">Update Profile</button>
          </Link>
        </div>
        <UserInfo />
        <div className="d-flex justify-content-between align-items-end mt-4">
          <div className="d-flex border-bottom w-100">
            <h2
              className={`fs-5 m-0 p-2 rounded rounded-bottom-0 ${
                showTab === "myList"
                  ? "bg-dark text-light"
                  : "bg-light text-dark"
              }`}
              onClick={() => setShowTab("myList")}
              style={{ cursor: "pointer" }}
            >
              My Listing
            </h2>
            <h2
              className={`fs-5 m-0 p-2 rounded rounded-bottom-0 ${
                showTab === "save" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={() => setShowTab("save")}
              style={{ cursor: "pointer" }}
            >
              Saved
            </h2>
          </div>
          <Link to={showTab === "myList" ? "/add" : "/list"} className="w-25">
            <button className="btn btn-dark p-2">
              {showTab === "myList" ? "Add New Post" : "View Listings"}
            </button>
          </Link>
        </div>
        {showTab === "myList" && (
          <>
            <div className="border-bottom">
              <div
                className={`overflow-y-auto pe-3 rounded ${styles["container-height"]} ${styles["scrollbar-style"]} mt-3`}
              >
                <Suspense fallback={<p>Loading...</p>}>
                  <Await
                    resolve={userData.postResponse}
                    errorElement={<p>Error loading posts!</p>}
                  >
                    {(res) => {
                      return <ListContainer data={res.data?.data[0].posts} />;
                    }}
                  </Await>
                </Suspense>
              </div>{" "}
            </div>
          </>
        )}
        {showTab === "save" && (
          <>
            <div className="border-bottom">
              <div
                className={`overflow-y-auto pe-3 rounded ${styles["container-height"]} ${styles["scrollbar-style"]} mt-3`}
              >
                <Suspense fallback={<p>Loading...</p>}>
                  <Await
                    resolve={userData.postResponse}
                    errorElement={<p>Error loading posts!</p>}
                  >
                    {(res) => {
                      return (
                        <ListContainer
                          data={res.data?.data[0].savedPost.map(
                            (item) => item.post
                          )}
                        />
                      );
                    }}
                  </Await>
                </Suspense>
              </div>{" "}
            </div>
          </>
        )}
      </div>
      <div className="my-5 mt-lg-0 col-lg-5">
        <Suspense fallback={<p>Loading...</p>}>
          <Await
            resolve={userData.chatResponse}
            errorElement={<p>Error loading chats!</p>}
          >
            {(res) => {
              return <Chat chats={res.data.data}/>;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ProfilePage;
