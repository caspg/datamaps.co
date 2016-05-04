import React from 'react'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import ActionButton from '../ActionButton/ActionButton'
import EditorImage from '../EditorImage/EditorImage'

const Home = () =>
  <div>
    <Header>
      <Navbar textColor="white" />
    </Header>
    <ActionButton />
    <EditorImage />
  </div>

export default Home;
