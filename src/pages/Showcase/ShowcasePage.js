import React from 'react';
import Link from 'next/link'

import showcase from '@src/config/showcase'
import routes from '@src/config/routes'
import metaTags from '@src/config/meta'
import AppHead from '@src/components/AppHead';
import GlobalStyles from '@src/components/GlobalStyles';
import Navbar from '@src/components/Navbar'
import HamburgerMenu from '@src/components/HamburgerMenu'
import Footer from '@src/components/Footer'

import ShowcaseItem from './components/ShowcaseItem';

function ShowcasePage() {
  return (
    <div>
      <AppHead title={metaTags.titles.showcase} />
      <GlobalStyles />

      <Navbar className="box-shadow">
        <HamburgerMenu />
      </Navbar>

      <div className="Showcase__contact-wrapper">
        <div className="row center-xs">
          <div className="col-xs-8">
            <div className="Showcase__intro">
              <h4>Example maps</h4>
              <p>
                <Link href={routes.contact}><a>Contact</a></Link> me if you want to add your work to this site.</p>
            </div>

            {showcase.map((item, index) => (
              <ShowcaseItem
                key={index}
                title={item.title}
                fileName={item.fileName}
                description={item.description}
                source={item.source}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .Showcase__contact-wrapper {
          margin-top: 40px;
          padding: 0 25px;
          margin-bottom: 90px;
        }

        .Showcase__intro {
          padding-left: 20px;
          text-align: left;
          margin-bottom: 60px;
        }
      `}</style>
    </div>
  );
}

export default ShowcasePage;
