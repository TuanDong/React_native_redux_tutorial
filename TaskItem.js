import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList,Dimensions } from 'react-native'
import ViewMesgItem from './ViewMesgItem'
import {connect} from 'react-redux'

const width = (Dimensions.get("window").width /20) 
class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    renderItem = ({ item, index }) => {
        const {onFinishedItem, onDeleteItem, onDetailItem} = this.props;
        return (
            <View style={{ flexDirection: "row", justifyContent: "flex-start",  flex: 1, backgroundColor: "#f4f9f9", marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                <View style={{ marginLeft: width }}>
                    <TouchableOpacity
                        onPress={() => onFinishedItem(index)}
                    >
                        <Text>{(item.isFinished) ? `✔️` : `⏰`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: width, }}>
                    <Text style={{ color: 'black',width:(width*12) }}>{item.title}</Text>
                </View>
                <View style={{ marginRight: width}}>
                    <TouchableOpacity
                        onPress={() => onDeleteItem(index)}
                    >
                        <Text>❎</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginRight: width }}>
                    <TouchableOpacity
                        onPress= {()=>onDetailItem(index)}
                    >
                        <Text>👇</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        console.log(this.props);
        const {dataFlatList} = this.props.dataFlatList;
        return (
            <View>
                <FlatList
                    data={dataFlatList}
                    extraData={this.props}
                    keyExtractor={(item, index) => index+''}
                    renderItem={this.renderItem}
                />
                <ViewMesgItem />
                
            </View>

        );
    }
}


//Action
const finishTask = (index) => {
    return {
        type: 'FINISH',
        atIndex: index
    }

}
const deleteTask = (index) => {
    return {
        type: 'DELETE',
        atIndex: index
    }

}
const detailTask = (index) => {
    return {
        type: 'DETAIL',
        atIndex: index
    }

}

export default connect(
    state =>{
        return {
            dataFlatList: state
        }
},dispatch =>{
    return {
        onFinishedItem:(index)=>{dispatch(finishTask(index))},
        onDeleteItem:(index)=>{dispatch(deleteTask(index))},
        onDetailItem:(index)=>{dispatch(detailTask(index))}
    }
}
)(TaskItem)

