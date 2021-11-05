import React from 'react'
import GiftListContainer from '../containers/GifListContainer'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        <NavBar color='black' title="Giphy Search" />
        <GiftListContainer />
    </div>
  )
}

export default App

