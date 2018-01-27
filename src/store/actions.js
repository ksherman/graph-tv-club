export const setSearchQuery = ({ dispatch }, searchQuery) => {
  dispatch('runSearch', searchQuery);
};

export const clearSearchQuery = ({ commit }) => {
  commit('clearSearchQuery');
};

export const runSearch = ({ state, commit }, searchQuery) => {
  const url = `${state.omdbUrlPrefix}&type=series&s=${searchQuery}`;
  const reqOptions = {
    method: 'GET',
  };
  const request = new Request(url, reqOptions);
  fetch(request)
    .then(res => res.json())
    .then(json => {
      if (json.Response === 'False') {
        commit('setSearchError', json.Error);
      } else if (json.Response === 'True') {
        commit('setSearchResults', json);
      }
    })
    .catch(error => console.error(error));
};

export const runShowDetailFetch = ({ state, commit, dispatch }, imdbID) => {
  const url = `${state.omdbUrlPrefix}&type=episode&i=${imdbID}`;
  const reqOptions = {
    method: 'GET',
  };
  const request = new Request(url, reqOptions);
  fetch(request)
    .then(res => res.json())
    .then(json => {
      commit('setShowDetails', json);
      // if show has seasons, fetch them
      const seasons = Number(json.totalSeasons);
      if (seasons > 0) {
        [...Array(Number(seasons))].forEach((_, i) => {
          dispatch('runShowSeasonFetch', { imdbID, seasonNumber: i + 1 });
        });
      }
    })
    .catch(error => console.error(error));
};

export const runShowSeasonFetch = ({ state, commit }, { imdbID, seasonNumber }) => {
  const url = `${state.omdbUrlPrefix}&type=episode&i=${imdbID}&Season=${seasonNumber}`;
  const reqOptions = {
    method: 'GET',
  };
  const request = new Request(url, reqOptions);
  fetch(request)
    .then(res => res.json())
    .then(json => {
      commit('setShowSeason', json);
    })
    .catch(error => console.error(error));
};

export const clearShowDetails = ({ commit }) => {
  commit('clearShowDetails');
};
