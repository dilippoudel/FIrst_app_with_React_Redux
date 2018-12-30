import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../action/index';
class SongLists extends Component {
    render() {
        return (
          this.props.songs.map((song)=>{
              return (
                  <div key = {song.title} className = "grid">
                  <ul className = "list-group" >
                  <li className = "list-group-item">{song.title}
                  <button 
                  className = "btn btn-primary sm m-2"
                  style = {{float: "right"}}
                  onClick = {()=>this.props.selectSong(song)}
                  >
                  Select
                  </button>
                  </li>
                  </ul>
                  </div>
              )
          })
        );
    }
}
const mapStateToProps = (state) => {
return{songs : state.songs};
}
export default connect(mapStateToProps, {selectSong})(SongLists);