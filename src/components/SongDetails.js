import React from 'react';
import {connect} from 'react-redux';
const SongDetails = ({song}) => {
    if(!song){
        return <div><h4>Please select song</h4></div>
    }
    return (
    <div>
        <h4>Song Details</h4>
        <h6>Title: {song.title} </h6>
        <h6>Length: {song.duration} </h6>

    </div>)
};
const mapStateToProps = (state) => {
     return (
         {song: state.selectedSong}
         )
}
export default connect(mapStateToProps)(SongDetails);