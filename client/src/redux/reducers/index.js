import { ADD_ARTICLE } from "../constants/action-types";
let pluginPickedArray =  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
const initialState = {
  articles: [[pluginPickedArray]]
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
