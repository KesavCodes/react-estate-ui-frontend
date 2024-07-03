import { userData } from "../../data/dummyData";
import styles from "./Chat.module.css";
const SingleChat = ({ closeChatHandler }) => {
  return (
    <div
      className="position-absolute bg-secondary mt-auto rounded"
      style={{ top: "48%", width: "98%", left: "1%", height: "50%" }}
    >
      <div className="rounded-top d-flex bg-secondary align-items-center gap-2 justify-content-between p-2">
        <div className="d-flex gap-2 align-items-center fw-bold fs-5">
          <img
            src={userData.img}
            alt="profile pic"
            className="rounded-circle"
            height={35}
            width={35}
          />
          {userData.name}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => closeChatHandler(false)}
        >
          <b className="fw-bold fs-5">x</b>
        </button>
      </div>
      <div
        className={`p-2 d-flex bg-light bg-opacity-75 flex-column overflow-y-scroll  ${styles["scrollbar-style"]}`}
        style={{ height: "330px" }}
      >
        <div className="w-75 mt-1">
          <p className="bg-dark text-light p-2 rounded  m-0">
            iusto obcaecati quisquam ratione dolorum iste architecto facere
            harum quos accusantium, sint non deserunt nulla quae porro?
          </p>
          <span className="badge">
            <small className="text-dark">2 hours ago</small>
          </span>
        </div>
        <div className="w-75 mt-1 align-self-end d-flex flex-column">
          <p className="bg-dark text-light p-2 rounded  m-0">
            iusto obcaecati quisquam ratione dolorum iste architecto facere
          </p>
          <span className="badge align-self-end">
            <small className="text-dark">2 hours ago</small>
          </span>
        </div>
        <div className="w-75 mt-1">
          <p className="bg-dark text-light p-2 rounded  m-0">
            iusto obcaecati quisquam ratione dolorum iste architecto facere sint
            non deserunt nulla quae porro?
          </p>
          <span className="badge">
            <small className="text-dark">2 hours ago</small>
          </span>
        </div>
        <div className="w-75 mt-1">
          <p className="bg-dark text-light p-2 rounded  m-0">
            iusto obcaecati quisquam ratione dolorum iste architecto facere
          </p>
          <span className="badge">
            <small className="text-dark">2 hours ago</small>
          </span>
        </div>
        <div className="w-75 mt-1">
          <p className="bg-dark text-light p-2 rounded  m-0">
            iusto obcaecati quisquam ratione dolorum iste architecto facere
            harum quos accusantium, sint non deserunt
          </p>
          <span className="badge">
            <small className="text-dark">2 hours ago</small>
          </span>
        </div>
        <div className="w-75 mt-1 align-self-end d-flex flex-column">
          <p className="bg-dark text-light p-2 rounded  m-0">
            iusto obcaecati quisquam ratione dolorum iste architecto facere
            harum quos accusantium, sint non deserunt nulla quae porro?
          </p>
          <span className="badge align-self-end">
            <small className="text-dark">2 hours ago</small>
          </span>
        </div>
      </div>
      <div className="d-flex">
        <input
          className="form-control form-control-lg rounded-0 border-1 border-dark"
          type="text"
          placeholder="say anything"
          aria-label=""
        />
        <button className="btn bg-dark text-light rounded-0">send</button>
      </div>
    </div>
  );
};

export default SingleChat;
