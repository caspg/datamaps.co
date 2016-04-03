import { EDIT_ROW } from '../constants/ActionTypes';

export function editRow(regionName, value) {
  return { type: EDIT_ROW, regionName, value };
}
