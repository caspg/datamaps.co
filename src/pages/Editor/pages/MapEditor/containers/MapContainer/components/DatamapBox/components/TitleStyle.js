import React from 'react';

import { greyDark, grey600 } from '@src/styles/colors';

function TitleStyle() {
  return (
    <div>
      <style jsx global>{`
        .map-title {
          text-anchor: start;
          font-size: 25px;
        }

        .legend-title {
          fill: ${greyDark};
          text-anchor: end;
          font-size: 12px;
        }

        .crreated-with {
          font-weight: 300;
          font-size: 11px;
          fill: ${grey600};
        }
      `}</style>
    </div>
  );
}

export default TitleStyle;
