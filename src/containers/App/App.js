
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

class App extends Component {
  static propTypes = {
    store: PropTypes.object
  }
  render() {
    const { store } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
           <MuiThemeProvider theme={theme}>
              <div>PUT APPLICATION HERE</div>
            </MuiThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;