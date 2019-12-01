import axios from 'axios';
import {ngrok} from '../ngrok'

// const GET_EXERCISE = 'GET_EXERCISE';
const SET_SOCKET = 'SET_SOCKET';
const REMOVE_SOCKET = 'REMOVE_SOCKET';

export const setSocket = socket => ({
  type: SET_SOCKET,
  socket,
});

export const removeSocket = socket => ({
    type: REMOVE_SOCKET,
    socket,
  });

// export const thunk = id => async dispatch => {
//   try {
//     const response = await axios.get(`/api/sockets/${id}`);
//     dispatch(getSocket(response.data));
//   } catch (err) {
//     console.error(err);
//   }
// };

const initialState = {};

//should be a GET_SOCKETS probably
const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOCKET:
      return action.socket;
      case REMOVE_SOCKET:
        return initialState;
    default:
      return state;
  }
};
export default socketReducer;
