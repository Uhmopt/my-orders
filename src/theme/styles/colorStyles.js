import {StyleSheet} from 'react-native';

export const COLOR_PRIMARY = '#0A86F0';
export const COLOR_SECONDARY = '#44CAFF';

export const COLOR_SUCCESS = '#55C431';
export const COLOR_WARNING = '#FF9E02';
export const COLOR_ERROR = '#FF3A28';

export const COLOR_WHITE = '#FFFFFF';
export const COLOR_GRAY = '#383838';
export const COLOR_DARK_GRAY = '#2B2B2B';
export const COLOR_BLACK = '#1C1C1C';

export const COLOR_TRANSPARENT = '#1C1C1C00';

export const colorStyles = StyleSheet.create({
  // background
  bgWhite: {backgroundColor: COLOR_WHITE},
  bgWhite50: {backgroundColor: COLOR_WHITE + '88'},
  bgBlack: {backgroundColor: COLOR_BLACK},
  bgBlack50: {backgroundColor: COLOR_BLACK + '88'},
  bgPrimary: {backgroundColor: COLOR_PRIMARY},
  bgSecondary: {backgroundColor: COLOR_SECONDARY},
  bgSuccess: {backgroundColor: COLOR_SUCCESS},
  bgWarning: {backgroundColor: COLOR_WARNING},
  bgWarning50: {backgroundColor: COLOR_WARNING + 88},
  bgError: {backgroundColor: COLOR_ERROR},

  // color
  colorWhite: {color: COLOR_WHITE},
  colorPrimary: {color: COLOR_PRIMARY},
  colorSecondary: {color: COLOR_SECONDARY},
  colorSuccess: {color: COLOR_SUCCESS},
  colorWarning: {color: COLOR_WARNING},
  colorError: {color: COLOR_ERROR},
});
