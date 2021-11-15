import {Dimensions} from 'react-native';

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export const {height: WINDOW_HEIGHT, width: WINDOW_WIDTH} =
  Dimensions.get('window');
