const PostDetail = ({singlePostData, userData}) => {
  return (
    <div className="row d-flex m-1 mt-4">
      <div className="col-10">
        <h3>{singlePostData.title}</h3>
        <p className="text-secondary">
          <img src="/pin.png" height={16} /> {singlePostData.address}
        </p>
        <span className="bg-dark text-light p-2 rounded">
          <b>$ {singlePostData.price}</b>
        </span>
      </div>
      <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
        <img
          src={userData.img}
          alt="profile pic"
          height={40}
          width={45}
          className="rounded-circle"
        />
        <p className="mb-0">{userData.name}</p>
      </div>
      <p className="mt-5 text-secondary">{singlePostData.description}</p>
    </div>
  );
};

export default PostDetail;
