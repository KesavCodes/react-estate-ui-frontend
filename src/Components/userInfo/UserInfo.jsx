import { userData } from "../../data/dummyData";

const UserInfo = () => {
  const user = userData;
  return (
    <div>
      <p className="d-flex gap-2 align-items-center mt-3">
        Avater :{" "}
        <img
          src={user.img}
          height={35}
          width={35}
          className="rounded-circle"
          alt="profile pic"
        />
      </p>
      <p className="d-flex gap-2 align-items-center">
        Username : <b>{user.name}</b>
      </p>
      <p className="d-flex gap-2 align-items-center">
        E-mail : <b>{user.name}@gmail.com</b>
      </p>
    </div>
  );
};

export default UserInfo;
