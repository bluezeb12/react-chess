import { fork } from 'redux-saga/effects';

import { startApplicationSocket } from './task';
import * as Constants from '../../actions';

function* actionHandler(socket) {

}

function* socketSaga(facilityid) {
    // wait for application socket to connect
    const socket = yield startApplicationSocket();

    yield fork(actionHandler, socket);
}

export default socketSaga;
