import {UnistylesTheme} from 'react-native-unistyles';

import {Main} from './components/layout';

import {theme} from './config/unistyles';

import {Home} from './screens/Home';

export function App() {
  return (
    <UnistylesTheme theme={theme}>
      <Main>
        <Home />
      </Main>
    </UnistylesTheme>
  );
}
