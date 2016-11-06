import React from 'react'

import metaTags from 'config/meta'

import Header from '../Header/Header'
import Navbar from 'components/Navbar/Navbar'
import About from '../About/About'
import ActionButton from '../ActionButton/ActionButton'
import EditorAttributes from '../EditorAttributes/EditorAttributes'
import Footer from 'components/Footer/Footer'
import BetaListSection from '../BetaListSection'
import MapsImages from '../MapsImages'
import SocialIcons from '../SocialIcons'

const Home = () => {
  document.title = metaTags.titles.home

  return (
    <div>
      <Header>
        <Navbar />
      </Header>

      <EditorAttributes />
      <BetaListSection />
      <MapsImages />


      <About />
      <ActionButton />

      <SocialIcons />

      <Footer>
        <i>
          Icons made by <a style={{ color: 'inherit' }} href="http://www.freepik.com" title="Freepik" target="_blank"> Freepik</a>
        </i>
      </Footer>
    </div>
  )
}

export default Home;
