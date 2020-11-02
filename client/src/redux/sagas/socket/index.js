import socketIOClient from "socket.io-client";
import { put, call, takeLatest, cancel, fork, take, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { START_CHANEL, STOP_CHANEL } from "redux/constants/socket";
import { 
    startChanel,
    stopChanel,
    serverOn,
    serverOff
 } from "redux/actions/socket";
 import {
    addPartnerMessageInConversation
 } from "redux/actions/conversation";
import constants from "modules/constants";


const ROOT_URL = constants.API.ROOT;

let socket;
let socketTask;

const connectSocket = () => {
    const socket = socketIOClient(ROOT_URL);
    return new Promise(resolve => {
        resolve(socket);
    });
}

function subscribe(socket){
    return eventChannel(emmit => {
        socket.on("message.new", data => {
            emmit(addPartnerMessageInConversation(data));
         });
        socket.on("disconnect", () => {
            emmit(startChanel());
        });

        return () => {};
    });
}

function* read(socket) {
    try{
        const channel = yield call(subscribe, socket); 
        while(true){
            const action = yield take(channel);
            yield put(action);
        }
    }catch(error){

    } 
}

function* startChat(socket, userId) {
    try{
        console.log("SOKEN START CHAT USER_ID", userId);
        yield socket.emit("start-chat", userId);
    } finally{

    }
}

function* handleIO(socket, userId){
    yield fork(startChat, socket, userId);
    yield fork(read, socket);
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
