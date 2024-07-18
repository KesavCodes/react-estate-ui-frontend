import Gallery from "../../Components/gallery/Gallery";
import PostDetail from "../../Components/postDetail/PostDetail";
import PostFeatures from "../../Components/postFeatures/PostFeatures";
import { useLoaderData } from "react-router-dom";
const DetailPage = () => {
  const postData = useLoaderData();

  console.log(postData);
  return (
    <div className="container-xl pt-4 row d-flex justify-content-center mx-0">
      <div className="col-md-9  col-xl-7">
        <Gallery gallery={postData.images} />
        <PostDetail singlePostData={postData} userData={postData.user} />
      </div>
      <div className="mb-5 mb-xl-0 col-md-9 col-xl-5 bg-gradient rounded">
        <PostFeatures postData={postData}/>
      </div>
    </div>
  );
};

export default DetailPage;
