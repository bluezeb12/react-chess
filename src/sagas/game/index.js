import { take, takeEvery, put } from 'redux-saga/effects';
import { isNil } from 'ramda';
import * as Constants from '../../actions';

function* gameSaga(){
    let { payload: isPlayersTurn } = yield take(Constants.APPLICATION_READY);
    let queuedMove = null;

    yield takeEvery(Constants.MOVE_DISPATCHED, function* (action) {
        if (isPlayersTurn === false) {
            isPlayersTurn = true;
            if (!isNil(queuedMove)) {
                // todo implemeant
                const isValid = () => false;
                isValid(queuedMove) ? yield put({ type: Constants.DISPATCH_MOVE, payload: queuedMove }) : queuedMove = null;
            }
        }
        else {
            queuedMove = null;
            isPlayersTurn = false;
            // dispatch move to socket
        }

        // chjeck for winner and dipatch relevant events
    })

    yield takeEvery(Constants.RESET_FOCUS, function* () {
        if (isPlayersTurn === false) {
            queuedMove = null;
        }
        return yield true;
    })

    while (true) {
        const { payload: move } = yield take(Constants.DISPATCH_MOVE);
        if (isPlayersTurn) {
            yield put({ type: Constants.MOVE_DISPATCHED, payload: move })
        }
        else {
            queuedMove = move
        }
    }

}

export default gameSaga;
