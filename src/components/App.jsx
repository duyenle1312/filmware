import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <>
      <CssBaseline />
      <main>
        <Switch>
          <Route exact path="/movie/:id">
            <h1>Movie Info</h1>
          </Route>
          <Route exact path="/actor/:id">
            <h1>Actor</h1>
          </Route>
          <Route exact path="/">
            <h1>Movies</h1>
          </Route>
          <Route exact path="/profile/:id">
            <h1>Profile</h1>
          </Route>
        </Switch>
      </main>
    </>
  )
}

export default App