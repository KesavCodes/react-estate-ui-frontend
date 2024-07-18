import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";
export const listDetailsLoader = async ({ request, params }) => {
  const res = await apiRequest.get(`/posts/${params.id}`);
  return res.data.data;
};

export const listLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest.get(`/posts?${query}`);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePostsLoader = async ({ request, params }) => {
  const postPromise = apiRequest.get(`/users/profilePosts`);
  const chatPromise = apiRequest.get("/chats/");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
