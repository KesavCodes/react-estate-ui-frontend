

const Slider = ({ postData, activeImage, changeImage }) => {
  const images = postData;
  const handleGalleryNavigation = (direction) => {
    if (direction === "next") changeImage((activeImage + 1) % images.length);
    if (direction === "prev")
      changeImage((activeImage - 1 + images.length) % images.length);
  };
  return (
    <div id="galleryCarousel" className="carousel slide w-100">
      <div className="carousel-indicators">
        {images.map((image, index) => {
          return (
            <button
              key={image}
              type="button"
              data-bs-target="#galleryCarousel"
              data-bs-slide-to={index}
              aria-label={`Slide ${index + 1}`}
              className={index === activeImage ? "active" : ""}
              onClick={() => changeImage(index)}
            ></button>
          );
        })}
      </div>
      <div className="carousel-inner">
        {images.map((image, index) => {
          return (
            <div
              key={image}
              className={`carousel-item ${
                index === activeImage ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="d-block object-fit-scale  object-fit-sm-cover ratio ratio-16x9 w-100"
                height={760}
                alt="..."
              />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev bg-dark "
        type="button"
        data-bs-target="#galleryCarousel"
        data-bs-slide="prev"
        onClick={() => handleGalleryNavigation("prev")}
        style={{ width: "10%" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next bg-dark bg-sm-danger"
        type="button"
        data-bs-target="#galleryCarousel"
        data-bs-slide="next"
        onClick={() => handleGalleryNavigation("next")}
        style={{ width: "10%" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
