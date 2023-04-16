import statusConfig from 'utils/statusConfig';
export const selectResults = state => state.search.results;
export const selectStatus = state => statusConfig(state.search.status);
export const selectSearchType = state => state.search.searchType;
export const selectTotalResults = state => state.search.totalResults;