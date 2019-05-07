import React, { Component } from 'react'
import { View, Text,StyleSheet,TextInput ,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

class ViewMesgItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:''
        }
        
    }
    render() {
        const {noidung} = this.props.data;
        return (
            <View style={stylesText.text}>
                <Text>Descreption</Text>
                <Text style={{ color: "#912d51", /* display: ((this.props.status) ? "flex" : "none") */}}  
                >
                    {noidung}
                </Text>
                <Text>Change Descreption</Text>
                <TextInput 
                    style={{height: 80, borderColor: 'gray', borderWidth: 1,width:300,marginBottom:10,marginTop:10,borderRadius: 5, backgroundColor: "#eaefef",}}
                    multiline = {true}
                    numberOfLines = {4}
                    //onSubmitEditing ={this.props.ChangeND(this.state.text,this.props.atIndex)}
                    onChangeText={(text) => this.setState({text})}
                />
                <TouchableOpacity 
                   onPress = {()=>this.props.ChangeND(this.state.text)}
                   style = {stylesText.stylebutton}
                >
                    <Text>Change mesg</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const stylesText = StyleSheet.create({ 
    text: {
        justifyContent: "center",
        alignItems: "center",
        padding:20

    },
    stylebutton: {
        borderWidth:1,
        borderColor:"#92f442",
        borderRadius:5,
        backgroundColor:"#92f442",
        padding:5

    }
});

//Action
const updatemesger = (noidung) =>{
    return {
        type: 'UPDATE_NOIDUNG',
        messenger: noidung,
    }
}

export default connect(
    state => {
        return{
            data: state
        }
    },
    dispatch =>{
        return {
            ChangeND: (noidung)=>{
                dispatch(updatemesger(noidung));
            }
        }
    }
)(ViewMesgItem);