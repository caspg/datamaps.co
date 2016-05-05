import React from 'react'

import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import ActionButton from '../ActionButton/ActionButton'
import EditorImage from '../EditorImage/EditorImage'
import EditorAttributes from '../EditorAttributes/EditorAttributes'
import Footer from '../Footer/Footer'

const Home = () =>
  <div>
    <Header>
      <Navbar textColor="white" />
    </Header>

    <ActionButton />
    <EditorImage />
    <EditorAttributes />

    <Footer />
  </div>

export default Home;
