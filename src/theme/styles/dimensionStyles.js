import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from 'src/constants/global';

export const dimensionStyles = StyleSheet.create({
  // height
  hFull: {
    height: '100%',
  },
  hScreen: {
    height: WINDOW_HEIGHT,
  },
  hScreen90: {
    height: WINDOW_HEIGHT - 50,
  },
  hScreen80: {
    height: WINDOW_HEIGHT - 100,
  },
  hScreen70: {
    height: WINDOW_HEIGHT - 150,
  },
  hScreen60: {
    height: WINDOW_HEIGHT - 200,
  },
  hScreen50: {
    height: WINDOW_HEIGHT - 250,
  },
  h20: {height: 20},
  h28: {height: 28},
  h32: {height: 32},
  h100: {height: 100},

  maxHFull: {
    maxHeight: '100%',
  },
  maxHScreen: {
    maxHeight: WINDOW_HEIGHT,
  },
  maxHScreen90: {
    maxHeight: WINDOW_HEIGHT - 50,
  },
  maxHScreen80: {
    maxHeight: WINDOW_HEIGHT - 100,
  },
  maxHScreen70: {
    maxHeight: WINDOW_HEIGHT - 150,
  },
  maxHScreen60: {
    maxHeight: WINDOW_HEIGHT - 200,
  },
  maxHScreen50: {
    maxHeight: WINDOW_HEIGHT - 250,
  },
  maxH20: {maxHeight: 20},
  maxH28: {maxHeight: 28},
  maxH32: {maxHeight: 32},
  maxH100: {maxHeight: 100},

  minH200: {
    minHeight: 200,
  },

  // width
  wFull: {
    width: '100%',
  },
  wScreen: {
    width: WINDOW_WIDTH,
  },
  wScreen90: {
    width: WINDOW_WIDTH - 50,
  },
  wScreen80: {
    width: WINDOW_WIDTH - 100,
  },
  wScreen70: {
    width: WINDOW_WIDTH - 150,
  },
  w20: {width: 20},
  w28: {width: 28},
  w32: {width: 32},
  w100: {width: 100},

  maxWFull: {
    maxWidth: '100%',
  },
  maxWScreen: {
    maxWidth: WINDOW_WIDTH,
  },
  maxWScreen90: {
    maxWidth: WINDOW_WIDTH - 50,
  },
  maxWScreen80: {
    maxWidth: WINDOW_WIDTH - 100,
  },
  maxWScreen70: {
    maxWidth: WINDOW_WIDTH - 150,
  },
  maxW20: {maxWidth: 20},
  maxW28: {maxWidth: 28},
  maxW32: {maxWidth: 32},
  maxW100: {maxWidth: 100},

  minW300: {
    minWidth: 300,
  },

  minWFull: {
    minWidth: '100%',
  },
});
