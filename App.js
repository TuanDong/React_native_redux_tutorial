/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, FlatList, Alert } from 'react-native';
import TaskItem from './TaskItem'
import ViewAdd from './ViewAdd'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


//State
let appState = {
    dataFlatList: [
        {
            title: "Go to the office",
            mesg: "Go to the office"
            , isFinished: true
        },
        {
            title: "Playing football",
            mesg: "Playing football",
            isFinished: false
        },
        {
            title: "React Native Tutorial",
            mesg: "React Native Tutorial",
            isFinished: true
        },
    ],
    noidung:'',
    indexItem: 0
}



//Reducer
const taskListReducer = (state = appState, action) => {
    let newTaskList = state.dataFlatList;
    switch (action.type) {
        case 'FINISH':
            newTaskList[action.atIndex].isFinished = true;
            return { ...state, dataFlatList: newTaskList }
        case 'DELETE':
            newTaskList = newTaskList.filter((item,i) =>{i !== action.atIndex });
            return { ...state, dataFlatList: newTaskList };
        case 'DETAIL':
            let detailNoidung = newTaskList[action.atIndex].mesg;
            return {...state,noidung:detailNoidung,indexItem:action.atIndex}
        case 'UPDATE_NOIDUNG' :
            newTaskList = newTaskList.filter((item,i) => {
                if(action.messenger !="" && i == state.indexItem)
                    item.mesg = action.messenger;
                return item;
            });
            Alert.alert("Messenger !","success... !");
            return { ...state, dataFlatList: newTaskList };
        case 'ADD_NEW_TASK':
            let newTask = { title: action.workName, mesg: action.workName, isFinished: false }
            Alert.alert("Messenger !","success... !");
            return {...state,dataFlatList:[...state.dataFlatList,newTask]};
    }
    return state
}

//Store
const store = createStore(taskListReducer, appState);



export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFlatList: [
                {
                    title: "Go to the office",
                    mesg: "Go to the office"
                    , isFinished: true
                },
                {
                    title: "Playing football",
                    mesg: "Playing football",
                    isFinished: false
                },
                {
                    title: "React Native Tutorial",
                    mesg: "React Native Tutorial",
                    isFinished: true
                },
            ],
        }
    }
    // addNewTask = (inputText) => {
    //     var newTask = { title: inputText, mesg: '', isFinished: false }
    //     var newTaskList = [...this.state.dataFlatList, newTask]
    //     this.setState({ dataFlatList: newTaskList });
    // }
    // onFinishedItem = (index) => {
    //     let newTaskList = this.state.dataFlatList;
    //     newTaskList[index].isFinished = !newTaskList[index].isFinished;
    //     this.setState({ dataFlatList: newTaskList });
    // }
    // onDeleteItem = (index) => {
    //     let newTaskList = this.state.dataFlatList.filter((item, i) => i != index);
    //     this.setState({ dataFlatList: newTaskList });
    // }
    // ChangeNoidung = (nd) => {
    //     let updatemesgList = [...this.state.dataFlatList];
    //     updatemesgList.map((item) => item.mesg = nd);
    //     this.setState({
    //         dataFlatList: updatemesgList,
    //     });
    //     Alert.alert("Messenger", "success...!");
    // }

    render() {

        return (
            <Provider store={store} >
                <View style={styles.container}>
                    <View style={{ backgroundColor: "#efefef", marginBottom: 20, }}>
                        <Text style={styles.welcome}>To Do App</Text>
                    </View>
                    <ViewAdd />
                    <TaskItem />

                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#88e8e8',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20

    }
});
