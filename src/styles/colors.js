const darkColor = '#1D1D1D';

const grey100 = '#F5F5F5';
const grey300 = '#E0E0E0';
const grey600 = '#757575';
const greyDark = '#424242';

const orange300 = '#FFB74D';
const orange400 = '#FFA726';

const purple600 = '#5E35B1';
const purple400 = '#7E57C2';

/* eslint-disable max-len */
const purpleGradient = `
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

export {
  darkColor,
  greyDark,
  grey100,
  grey300,
  grey600,

  orange300,
  orange400,

  purple400,
  purple600,
  purpleGradient,
}
