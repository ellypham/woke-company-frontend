import { fetchChecklist, fetchKeywords } from "../api/index";

// actions object
const ACTIONS = {
  // handle change for the date picker component
  HANDLE_CHANGE_DATE_PICKER: "HANDLE_CHANGE_DATE_PICKER",
  HANDLE_GET_CHECKLIST: "HANDLE_GET_CHECKLIST",
  HANDLE_GET_KEYWORDS: "HANDLE_GET_KEYWORDS"
};

//  exporting our action
export const handleChangeDatePicker = date => ({
  type: ACTIONS.HANDLE_CHANGE_DATE_PICKER,
  // date is the moment() object
  payload: date
});

export const getChecklist = () => dispatch =>
  fetchChecklist().then(result =>
    dispatch({
      type: ACTIONS.HANDLE_GET_CHECKLIST,
      payload: result
    })
  );

export const getKeywords = () => dispatch =>
  fetchKeywords()
    .then(res => res.json())
    .then(result =>
      dispatch({
        type: ACTIONS.HANDLE_GET_KEYWORDS,
        payload: result
      })
    )
    .catch(err => console.log(err));
