export const onSearchInitiated = () => {
  return {
    type: "ON_SEARCH",
  };
};
export const offSearch = () => {
  return {
    type: "OFF_SEARCH",
  };
};
export const onSearchValues = (searchValues) => {
  return {
    type: "ON_SEARCH_HANDLER",
    searchValues,
  };
};
