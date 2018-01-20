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
  setShowDetails(state, payload) {
    state.show.details = payload;
  },
  setShowSeason(state, payload) {
    const seasons = state.show.seasons;
    seasons.push(payload);
    state.show.seasons = seasons;
  },
};
