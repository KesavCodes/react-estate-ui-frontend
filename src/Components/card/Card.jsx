import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ details }) => {
  const detailsLink = `/list/${details.id}`;
  return (
    <div className={`card mb-3 shadow`}>
      <div className="row g-0">
        <div className="col-md-4">
          <Link to={detailsLink}>
            <img
              src={details.images[0]}
              className={`img-fluid object-fit-cover rounded-start ${styles.pointer}`}
              style={{ height: "100%", aspectRatio: "16/9" }}
              alt="..."
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <Link to={detailsLink}>
            <h3 className={`card-title fs-5  ${styles.pointer}`}>
              {details.title}
            </h3>
            </Link>
            <div className="card-text fw-light d-flex align-items-center gap-1 mt-3">
              <img src="/pin.png" alt="location pin" height={14} />
              <small className="m-0 text-body-secondary fw-normal">
                {details.address}
              </small>
            </div>
            <div>
              <h3 className="badge text-bg-dark py-2 px-4 mt-2 rounded-pill">
                $ {details.price}
              </h3>
            </div>
            <div className="d-flex justify-content-between">
              <div className="features d-flex gap-3">
                <div className="feature d-flex align-items-center gap-1 badge text-bg-light">
                  <img src="./bed.png" height={20} alt="bed logo" />
                  <small className="text-body-secondary fw-bolder">
                    {details.bedroom}{" "}
                    <span className="d-inline d-md-none d-lg-inline">
                      bedroom
                    </span>
                  </small>
                </div>
                <div className="feature d-flex align-items-center gap-1 badge text-bg-light">
                  <img src="./bath.png" height={20} alt="bath logo" />
                  <small className="text-body-secondary fw-bolder">
                    {details.bedroom}{" "}
                    <span className="d-inline d-md-none d-lg-inline">
                      bathroom
                    </span>
                  </small>
                </div>
              </div>
              <div className="icons d-flex gap-3">
                <div
                  className={`feature d-flex align-items-center gap-1  ${styles.pointer}`}
                >
                  <img src="./save.png" height={18} alt="save logo" />
                </div>
                <div
                  className={`feature d-flex align-items-center gap-1  ${styles.pointer}`}
                >
                  <img src="./chat.png" height={18} alt="chat logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
