import React, { PropTypes } from 'react';
import Head from 'next/head';

AppHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

AppHead.defaultProps = {
  title: 'Datamaps.co',
  // eslint-disable-next-line max-len
  description: 'Free and simple platform for creating data visualisation with data maps. With datamaps.co, you can create a custom map of USA, China, World and many more.',
}

function AppHead(props) {
  return (
    <Head>
      <title>{props.title}</title>

      <meta name="msvalidate.01" content="E13826D612F7D8D97C50E1DB61BF34C6" />
      <meta name="description" content={props.description} />

      <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <link href="/static/css/vendors/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/vendors/flexboxgrid.min.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/vendors/skeleton.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/vendors/react-select.css" rel="stylesheet" type="text/css" />
      <link href="/static/css/vendors/react-typist.css" rel="stylesheet" type="text/css" />
    </Head>
  );
}

export default AppHead;
