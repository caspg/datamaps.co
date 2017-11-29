import React from 'react'

/* eslint-disable max-len */
const About = () =>
  <div className="About__container">
    <div className="row center-xs">
      <div className="col-xs-10 col-sm-6">
        <div className="row start-xs">
          <p className="About__paragraph"><b>Datamaps.co</b> is a free and simple platform for creating visualizations with data maps. It allows you to upload CSV file with region data, and  fully customize your map's appearance. Your map chart can be saved as PNG or SVG.</p>
          <p className="About__paragraph">
          With datamaps.co, you can create a custom map of World, USA, China, Canada and more are coming.</p>
        </div>
      </div>
    </div>

    <style jsx>{`
      .About__container {
        margin-top: 50px;
      }

      .About__paragraph {
        margin-bottom: 20px;
      }
    `}</style>
  </div>

export default About
