import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = {
    palette: {
        primary: {
            main: '#53a318',
            dark: '#367806',
            light: '#4da700'
        },
        secondary: {
            main: '#f6f7f8',
            light: '#979797',
            dark: '#676767'
        }
    },
    typography: {
        fontFamily: [
            'Open Sans',
            'sans-serif'
        ].join(',')
    }
}
const appTheme = createMuiTheme(customTheme);

export default appTheme;
