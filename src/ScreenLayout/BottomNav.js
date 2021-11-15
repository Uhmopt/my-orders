import {BottomNavigationTab, Icon, Layout} from '@ui-kitten/components';
import React from 'react';
import {toNumber} from 'src/lib/math';
import {borderStyles} from 'src/theme/styles/borderStyles';
import {dimensionStyles} from 'src/theme/styles/dimensionStyles';
import {layoutStyles} from 'src/theme/styles/layoutStyles';
import {paddingStyles} from 'src/theme/styles/paddingStyles';
import {positionStyles} from 'src/theme/styles/positionStyles';
import {shadowStyles} from 'src/theme/styles/shadowStyles';

const FoodIcon = props => <Icon {...props} name="gift-outline" />;

const OrderIcon = props => <Icon {...props} name="shopping-cart-outline" />;

const SettingIcon = props => <Icon {...props} name="options-2-outline" />;
export default function BottomNav() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleSelect = value => setSelectedIndex(toNumber(value));

  return (
    <Layout
      style={[
        positionStyles.absolute,
        positionStyles.bottom0,
        dimensionStyles.wFull,
        paddingStyles.pt6,
        paddingStyles.pb4,
        borderStyles.roundedMdTR,
        borderStyles.roundedMdTL,
        shadowStyles.normal,
      ]}>
      <Layout
        style={[
          layoutStyles.flex,
          layoutStyles.flexRow,
          layoutStyles.justifyAround,
          layoutStyles.itemsCenter,
        ]}>
        <BottomNavigationTab
          onSelect={() => handleSelect(0)}
          icon={FoodIcon}
          selected={selectedIndex === 0}
        />
        <BottomNavigationTab
          onSelect={() => handleSelect(1)}
          icon={OrderIcon}
          selected={selectedIndex === 1}
        />
        <BottomNavigationTab
          onSelect={() => handleSelect(2)}
          icon={SettingIcon}
          selected={selectedIndex === 2}
        />
      </Layout>
    </Layout>
  );
}
