import { combineReducers } from 'redux';

const initState = [
    { title: 'Wondderwall', duration: '4:40' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' },
];

const songsReducer = (state = initState) => {
  return state;
};

// 'selectedSong = null' -> state
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

// 
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})