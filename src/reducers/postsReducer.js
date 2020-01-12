export default (oldPosts = [], action) => {
  if (action.type === "FETCH_POSTS") {
    return [...oldPosts, ...action.payload.data];
  }

  return oldPosts;
};
