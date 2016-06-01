import React from 'react'
import { Link } from 'react-router'

import metaTags from 'config/meta'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
import ShowcaseItem from '../ShowcaseItem/ShowcaseItem'

import rotues from 'config/routes'
import style from './ShowcaseView.css'
import showcase from 'config/showcase'

const ShowcaseView = () => {
  document.title = metaTags.titles.showcase

  const showcaseItems = showcase.map((item, index) =>
    <ShowcaseItem
      key={index}
      title={item.title}
      fileName={item.fileName}
      description={item.description}
      source={item.source}
    />
  )

  return (
    <div>
      <div className={style.header}>
        <Navbar textColor="white" />
      </div>

      <div className={style['contact-wrapper']}>
        <div className="row center-xs">
          <div className="col-xs-8">
            <div className={style.intro}>
              <h4>Example maps</h4>
              <p><Link to={rotues.contact}>Contact</Link> me if you want to add your work to this site.</p>
            </div>

            {showcaseItems}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ShowcaseView
