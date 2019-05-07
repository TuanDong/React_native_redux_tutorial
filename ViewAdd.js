import React, { Component } from 'react'
import { View, Text, TouchableOpacity,TextInput ,Dimensions} from 'react-native'
import { connect } from "react-redux";
const width = (Dimensions.get("window").width * 3) / 4


class ViewAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText:''
        }
        
    }
    render() {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TextInput
                    placeholder="Nhap ten cong viec"
                    onChangeText={(text) => this.setState({ inputText: text })}
                    placeholderTextColor="#c0d1d1"
                    style={{ borderRadius: 5, backgroundColor: "#eaefef", width, marginLeft: 20 }}
                />
                <TouchableOpacity
                    style={{ justifyContent: "center", alignItems: "center", marginRight: 20, backgroundColor: "#dce8e8", paddingLeft: 10, paddingRight: 10 }}
                    onPress={() => this.props.addNewTask(this.state.inputText)}
                >
                    <Text >Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
//Action
const addTask = (name) => {
    return {
        type:'ADD_NEW_TASK',
        workName:name
    }
}

export default connect(null,
    dispatch=>{
        return {
            addNewTask: (name) => {
                dispatch(addTask(name));
            }
        }
})(ViewAdd);