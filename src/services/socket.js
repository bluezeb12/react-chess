import socketClient from 'socket.io-client';

export const createSocket = server => socketClient(server, { autoConnect: false });

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

const socketIOServer = isLocalhost ? `${window.location.protocol}//${window.location.hostname}:3500` : window.location.origin;
export const MainSocket = createSocket(socketIOServer);

/**
 *
 * @param {SocketIOClient.Socket} socket
 * @param {string} action
 * @param {*} data
 * @param {Function} cb
 */
export const emitToSocket = (socket, action, data, cb) => socket.emit(action, data, (response) => cb(null, response));

/**
 *
 * @param {SocketIOClient.Socket} socket
 * @param {Function} cb
 */
export const connectSocket = (socket, cb) => {
    socket.on('connect', () => cb(null, socket));
    socket.open();
};



