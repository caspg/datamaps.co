import React from 'react'
import PropTypes from 'prop-types'

const ShowcaseItem = (props) =>
  <div className="ShowcaseItem__container">
    <img
      className="ShowcaseItem__image"
      src={`/static/images/showcase/${props.fileName}`}
      alt={props.title}
    />

    <div className="ShowcaseItem__text">
      <p>{props.description}</p>
      <p className="ShowcaseItem__source">
        <a href={props.source}>{props.source}</a>
      </p>
    </div>

    <style jsx>{`
      .ShowcaseItem__container {
        margin-bottom: 100px;
      }

      .ShowcaseItem__image {
        border: 1px solid #ddd;
        border-radius: 5px;
        max-width: 800px;
        width: 100%;
        height: auto;
      }

      .ShowcaseItem__text {
        text-align: left;
        margin-top: 30px;
        padding: 0 60px;
      }

      .ShowcaseItem__source {
        margin-top: 10px;
        font-size: 0.8em;
      }
    `}</style>
  </div>

ShowcaseItem.propTypes = {
  fileName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ShowcaseItem
