import { singlePostData } from "../../data/dummyData";
import { userData } from "../../data/dummyData";
import Gallery from "../../Components/gallery/Gallery";
import PostDetail from "../../Components/postDetail/PostDetail";
import PostFeatures from "../../Components/postFeatures/PostFeatures";
const DetailPage = () => {
  return (
    <div className="container-xl pt-4 row d-flex justify-content-center mx-0">
      <div className="col-md-9  col-xl-7">
        <Gallery gallery={singlePostData.images} />
        <PostDetail singlePostData={singlePostData} userData={userData} />
      </div>
      <div className="mb-5 mb-xl-0 col-md-9 col-xl-5 bg-gradient rounded">
        <PostFeatures />
      </div>
    </div>
  );
};

export default DetailPage;
