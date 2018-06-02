import { fork } from 'redux-saga/effects';
import socketSaga from './socket';

const AppSaga = (payload = {}) => {

    return function* () {
        yield fork(socketSaga);

    }
}

export default AppSaga;