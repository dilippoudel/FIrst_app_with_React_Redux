import React from 'react';
import SongLists from './songList';
import SongDetails from './SongDetails';

const App =()=>{
        return (
            <div style = {{marginTop:"50px"}} className = "container">
            <div className = "row">
            <div className = "col-6">
                <SongLists/>
            </div>
            <div style = {{marginTop: "50px", backgroundColor: "lightblue"}} 
            className = "col-6">
            <SongDetails/>
            </div>
            </div>
            </div>
        );

}

export default App;