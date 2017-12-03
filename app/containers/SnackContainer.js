import React, {Component} from 'react'
import { View, Text } from 'react-native';
import {HeaderLeft} from './MainContainer'
class SnackScreen extends Component {
    
    static navigationOptions = (navigation) => ({
        headerLeft: <HeaderLeft {...navigation} />,
    })

    render(){
        return(
            <View>
                <Text>
                    This is Snacks Screen
                </Text>
            </View>
        )
    }
}

export default SnackScreen;