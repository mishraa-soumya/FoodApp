import React, { Component} from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'

class StoreList extends Component{

  renderItem(item){
    let content = item.label.map((obj) => {
      return <Text>{obj.label}</Text>
    })
    return (
      <View>
          {content}
      </View>
    )
  }

  render() {
    return(
        <View style={styles.container}>
          { this.props.storeData.data != undefined && this.props.storeData.data.length > 0 &&
            <FlatList data={ this.props.storeData.data } renderItem={ this.renderItem(item) }/>
          }
        </View>
    )
  }
}
export default StoreList;

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})
