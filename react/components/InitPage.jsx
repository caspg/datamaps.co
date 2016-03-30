import React, { Component } from 'react'
import { Link } from 'react-router'

export default class InitPage extends Component {
  render() {
    const btnStyle = {
      marginTop: 10,
      minWidth: 300,
    }

    return (
      <div className="row center-xs" style={{ marginTop: 150 }}>
        <div className="col-xs-12">
          <Link to="#" className="button" style={btnStyle}>Upload CSV data file</Link>
          <Link to="#" className="button" style={btnStyle}>Start with empty data table</Link>
        </div>
      </div>
    );
  }
}
