import { StyleSheet } from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: appStyle.calendarBackground
      //edit
      // backgroundColor: 'blue',
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground,
      //edit
      // height: 400,
    },
    week: {
      marginTop: 7,
      marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

