
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Board from '../../components/Board';

const currentLayout = [
  {
      player: "white",
      location: ["A", 5],
      type: "king",
      hasMoved: false,
  },
  {
      player: "white",
      location: ["A", 2],
      type: "knight",
      hasMoved: false,
  },
  {
      player: "white",
      location: ["A", 7],
      type: "knight",
      hasMoved: false,
  },
  {
      player: "black",
      location: ["H", 5],
      type: "king",
      hasMoved: false,
  },
  {
      player: "black",
      location: ["H", 2],
      type: "knight",
      hasMoved: false,
  },
  {
      player: "black",
      location: ["H", 7],
      type: "knight",
      hasMoved: false, 
  }
];

class App extends Component {
  static propTypes = {
    store: PropTypes.object
  }

  onClick = (location) => console.log("hello ",location[0], location[1]);

  render() {
    const { store } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Provider store={store}>
           <MuiThemeProvider theme={theme}>
              <Board onClick={this.onClick} currentLayout={currentLayout}/>
            </MuiThemeProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;