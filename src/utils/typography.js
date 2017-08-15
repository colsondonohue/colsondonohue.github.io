import Typography from 'typography';
import StAnnes from 'typography-theme-st-annes';

StAnnes.headerFontFamily = ['Source Sans Pro', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'];
StAnnes.baseFontSize = '18px';
StAnnes.scaleRatio = 3;
StAnnes.baseLineHeight = 1.6;

const typography = new Typography(StAnnes);

export default typography;
