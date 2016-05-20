import * as constants from '../constants/ActionTypes'

export function changeMapTitle(title) {
  return { type: constants.CHANGE_MAP_TITLE, title }
}

export function changeLegendTitle(title) {
  return { type: constants.CHANGE_LEGEND_TITLE, title }
}

export function changeLinearStartColor(color) {
  return { type: constants.CHANGE_LINEAR_START_COLOR, color }
}

export function changeLinearEndColor(color) {
  return { type: constants.CHANGE_LINEAR_END_COLOR, color }
}

export function changeLinearNoDataColor(color) {
  return { type: constants.CHANGE_LINEAR_NO_DATA_COLOR, color }
}

export function changeDataClassification(classification) {
  return { type: constants.CHANGE_DATA_CLASSIFICATION, classification }
}

export function changeColorPallete(palleteKey, pallete) {
  return { type: constants.CHANGE_COLOR_PALLETE, palleteKey, pallete }
}

export function changeClassesCount(count, pallete) {
  return { type: constants.CHANGE_CLASSES_COUNT, count, pallete }
}

export function changeDomainStartValue(value) {
  return { type: constants.CHANGE_DOMAIN_START_VALUE, value }
}

export function changeDomainEndValue(value) {
  return { type: constants.CHANGE_DOMAIN_END_VALUE, value }
}

export function changeBorderColor(color) {
  return { type: constants.CHANGE_BORDER_COLOR, color }
}
