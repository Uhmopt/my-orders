import React from 'react';
import {ScrollView, View} from 'react-native';
import {dimensionStyles} from 'src/theme/styles/dimensionStyles';
import {layoutStyles} from 'src/theme/styles/layoutStyles';
import {marginStyles} from 'src/theme/styles/marginStyles';
import {overflowStyles} from 'src/theme/styles/overflowStyles';
import {paddingStyles} from 'src/theme/styles/paddingStyles';
import BottomNav from './BottomNav';

export default function ScreenLayout({children = null, ...props}) {
  return (
    <View
      style={[
        layoutStyles.flex,
        layoutStyles.flexCol,
        layoutStyles.justifyBetween,
      ]}>
      <ScrollView
        style={[
          layoutStyles.flexGrow,
          overflowStyles.hidden,
          dimensionStyles.hFull,
        ]}
        contentContainerStyle={[
          marginStyles.mt4,
          marginStyles.mx8,
          paddingStyles.pb32,
        ]}>
        {children}
      </ScrollView>
      <BottomNav />
    </View>
  );
}
