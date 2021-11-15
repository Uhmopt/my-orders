import {StyleSheet} from 'react-native';

export const layoutStyles = StyleSheet.create({
  // flex
  flex: {display: 'flex'},
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  flexGrow: {flexGrow: 1},
  wrap: {flexWrap: 'wrap'},
  noWrap: {flexWrap: 'nowrap'},
  flexShrink: {flexShrink: 1},

  // flex basis
  basis50: {flexBasis: '50%'},

  // justifyContent
  justifyStart: {justifyContent: 'flex-start'},
  justifyCenter: {justifyContent: 'center'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyAround: {justifyContent: 'space-around'},

  //alignItems
  itemsCenter: {alignItems: 'center'},
  itemsStretch: {alignItems: 'stretch'},
  itemsEnd: {alignItems: 'flex-end'},

  // pull-right
  pullRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
