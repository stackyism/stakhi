import React from 'react'
import App from 'next/app'
import { Provider as StyletronProvider } from 'styletron-react'
import { styletron, debug } from '../styletron'
import WorkspaceApp from '../src/workspace/App';
import '../src/css/tailwind.css';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
          <WorkspaceApp>
            <Component {...pageProps} />
          </WorkspaceApp>
      </StyletronProvider>
    )
  }
}
export default MyApp;