import { useContext, useState } from "react";
import apiRequest from "../../lib/apiRequest";
import Map from "./../map/Map";
import { AuthContext } from "./../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const PostFeatures = ({ postData }) => {
  const [saved, setSaved] = useState(postData.isSaved);
  const { postDetail } = postData;
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const generalFeatures = [
    {
      id: 1,
      title: "Utilities",
      description:
        postDetail.utilities === "owner"
          ? "Owner is responsible"
          : "Tenant is responsible",
      image: "/utility.png",
    },
    {
      id: 2,
      title: "Pet Policy",
      description:
        postDetail.pet === "allowed" ? "Pet Allowed" : "Pet not Allowed",
      image: "/pet.png",
    },
    {
      id: 3,
      title: "Property Fees",
      description: postDetail.income,
      image: "/fee.png",
    },
  ];
  const features = [
    {
      id: 1,
      value: `${postDetail.size} sq ft`,
      image: "/size.png",
    },
    {
      id: 2,
      value: `${postData.bedroom} bedroom${postData.bedroom > 1 ? "s" : ""}`,
      image: "/bed.png",
    },
    {
      id: 3,
      value: `${postData.bathroom} bathroom${postData.bathroom > 1 ? "s" : ""}`,
      image: "/bath.png",
    },
  ];
  const nearbyPlaces = [
    {
      id: 1,
      title: "School",
      distance: `${postDetail.school}m away`,
      image: "/school.png",
    },
    {
      id: 2,
      title: "Bus Stop",
      distance: `${postDetail.bus}m away`,
      image: "/bus.png",
    },
    {
      id: 3,
      title: "Restaurant",
      distance: `${postDetail.restaurant}m away`,
      image: "/restaurant.png",
    },
  ];

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    setSaved((prevState) => !prevState);
    try {
      await apiRequest.post("/users/save", { postId: postData.id });
    } catch (err) {
      console.log(err);
      setSaved((prevState) => !prevState);
    }
  };

  return (
    <div>
      <p className="text-dark mt-2 fw-bold fs-5">General</p>
      <div className="rounded bg-secondary bg-opacity-10 border shadow-sm">
        {generalFeatures.map((item) => {
          return (
            <div
              key={item.id}
              className="d-flex align-items-center gap-2 py-2 px-3"
            >
              <img src={item.image} alt={item.title} height={25} />
              <div className="m-0 mb-2">
                <h3 className="fs-6 fw-bolder m-0">{item.title}</h3>
                <p className="m-0">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-dark mt-2 fw-bold fs-5">Room Sizes</p>
      <div className="d-sm-flex justify-content-between gap-2 mt-1">
        {features.map((item) => (
          <span
            key={item.id}
            className="badge bg-secondary border bg-opacity-10 text-dark d-flex px-3 py-2 gap-2 align-items-center"
          >
            <img src={item.image} alt="dimensions" height={25} />
            <span>{item.value}</span>
          </span>
        ))}
      </div>
      <p className="text-dark mt-2 fw-bold fs-5">Nearby Places</p>
      <div className="rounded border d-sm-flex bg-secondary bg-opacity-10 justify-content-around align-items-center">
        {nearbyPlaces.map((item) => {
          return (
            <div
              key={item.id}
              className="d-flex align-items-center gap-2 py-2 px-3"
            >
              <img src={item.image} alt={item.title} height={25} />
              <div className="m-0 mb-2">
                <h3 className="fs-6 fw-bolder m-0">{item.title}</h3>
                <p className="m-0">{item.distance}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-dark mt-2 fw-bold fs-5">Location</p>
      <div className="mt-3 mb-4" style={{ height: "200px", width: "100%" }}>
        <Map details={[{ ...postData, img: postData.images[0] }]} />
      </div>
      <div className="d-flex justify-content-between">
        <div
          className="bg-secondary bg-opacity-10 rounded border py-2 px-3 m-0 d-flex gap-2 align-items-center"
          style={{ cursor: "pointer" }}
        >
          <img src="/chat.png" alt="chat logo" height={20} />
          Send a Message
        </div>
        <div
          className={`rounded border py-2 px-3 m-0 d-flex gap-2 align-items-center ${saved? 'bg-info bg-opacity-50':'bg-secondary bg-opacity-10 '}`}
          style={{ cursor: "pointer" }}
          onClick={handleSave}
        >
          <img src="/save.png" alt="chat logo" height={20} />
          {saved ? "Place Saved" : "Save the Place"}
        </div>
      </div>
    </div>
  );
};

export default PostFeatures;
