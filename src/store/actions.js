export const setSearchQuery = ({ dispatch }, searchQuery) => {
  console.log(searchQuery);
  // commit('setSearchQuery', searchQuery);
  console.log(dispatch);
  dispatch('runSearch', searchQuery);
};

export const runSearch = ({ state, commit }, searchQuery) => {
  const url = `${state.omdbUrlPrefix}s=${searchQuery}`;
  const reqOptions = {
    method: 'GET',
  };
  const request = new Request(url, reqOptions);
  fetch(request)
    .then(res => res.json())
    .then((json) => {
      console.log(json);
      console.log(json.Response);
      if (json.Response === 'False') {
        commit('setSearchError', json.Error);
      } else if (json.Response === 'True') {
        commit('setSearchResults', json);
      }
    })
    .catch(error => console.error(error));
};
