import React from 'react'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import ActionButton from '../ActionButton/ActionButton'

const Home = () =>
  <div>
    <Header>
      <Navbar textColor="white" />
    </Header>
    <ActionButton />
  </div>

export default Home;
