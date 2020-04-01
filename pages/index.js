// DOCUMENTATION: http://styletron.org

import { LightTheme, BaseProvider, styled, DarkTheme} from 'baseui';
import { StatefulInput } from 'baseui/input';
import Button from '@material-ui/core/Button';

import App from './../src/workspace/App';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export default () => (
  <BaseProvider theme={DarkTheme}>
    <App/>
  </BaseProvider>
);
