import { createPortal } from "react-dom";
import Slider from "./../slider/Slider";
import styles from "./Modal.module.css";
const GalleryModal = ({ data, modalClose,activeImage, changeImage  }) => {
  
  return createPortal(
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        modalClose();
      }}
    >
      <div className={styles.modal}>
        <Slider postData={data} activeImage={activeImage} changeImage={changeImage}/>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default GalleryModal;
