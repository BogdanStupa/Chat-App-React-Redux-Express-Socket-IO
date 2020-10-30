import socketIOClient from "socket.io-client";
import constants from "modules/constants";
import { put, call, takeLatest, cancel, fork } from "redux-saga/effects";
import { START_CHANEL, STOP_CHANEL } from "redux/constants/socket";
import { 
    stopChanel,
    serverOn,
    serverOff
 } from "redux/actions/socket";

const ROOT_URL = constants.API.ROOT;

let socket;
let socketTask;

const connectSocket = () => {
    const socket = socketIOClient(ROOT_URL);
    return new Promise(resolve => {
        resolve(socket);
    });
}

function* readMessages(socket) {
    socket.on("message.new", data => {
        console.log(data);
        //add messages
    });
}

function* startChat(socket, userId) {
    yield socket.emit("start-chat", userId);
}

function* handleIO(socket, userId){
    yield fork(startChat, socket, userId);
    yield fork(readMessages, socket);
}

function* startChanelWorker(props){
    try {
        yield put(stopChanel());
        socket = yield call(connectSocket);
        yield put(serverOn());
        socketTask = yield fork(handleIO, socket, props.payload.userId);
    } catch (error) {
        
    }
}

function* stopChanelWorker(){
    try {
        if(socket){
            socket.off();
            socket.disconnect();
        }
        yield cancel(socketTask);
        yield put(serverOff());
    } catch (error) {
        
    }
}


const sagas = [
    takeLatest(START_CHANEL, startChanelWorker),
    takeLatest(STOP_CHANEL, stopChanelWorker)
];

export default sagas;
