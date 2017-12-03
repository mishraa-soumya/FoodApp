import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {
    Text,
    View,
    Button,
    Image,
    TouchableHighlight,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
// import { DrawerNavigator } from 'react-navigation'
import {pageTitle} from '../actions/home.js';
import ApiCall from '../common/ApiCall'

class MainScreen extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = (navigation) => ({
        // title: navigation.state.params.menuTitle ,
        headerLeft: <HeaderLeft {...navigation} />,
    })

    render() {
        const { navigate } = this.props.navigation;
        return (
          <View>

            <TouchableHighlight>
              <View style={{ backgroundColor: '#ffff00'}} >
                <Text style={{ backgroundColor: '#ff0000'}}>{this.props.homePageData.title}</Text>
                <BackgroundImage />
                    {/* <MainScreenNavigator /> */}
                </View>
            </TouchableHighlight>
          </View>
        )
    }
}

const mapStateToProps = (state) => ({
  homePageData: state.homePageData,
  nav: state.nav
});

const mapDispatchToProps = (dispatch) => (bindActionCreators({pageTitle},dispatch))

export default connect(mapStateToProps,mapDispatchToProps)(MainScreen);

const BackgroundImage = () => (
    <View style={{ flex: 1 }}>
        <Image style={ styles.image_1 } source={ require('../static/img/bg1.jpg') }  />
        <Image style={ styles.image_2 } source={ require('../static/img/bg2.jpg') }  />
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    menuDiv: {
        zIndex: 999,
        borderRadius: 70,
        borderWidth: 1,
        borderColor: '#000'
    },
    image_1: {
      borderColor: '#ff0000',
    },
    image_2: {
      borderColor: '#000'
    }
})

export const HeaderLeft = ({navigation}) => (
    <View>
      <TouchableOpacity onPress={ () => navigation.navigate('DrawerOpen') } >
      <Image
          source={ require('../static/img/menu.png') }
          style={{ width: 20, height: 20 }}
      />
      </TouchableOpacity>
    </View>
  )
