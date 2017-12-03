import React, { Component } from 'react'
import { View, Text } from 'react-native';


class ListContainer extends Component {

    static navigationOptions = {
        title : 'List Screen'
    }

    render() {
        return (
            <View>
                <Text>
                    This is list page
                </Text>
            </View>
        )
    }
}

export default ListContainer;