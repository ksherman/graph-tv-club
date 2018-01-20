import orderBy from 'lodash-es/orderBy';

export const getSearchError = ({ search }) => search.error;
export const getSearchResults = ({ search }) => search.results;
export const getShowDetails = ({ show }) => show.details;
export const getShowSeasons = ({ show }) => {
  if (show.seasons.length > 0) {
    return orderBy(show.seasons, [season => season.Season], ['asc']);
  }
  return false;
};
