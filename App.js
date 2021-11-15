import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import {Provider} from 'react-redux';
import {FeatherIconsPack} from 'src/components/feather-icons';
import {AppNavigator} from 'src/navigator';
import store from 'src/store';
import {default as theme} from 'src/theme/theme.json';

export default () => (
  <Provider store={store}>
    <IconRegistry icons={[EvaIconsPack, FeatherIconsPack]} />
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <AppNavigator />
    </ApplicationProvider>
  </Provider>
);
