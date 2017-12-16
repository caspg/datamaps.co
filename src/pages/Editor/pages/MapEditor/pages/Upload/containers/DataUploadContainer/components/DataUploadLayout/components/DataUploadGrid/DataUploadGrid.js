import React, { Component } from 'react'
import PropTypes from 'prop-types'

import uploadSteps from '@src/config/constants/upload'
import { grey500, greyDark, grey100 } from '@src/styles/colors'

const NUMBER_OF_ROWS = 5

class DataUploadGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      highlightedColumnIndex: undefined,
    }

    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleColumnClick = this.handleColumnClick.bind(this)
  }

  handleMouseEnter(index) {
    if (this.state.highlightedColumnIndex !== index) {
      this.setState({
        highlightedColumnIndex: index,
      })
    }
  }

  handleMouseLeave() {
    this.setState({
      highlightedColumnIndex: undefined,
    })
  }

  handleColumnClick() {
    this.props.onColumnClick(
      this.state.highlightedColumnIndex
    )
  }

  renderRows() {
    const { currentStep, columnIndexes } = this.props
    const orange50 = '#FFF3E0'
    const orange200 = '#FFCC80'
    const lightGreen50 = '#F1F8E9'
    const lightGreen200 = '#C5E1A5'
    const lightBlue50 = '#E1F5FE'
    const lightBlue200 = '#81D4FA'

    const highlightColors = {
      [uploadSteps.CODE]: orange50,
      [uploadSteps.NAME]: lightGreen50,
      [uploadSteps.VALUE]: lightBlue50,
    }

    const renderCells = (row, rowIndex) =>
      row.map((datum, columnIndex) => {
        const headerClassName = (rowIndex === 0) ? 'DataUploadGrid__header' : ''
        const isHighlighted = this.state.highlightedColumnIndex === columnIndex

        const backgroundColor = () => {
          if (columnIndexes.code === columnIndex) return orange200
          else if (columnIndexes.name === columnIndex) return lightGreen200
          else if (columnIndexes.value === columnIndex) return lightBlue200
          else if (isHighlighted) return highlightColors[currentStep]
          return ''
        }

        const cellStyle = {
          backgroundColor: backgroundColor(),
        }

        return (
          <td
            key={`${columnIndex}-td`}
            className={`DataUploadGrid__cell ${headerClassName}`}
            onMouseEnter={() => this.handleMouseEnter(columnIndex)}
            style={cellStyle}
          >
            {datum}
          </td>
        )}
      )

    return this.props.data.slice(0, NUMBER_OF_ROWS).map((row, rowIndex) =>
      <tr
        key={`${rowIndex}-tr`}
      >
        {renderCells(row, rowIndex)}
      </tr>
    )
  }

  renderRowsInfo() {
    const rowsTotal = this.props.data.length
    const columnsTotal = this.props.data[0].length

    const getRowsInfo = () => {
      if (rowsTotal > 10) {
        return `${NUMBER_OF_ROWS} of ${rowsTotal}`
      }

      return rowsTotal
    }

    return (
      <div>
        {`* Showing ${getRowsInfo()} rows and ${columnsTotal} columns.`}
      </div>
    )
  }

  render() {
    return (
      <div className="DataUploadGrid">
        {this.renderRowsInfo()}

        <div className="DataUploadGrid__tableContainer">
          <table
            className="DataUploadGrid__table"
            onMouseLeave={this.handleMouseLeave}
            onClick={this.handleColumnClick}
          >
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>

        <style jsx>{`
          .DataUploadGrid {
            margin-top: 30px;
            padding-left: 35px;
          }

          .DataUploadGrid__tableContainer {
            overflow: auto;
          }

          .DataUploadGrid__table {
            background-color: white;
            border: 1px solid ${grey500};
          }
        `}</style>

        <style jsx global>{`
          .DataUploadGrid__cell {
            min-width: 200px;
            padding-left: 25px;

            border-right: 1px solid ${grey500};
            border-bottom: 1px solid ${grey500};
            cursor: pointer;
          }

          .DataUploadGrid__cell:first-child {
            padding-left: 40px;
          }

          .DataUploadGrid__header {
            border: 1px solid ${greyDark};
            background-color: ${grey100};
            font-weight: 600;
          }
        `}</style>
      </div>
    )
  }
}

DataUploadGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  currentStep: PropTypes.string.isRequired,
  onColumnClick: PropTypes.func.isRequired,
  columnIndexes: PropTypes.shape({
    code: PropTypes.number,
    name: PropTypes.number,
    value: PropTypes.number,
  }),
}

export default DataUploadGrid
