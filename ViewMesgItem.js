import React, { Component } from 'react'
import { View, Text,StyleSheet,TextInput ,TouchableOpacity} from 'react-native'

export default class ViewMesgItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:""
        }
        
    }
    render() {
        
        return (
            <View style={stylesText.text}>
                <Text style={{ color: "#912d51", /* display: ((this.props.status) ? "flex" : "none") */}}  
                >
                    {this.props.noidung}
                </Text>
                <TextInput 
                    style={{height: 80, borderColor: 'gray', borderWidth: 1,width:300,marginBottom:10,marginTop:10}}
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
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