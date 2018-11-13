import { combineReducers } from "redux";
// REDUX FORM
import { reducer as formReducer } from "redux-form";
import checklistReducer from "./checklist.js";
import keywordsReducer from "./keywords.js";
// REDUCERS

// rootReducer is our parent reducer that takes in our child reducers
// use the combineReducers to comine multiple reducers into one parent reducer
// const rootReducer = combineReducers({
//   datePicker,
//   form: formReducer
// });

const rootReducer = combineReducers({
  form: formReducer,
  checklist: checklistReducer,
  keywords: keywordsReducer
});

// export rootReducer
export default rootReducer;
