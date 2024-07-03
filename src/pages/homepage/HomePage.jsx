import heroBg from "../../../public/bg.png";

import BgColor from "../../utlis/bgColor.jsx";

import Searchbar from "../../Components/searchbar/Searchbar.jsx";
import Kpi from "../../Components/kpi/Kpi.jsx";

const HomePage = () => {
  return (
    <div className="container-lg">
      <BgColor />
      <div className="col-xxl-12 px-4">
        <div className="row flex-md-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-md-5 col-lg-5 p-0">
            <img
              src={heroBg}
              className="d-none d-md-block mx-lg-auto img-fluid"
              alt="Hero Bg"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-md-7 col-lg-7">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Find Real Estate & Get Your Dream Place
            </h1>
            <p className="lead py-5">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-flex flex-column justify-content-md-start">
              <Searchbar />
              <Kpi />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
