// DOCUMENTATION: http://styletron.org

import { useStyletron } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export default () => (
  <BaseProvider theme={LightTheme}>
    <Centered>
      <StatefulInput />
    </Centered>
  </BaseProvider>
);
