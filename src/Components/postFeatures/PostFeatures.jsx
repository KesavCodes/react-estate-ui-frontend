import Map from "./../map/Map";
import { singlePostData } from "../../data/dummyData";
const PostFeatures = () => {
  const generalFeatures = [
    {
      id: 1,
      title: "Utilities",
      description: "Renter is responsible",
      image: "/utility.png",
    },
    {
      id: 2,
      title: "Pet Policy",
      description: "Pet Allowed",
      image: "/pet.png",
    },
    {
      id: 3,
      title: "Property Fees",
      description: "Must have 3x the rent in the total houshold income",
      image: "/fee.png",
    },
  ];

  const NearbyPlaces = [
    {
      id: 1,
      title: "School",
      distance: "250m away",
      image: "/school.png",
    },
    {
      id: 2,
      title: "Bus Stop",
      distance: "100m away",
      image: "/bus.png",
    },
    {
      id: 3,
      title: "Restaurant",
      distance: "200m away",
      image: "/restaurant.png",
    },
  ];
  return (
    <div>
      <p className="text-dark mt-2 fw-bold fs-5">General</p>
      <div className="rounded bg-secondary bg-opacity-10">
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
        <span className="badge bg-secondary bg-opacity-10 text-dark d-flex px-3 py-2 gap-2 align-items-center">
          <img src="/size.png" alt="dimensions" height={25} />
          <span>80sqm (861sqft)</span>
        </span>
        <span className="badge bg-secondary bg-opacity-10 text-dark d-flex px-3 py-2 gap-2 align-items-center">
          <img src="/bed.png" alt="dimensions" height={25} />
          <span>2 bedroom</span>
        </span>
        <span className="badge bg-secondary bg-opacity-10 text-dark d-flex px-3 py-2 gap-2 align-items-center">
          <img src="/bath.png" alt="dimensions" height={25} />
          <span>1 bathroom</span>
        </span>
      </div>
      <p className="text-dark mt-2 fw-bold fs-5">Nearby Places</p>
      <div className="rounded d-sm-flex bg-secondary bg-opacity-10 justify-content-around align-items-center">
        {NearbyPlaces.map((item) => {
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
      <div className="mt-3 mb-4" style={{ height: "200px", width: "100%"}}>
        <Map details={[{...singlePostData,img: singlePostData.images[0]}]} />
      </div>
    </div>
  );
};

export default PostFeatures;
