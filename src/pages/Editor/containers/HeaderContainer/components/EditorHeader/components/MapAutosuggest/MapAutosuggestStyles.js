import React from 'react';

import { lightBlue, grey300 } from '@src/styles/colors'

const INPUT_WIDTH = 170;
const CONTAINER_WIDTH = 168;

function MapAutosuggestStyles() {
  return (
    <style jsx global>{`
      .react-autosuggest__container {
        position: relative;
      }

      .react-autosuggest__input {
        margin-top: 5px;
        margin-bottom: 0;
        width: ${INPUT_WIDTH}px;
        height: 30px !important;
      }

      .react-autosuggest__input:focus {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      .react-autosuggest__suggestions-container {
        position: absolute;
        top: 100%;
        left: 0;
        max-height: 280px;
        overflow: auto;
        background: white;
        width: ${CONTAINER_WIDTH}px;

        border: 1px solid ${grey300};
        border-radius: 4px;
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      .react-autosuggest__suggestions-container:empty {
        border: none;
      }

      .react-autosuggest__suggestions-list {
        list-style-type: none;
        margin-bottom: 0;
      }

      .react-autosuggest__suggestion {
        padding: 5px 0;
        padding-left: 15px;
        margin-bottom: 0;
      }

      .react-autosuggest__suggestion--highlighted {
        background-color: ${lightBlue};
      }
    `}</style>
  );
}

export default MapAutosuggestStyles;
