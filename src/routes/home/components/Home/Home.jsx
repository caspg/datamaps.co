import React from 'react'

import metaTags from 'config/meta'
import Header from '../Header/Header'
import Navbar from 'components/Navbar/Navbar'
import About from '../About/About'
import ActionButton from '../ActionButton/ActionButton'
import EditorImage from '../EditorImage/EditorImage'
import EditorAttributes from '../EditorAttributes/EditorAttributes'
import Footer from 'components/Footer/Footer'

const Home = () => {
  document.title = metaTags.titles.home

  return (
    <div>
      <Header>
        <Navbar textColor="white" />
      </Header>

      <About />

      <ActionButton />
      <EditorImage />
      <EditorAttributes />

      <Footer>
        <i>
          Icons made by <a style={{ color: 'inherit' }} href="http://www.freepik.com" title="Freepik" target="_blank"> Freepik</a>
        </i>
      </Footer>
    </div>
  )
}

export default Home;
