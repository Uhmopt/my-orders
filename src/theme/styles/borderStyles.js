import {StyleSheet} from 'react-native';
import {
  COLOR_ERROR,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_SUCCESS,
  COLOR_WARNING,
} from './colorStyles';

export const borderStyles = StyleSheet.create({
  // border radius
  rounded: {borderRadius: 10},
  roundedTR: {borderTopRightRadius: 10},
  roundedTL: {borderTopLeftRadius: 10},
  roundedMd: {borderRadius: 20},
  roundedMdTR: {borderTopRightRadius: 20},
  roundedMdTL: {borderTopLeftRadius: 20},
  roundedTopRightLarge: {borderTopRightRadius: 100},

  // border
  primary: {borderColor: COLOR_PRIMARY},
  secondary: {borderColor: COLOR_SECONDARY},
  success: {borderColor: COLOR_SUCCESS},
  warning: {borderColor: COLOR_WARNING},
  error: {borderColor: COLOR_ERROR},

  // border
  border0: {borderWidth: 0},
  border1: {borderWidth: 1},
  border2: {borderWidth: 2},
});
