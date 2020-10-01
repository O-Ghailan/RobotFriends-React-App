import { CHANGE_SEARCH_FIELD} from './constants.js';

export const setSearchField = (text) => ({       //setSearchField is our action
    type: 'CHANGE_SHEARCH_FIELD',
    payload: text
})