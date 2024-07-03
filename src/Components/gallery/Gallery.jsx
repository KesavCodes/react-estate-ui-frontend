import { useState } from "react";
import GalleryModal from "../Modal/GalleryModal";

const Gallery = ({ gallery }) => {
  const [showModal, setShowModal] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const toggleModal = (id) => {
    setActiveImage(id);
    setShowModal((prevState) => !prevState);
  };

  const changeImageHandler = (id) => {
    setActiveImage(id);
  };
  return (
    <div className="row d-flex flex-column flex-sm-row gap-1 gap-sm-0">
      {showModal && (
        <GalleryModal
          data={gallery}
          modalClose={toggleModal}
          activeImage={activeImage}
          changeImage={changeImageHandler}
        />
      )}
      <div className="col-sm-8 m-0 pe-0">
        <img
          src={gallery[0]}
          alt=""
          className="w-100  object-fit-cover ratio ratio-16x9 rounded"
          height={350}
          onClick={() => toggleModal(0)}
        />
      </div>
      <div className="col-sm-4 d-flex flex-sm-column gap-1 gap-sm-0 justify-content-between overflow-hidden">
        {gallery.slice(1, 4).map((image, index) => {
          return (
            <img
              src={image}
              alt="gallery image"
              className="w-100 object-fit-cover ratio ratio-16x9 rounded"
              height={110}
              key={image}
              onClick={() => toggleModal(index + 1)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
