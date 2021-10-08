import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Playlists from './Playlists'
import DetailPlaylist from './DetailPlaylist'
import Video from './Video'

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Playlists />
                </Route>
                <Route path="/playlist/:id" component={DetailPlaylist}/>
                <Route path="/video/:videoId" component={Video}/>
            </Switch>
        </Router>
    )
}

export default App