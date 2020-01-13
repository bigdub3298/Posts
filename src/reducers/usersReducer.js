export default (oldUsers = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...oldUsers, action.payload];
    default:
      return oldUsers;
  }
};
