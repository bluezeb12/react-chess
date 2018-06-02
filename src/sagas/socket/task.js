import { cps , put} from 'redux-saga/effects';
import { MainSocket, connectSocket } from '../../services/socket';
import * as Constants from '../../actions';

export function* startApplicationSocket() {
    //return yield cps(connectSocket, MainSocket)
    return yield put({ type: 'STUBBED_SOCKET_CONNECTION'})
}