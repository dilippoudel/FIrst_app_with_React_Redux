import {combineReducers} from 'redux';


const songsReducer = () => {
    return [
        {title: 'The broken Heart', duration : '4:30'},
        {title: 'The real Hero', duration : '2:15'},
        {title: 'The King of Jungle', duration : '3:30'},
        {title: 'i want it that way', duration : '6:40'},
];
}
const selectedSongReducer =(selectedSong = null, action)=> {
    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})