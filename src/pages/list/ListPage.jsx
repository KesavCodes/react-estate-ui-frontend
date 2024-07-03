import { listData } from "./../../data/dummyData";
import Filter from "../../Components/filter/Filter";
import ListContainer from "../../Components/listContainer/ListContainer";

import styles from "./ListPage.module.css";
import Map from "../../Components/map/Map";

export const ListPage = () => {
  return (
    <div className="container-lg">
      <div className={`col-xxl-12 px-4`}>
        <div className="row flex-md-row-reverse align-items-center justify-content-start g-5 gap-md-2 gap-lg-5 pt-5">
          <div
            className={`col-12 d-none d-md-block col-md-4 col-lg-4 p-0 border-1 me-lg-3 me-xl-4 me-xxl-5 ${styles["container-height"]}`}
          >
            <Map details={listData} />
          </div>
          <div
            className={`col-12 col-md-7 col-lg-7 overflow-y-scroll ${styles["container-height"]} ${styles["scrollbar-style"]}`}
          >
            <Filter />
            <ListContainer data={listData} />
          </div>
        </div>
      </div>
    </div>
  );
};
