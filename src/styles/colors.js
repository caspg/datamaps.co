export const darkColor = '#1D1D1D';

export const grey100 = '#F5F5F5';
export const grey300 = '#E0E0E0';
export const grey600 = '#757575';
export const greyDark = '#424242';

export const orange300 = '#FFB74D';
export const orange400 = '#FFA726';

export const purple600 = '#5E35B1';
export const purple400 = '#7E57C2';

export const lightGreen50 = '#F1F8E9';
export const lightGreen200 = '#C5E1A5';
export const lightGreen400 = '#9CCC65';
export const lightGreen900 = '#33691E';

export const red900 = '#B71C1C';
export const red300 = '#E57373';
export const red50 = '#FFEBEE';

export const seaBlue = '#03A9F4';
export const lightBlue = '#f2f9fc';
export const lightBlue50 = '#E1F5FE';
export const lightBlue200 = '#81D4FA';

/* eslint-disable max-len */
export const purpleGradient = `
  background-color: $purple-color-500;
  background: -moz-linear-gradient(50% 100% 90deg,${purple600} 0%,${purple400} 95.0%);
  background: -webkit-linear-gradient(90deg, ${purple600} 0%, ${purple400} 95.0%);
  background: -webkit-gradient(linear,50% 100% ,50% 0% ,color-stop(0,${purple600} ),color-stop(0.950,${purple400} ));
  background: -o-linear-gradient(90deg, ${purple600} 0%, ${purple400} 95.0%);
  background: -ms-linear-gradient(90deg, ${purple600} 0%, ${purple400} 95.0%);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='${purple600}', endColorstr='${purple400}' ,GradientType=0)";
  background: linear-gradient(0deg, ${purple600} 0%, ${purple400} 95.0%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='${purple600}',endColorstr='${purple400}' , GradientType=0);
`;
/* eslint-enable max-len */
