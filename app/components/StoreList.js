import React, { Component} from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'

class StoreList extends Component{

  renderItem(currObj) {
    let content = currObj.item.label.map((item, index) => {
        let key = `${currObj.index}-${index}`;
        return <Text style={styles.label} key={key}>{item}</Text>
    })
    return (
      <View key={currObj.index} style={ styles.cards }>
          { content }
          <View key={currObj.index} style={styles.price}>
              <Text style={styles.priceLabel}>{` Rs. ${currObj.item.price}`}</Text>
          </View>
      </View>
    )
  }

  render() {
    return(
        <View style={styles.container}>
          { this.props.storeData.data != undefined && this.props.storeData.data.length > 0 &&
            <FlatList
                data={ this.props.storeData.data }
                renderItem={ (item) => this.renderItem(item) }
                keyExtractor={item => item.id}
            />
          }
        </View>
    )
  }
}
export default StoreList;

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  cards:{
    flex: 1,
    borderColor: '#c5c5c5',
    padding: 5,
    margin: 10,
    backgroundColor: '#ffffff',
    minHeight: 100
  },
  label:{
    fontSize: 16,
    padding: 5,
    color: '#084f8b',
  },
  price: {
    alignItems: 'flex-end',
    marginRight: 15
  },
  priceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  }

})
