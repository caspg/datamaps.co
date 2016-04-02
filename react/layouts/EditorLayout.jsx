import React, { Component, PropTypes } from 'react'

import MapContainer from '../containers/MapContainer'

export default class EditorLayout extends Component {
  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this)
    this.isFullMap = this.isFullMap.bind(this)

    this.state = {
      isFullMap: false,
    }
  }

  componentDidMount() {
    this.setState({ isFullMap: this.isFullMap() })

    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    const isFullMap = this.isFullMap()

    if (isFullMap !== this.state.isFullMap) {
      this.setState({ isFullMap })
    }
  }

  isFullMap() {
    return this.refs.container.clientWidth <= 900;
  }

  get styles() {
    const editorBodyWidth = 400
    const { isFullMap } = this.state

    return {
      wrapper: {
        marginTop: 50,
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
      },
      container: {
        position: 'relative',
        height: '100%',
        width: '100%',
      },
      mapColumn: {
        marginRight: isFullMap ? 0 : editorBodyWidth,
        height: '100%',
        overflow: 'scroll',
      },
      editorBodyColumn: {
        display: isFullMap ? 'none' : 'block',
        width: editorBodyWidth,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        border: '1px solid #ddd',
        borderTop: 'none',
        overflowY: 'scroll',
        overflowX: 'hidden',
      },
    }
  }

  render() {
    return (
      <div className="editor-wrapper" style={this.styles.wrapper}>
        <div ref="container" style={this.styles.container}>
          <div className="map-column" style={this.styles.mapColumn}>
            <MapContainer />
          </div>
          <div className="editor-body-column" style={this.styles.editorBodyColumn}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

EditorLayout.propTypes = {
  children: PropTypes.node,
}
