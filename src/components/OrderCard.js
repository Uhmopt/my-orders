import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {currency} from 'src/lib/formatter';
import {toNumber} from 'src/lib/math';
import {borderStyles} from 'src/theme/styles/borderStyles';
import {COLOR_BLACK} from 'src/theme/styles/colorStyles';
import {layoutStyles} from 'src/theme/styles/layoutStyles';
import {marginStyles} from 'src/theme/styles/marginStyles';
import {paddingStyles} from 'src/theme/styles/paddingStyles';
import {textStyles} from 'src/theme/styles/textStyles';
import UKIcon from './UKIcon';

export default function OrderCard({
  orderId = '',
  date = '',
  time = '',
  status = '',
  mealTitle = '',
  restaurantName = '',
  price = 0,
}) {
  const statusName = String(status).toLowerCase();

  return (
    <Layout
      style={[
        borderStyles.roundedMd,
        paddingStyles.py6,
        paddingStyles.px8,
        marginStyles.my2,
      ]}>
      {/* date, time */}
      <Layout
        style={[
          layoutStyles.flex,
          layoutStyles.flexRow,
          layoutStyles.justifyBetween,
          layoutStyles.itemsCenter,
          marginStyles.mb8,
        ]}>
        <Text appearance="hint">
          {date} {time}
        </Text>
        <Text
          style={[textStyles.bold]}
          status={
            statusName === 'completed'
              ? 'success'
              : statusName === 'processing'
              ? 'warning'
              : 'basic'
          }>
          {status}
        </Text>
      </Layout>
      {/* title, id */}
      <Layout>
        <Text category="h6" style={[textStyles.bold]}>
          {mealTitle} #{orderId}
        </Text>
      </Layout>
      {/* restaurant, price */}
      <Layout
        style={[
          layoutStyles.flex,
          layoutStyles.flexRow,
          layoutStyles.justifyBetween,
          layoutStyles.itemsCenter,
          marginStyles.my2,
        ]}>
        <Layout style={[layoutStyles.flexGrow]}>
          <Text>{restaurantName}</Text>
        </Layout>
        <Layout
          style={[
            layoutStyles.flex,
            layoutStyles.flexRow,
            layoutStyles.justifyEnd,
            layoutStyles.itemsCenter,
          ]}>
          <Text category="h6" style={[textStyles.bold]}>
            {currency.format(toNumber(price))}
          </Text>
          <UKIcon name="arrow-ios-forward" fill={COLOR_BLACK} />
        </Layout>
      </Layout>
    </Layout>
  );
}
