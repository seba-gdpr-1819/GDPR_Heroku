import axios from "axios";

import { SEARCHRESULTS_LOADING, SEARCH_IN_BACKEND } from "./types";
// Search in Backend

export const searchInBackend = searchString => dispatch => {
  //console.log("id" + id);
  dispatch(setSearchResultsLoading());

  //alert("seerver");
  axios
    .get(`/api/patterns/search`, searchString)
    .then(res =>
      // console.log("res" + res.data.pattern)

      dispatch({
        type: SEARCH_IN_BACKEND,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: SEARCH_IN_BACKEND,
        payload: ["treffer1", "treffer 2"]
      })
    );
};

// Set loading state
export const setSearchResultsLoading = () => {
  return {
    type: SEARCHRESULTS_LOADING
  };
};
