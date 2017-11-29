import React from 'react';

import metaTags from 'config/meta'
import AppHead from 'components/AppHead';
import GlobalStyles from 'components/GlobalStyles';
// import Navbar from 'components/Navbar'
// import HamburgerMenu from 'components/HamburgerMenu'

import Header from './components/Header';

function Home() {
  return (
    <div>
      <AppHead title={metaTags.titles.home} />
      <GlobalStyles />

      <Header>
        {/* <Navbar className="box-shadow">
          <HamburgerMenu shadowColor="dark" />
        </Navbar> */}
      </Header>
    </div>
  );
}

export default Home;
