import { createStore } from 'redux';
import rootReducer from './reducer.jsx';

const store = createStore(rootReducer);
export default store;