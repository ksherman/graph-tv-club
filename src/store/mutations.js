/* eslint-disable no-param-reassign */
export default {
  setSearchQuery(state, payload) {
    state.search.query = payload;
  },
  setSearchError(state, payload) {
    state.search.error = payload;
  },
  setSearchResults(state, payload) {
    state.search.results = payload;
  },
};
