import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Main extends Component{

    state={
        data:"Hello"
    }

    render(){
        return(
            <View style={{flex:1, padding:16}}>
                <Text>Main 클래스의 state data : "{this.state.data}"</Text>
                
                {/* 자식 컴포넌트 */}
                <First data={this.state.data} changeData={this.changeData}></First>
            </View>
        )
    }

    // state값을 변경하는 메소드
    changeData=(m)=>{
        this.setState({data:m});
    }

}// Main class

// Main 의 첫번째 자식

class First extends Component{
    render(){
        return(
            <View style={{padding:16, backgroundColor:'lightgreen'}}>
                <Text>Main 클래스의 state Data : "{this.props.data}"</Text>

                {/* First의 자식 컴포넌트 */}
                <Second data={this.props.data} changeData={this.props.changeData}></Second>

                <Button title='button' onPress={()=>{this.props.changeData("good")}}></Button>

            </View>
        )
    }
}

// First의 자식, Main의 손자 컴포넌트
class Second extends Component{

    state={
        data:this.props.data
    }

    render(){
        return(
            <View style={{padding:16, backgroundColor:'blue', marginTop:16}}>
                <Text style={{color:'white'}}>Main 클래스의 state Data : "{this.state.data}"</Text>

                {/* Main에서 전달 받은 data변경해보기 */}
                <Button title="change data" color="orange" onPress={()=>{this.props.changeData('Nice')}}></Button>
            </View>
         )
    }

    clickBtn=()=>{
        // this.props.data='nice'// error : props는 상수여서 변경 불가
        // this.setState({data:'Nice'}) // 본인만 변경됨

        // Main의 state변경하기
        this.props.changeData()
        
    }
}
