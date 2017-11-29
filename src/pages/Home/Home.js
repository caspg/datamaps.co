import React from 'react';

import metaTags from '@src/config/meta'
import AppHead from '@src/components/AppHead';
import GlobalStyles from '@src/components/GlobalStyles';
import Navbar from '@src/components/Navbar'
import HamburgerMenu from '@src/components/HamburgerMenu'

import Header from './components/Header';
import EditorAttributes from './components/EditorAttributes';
import MapsImages from './components/MapsImages';
import About from './components/About';

function Home() {
  return (
    <div>
      <AppHead title={metaTags.titles.home} />
      <GlobalStyles />

      <Header>
        <Navbar className="box-shadow">
        <HamburgerMenu shadowColor="dark" />
        </Navbar>
      </Header>

      <EditorAttributes />
      <MapsImages />
      <About />
    </div>
  );
}

export default Home;
