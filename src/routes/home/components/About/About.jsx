import React from 'react'

import style from './About.css'

const About = () =>
  <div className={style.container}>
    <div className="row center-xs">
      <div className="col-xs-10 col-sm-6">
        <div className="row start-xs">
          <p className={style.paragraph}><b>Datamaps.co</b> is a free and simple platform for creating visualizations with data maps. It allows you to upload CSV file with region data, and  fully customize your map's appearance. Your map chart can be saved as PNG or SVG.</p>
          <p className={style.paragraph}>With datamaps.co, you can create a custom map of World, USA, China, Canada and more are coming.</p>
          <p className={style.paragraph}>To stay informed, follow <a href="https://twitter.com/datamapsco">@datamapsco</a> profile on twitter.</p>
        </div>
      </div>
    </div>
  </div>

export default About
