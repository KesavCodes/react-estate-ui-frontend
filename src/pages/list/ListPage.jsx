import { Await, useLoaderData } from "react-router-dom";

import Filter from "../../Components/filter/Filter";
import ListContainer from "../../Components/listContainer/ListContainer";
import Map from "../../Components/map/Map";

import styles from "./ListPage.module.css";
import React from "react";

export const ListPage = () => {
  const data = useLoaderData();
  return (
    <div className="container-lg">
      <div className="col-xxl-12 px-4">
        <div className="row flex-md-row-reverse align-items-center justify-content-start g-5 gap-md-2 gap-lg-5 pt-5">
          <div
            className={`col-12 d-none d-md-block col-md-4 col-lg-4 p-0 border-1 me-lg-3 me-xl-4 me-xxl-5 ${styles["container-height"]}`}
          >
            <React.Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(res) => {
                  return res.data.data.length > 0 ? (
                    <Map details={res.data.data} />
                  ) : (
                    <Map details={[]} />
                  );
                }}
              </Await>
            </React.Suspense>
            
          </div>
          <div
            className={`col-12 col-md-7 col-lg-7 overflow-y-auto ${styles["container-height"]} ${styles["scrollbar-style"]}`}
          >
            <Filter />
            <React.Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(res) => {
                  console.log(res);
                  return res.data.data.length > 0 ? (
                     <ListContainer data={res.data.data} />
                  ) : (
                    <p>No match found</p>
                  );
                }}
              </Await>
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
