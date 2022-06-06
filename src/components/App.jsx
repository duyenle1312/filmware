import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Switch } from 'react-router-dom'
import { Actors, Profile, NavBar, Movies, MovieInfo } from './'

const App = () => {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInfo />
          </Route>
          <Route exact path="/actor/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App