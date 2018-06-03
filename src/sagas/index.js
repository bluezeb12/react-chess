import { fork } from 'redux-saga/effects';
import socketSaga from './socket';
import gameSaga from './game';

const AppSaga = (payload = {}) => {

    return function* () {
        yield fork(socketSaga);
        yield fork(gameSaga);
    }
}

export default AppSaga;