import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'

class MyBag extends Component {

  constructor(props) {
    super(props);
    this.onPressHandle = this.onPressHandle.bind(this);

  }

  renderBagItem(currObj){
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

 onPressHandle(){
   console.log("button pressed");
 }

 render() {
    return(
      <View>
        { this.props.bagData.data != undefined && Object.keys(this.props.bagData.data).length > 0 &&
          <View>
            <FlatList
               data={this.props.bagData.data.items}
               renderItem={(item) => this.renderBagItem(item) }
               keyExtractor={ (item) => item.id }
            />
            <View style={ styles.bottomBar }>
              <Text style={ styles.footerText }>
                  <Text style={ styles.totalPriceLabel } >
                    Total Price :
                  </Text>
                  <Text style={ styles.totalPrice}>
                       { `Rs. ${this.props.bagData.data.total}` }
                  </Text>
              </Text>
              <Button
                large
                onPress={this.onPressHandle}
                title="PROCEED TO CHECKOUT"
                backgroundColor= '#000000'
                color='#084f8b'
                buttonStyle={ styles.checkoutButton }
              />
           </View>
        </View>
        }
      </View>
    )
  }
}

export default MyBag;

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
  },
  bottomBar: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderColor: '#000',
    height: 100,
    position: 'absolute',
    top: 460,
    bottom: 0,
    width: 400,
    justifyContent: 'flex-start',
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 15,
    height: 40,
    padding: 10,
    // backgroundColor: 'blue',
    flexDirection: 'row'
  },
  checkoutButton: {
    height: 50,
    marginLeft: -20
  },
  totalPriceLabel: {
    // flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    width: 150,
    // backgroundColor: '#fff'
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    // backgroundColor: 'red'
  }
});
