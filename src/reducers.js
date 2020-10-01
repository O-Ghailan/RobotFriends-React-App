import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  searchField: '', //initial state/object in redux store
};

export const searchRobots = (state = initialState, action = {}) => {
  //we want our reducer to be a pure function
  switch (action.type) {
    case CHANGE_SEARCH_FIELD: //here we recieved an action called CHANEG_SEARCHFIELD, in this case :
      //return {...state, searchField: action.payload}   //return the new state with action.payload whatever the user had enterred
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
