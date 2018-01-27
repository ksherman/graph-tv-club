import orderBy from 'lodash-es/orderBy';
import regression from 'regression';

const seasonColors = [
  '#314CB6',
  '#FB4D3D',
  '#03CEA4',
  '#E40066',
  '#EAC435',
  '#9AD4D6',
  '#101935',
  '#5995ED',
  '#C9CBA3',
  '#723D46',
  '#314CB6',
  '#FB4D3D',
  '#03CEA4',
  '#E40066',
  '#EAC435',
  '#9AD4D6',
  '#101935',
  '#5995ED',
  '#C9CBA3',
  '#723D46',
  '#314CB6',
  '#FB4D3D',
  '#03CEA4',
  '#E40066',
  '#EAC435',
  '#9AD4D6',
  '#101935',
  '#5995ED',
  '#C9CBA3',
  '#723D46',
  '#314CB6',
  '#FB4D3D',
  '#03CEA4',
  '#E40066',
  '#EAC435',
  '#9AD4D6',
  '#101935',
  '#5995ED',
  '#C9CBA3',
  '#723D46',
];

export const getSearchError = ({ search }) => search.error;
export const getSearchResults = ({ search }) => search.results;
export const getShowDetails = ({ show }) => show.details;
export const getShowSeasons = ({ show }) => {
  if (show.seasons.length > 0) {
    return orderBy(show.seasons, [season => season.Season], ['asc']);
  }
  return false;
};
export const getShowDataForScatterplot = ({ show }) => {
  if (show.seasons.length > 0) {
    const orderedSeasons = orderBy(show.seasons, [season => Number(season.Season)], ['asc']);
    return orderedSeasons.map(season => {
      const episodeData = season.Episodes.map(episode => Number(episode.imdbRating));
      const episodeDataForLinearRegression = season.Episodes.map((episode, index) => {
        const data = [index + 1, Number(episode.imdbRating)];
        return data;
      });
      const linearRegression = regression.linear(episodeDataForLinearRegression);
      const episodeDataTrend = season.Episodes.map((_, index) => linearRegression.predict(index + 1)[1]);

      const color = seasonColors[Number(season.Season)];
      return [
        {
          label: `Season ${season.Season}`,
          backgroundColor: color,
          data: episodeData,
          showLine: false,
        },
        {
          data: episodeDataTrend,
          backgroundColor: 'transparent',
          borderWidth: 2,
          pointRadius: 0,
        },
      ];
    });
  }
  return false;
};
