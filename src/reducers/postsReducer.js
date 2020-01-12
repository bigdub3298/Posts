export default (oldPosts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...oldPosts, ...action.payload];
    default:
      return oldPosts;
  }
};
