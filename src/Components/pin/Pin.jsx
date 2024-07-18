import { Marker, Popup } from "react-leaflet";

import { Link } from "react-router-dom";
const Pin = ({ data }) => {
  return (
    <Marker position={[data.latitude, data.longitude]}>
      <Popup>
        <div className="d-flex gap-2 m-0 p-0">
          <img
            src={data.images[0]}
            alt="Pop up home image"
            className="object-fit-cover rounded"
            height={50}
            width={80}
          />
          <div className="d-flex flex-column justify-content-between">
            <Link to={`/list/${data.id}`}>
              <small className="fw-normal">{data.title}</small>
            </Link>
            <div className="d-flex justify-content-between gap-2">
              <span className="fw-bold">$ {data.price}</span>
              <div className="d-flex gap-2">
                <span className="d-flex gap-1 fw-bold">
                  <img src="/bed.png" alt="bed logo" height={15} />
                  {data.bedroom}
                </span>
                <span className="d-flex gap-1 fw-bold">
                  <img src="/bath.png" alt="bath logo" height={15} />
                  {data.bathroom}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
