import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList,Dimensions } from 'react-native'
import ViewMesgItem from './ViewMesgItem'


const width = (Dimensions.get("window").width /20) 
export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // status: false,
            noidung: '',
        }
    }
    ChangeND =(noidung) => {this.props.ChangeNDApp(noidung); }
    renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "flex-start",  flex: 1, backgroundColor: "#f4f9f9", marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                <View style={{ marginLeft: width }}>
                    <TouchableOpacity
                        onPress={() => this.props.onFinishedItem(index)}
                    >
                        <Text>{(item.isFinished) ? `✔️` : `⏰`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: width, }}>
                    <Text style={{ color: 'black',width:(width*12) }}>{item.title}</Text>
                </View>
                <View style={{ marginRight: width}}>
                    <TouchableOpacity
                        onPress={() => this.props.onDeleteItem(index)}
                    >
                        <Text>❎</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginRight: width }}>
                    <TouchableOpacity
                        onPress= {()=>{
                            this.setState({
                                // status:!this.state.status,
                                noidung: item.mesg
                            });
                        }}
                    >
                        <Text>👇</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.dataFlatList}
                    extraData={this.props}
                    keyExtractor={(item, index) => index+''}
                    renderItem={this.renderItem}
                />
                <ViewMesgItem /*status = {this.state.status}*/ ChangeND ={this.ChangeND} noidung = {this.state.noidung}/>
                
            </View>

        );
    }
}