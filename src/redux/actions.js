import axios from 'axios';

export const searchRepositories = searchTerm => {
  return dispatch => {
    axios
      .get(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .then(response => {
        dispatch({
          type: 'SEARCH_REPOSITORIES',
          payload: response.data.items,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
