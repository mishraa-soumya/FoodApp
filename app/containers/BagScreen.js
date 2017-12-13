import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { View, Text } from 'react-native'
import { HeaderLeft } from './MainContainer'
import ApiCall from '../common/ApiCall'
import { BagList } from '../actions/bag'
import MyBag from '../components/MyBag'

class BagScreen extends Component {

    constructor(props) {
      super(props);
      this.getBagData = this.getBagData.bind(this);
    }

    static navigationOptions = (navigation) => ({
        headerLeft: <HeaderLeft {...navigation} />,
    })

    componentDidMount() {
      this.getBagData();
    }

    getBagData() {
      let self   = this,
          apiUrl = 'https://my-json-server.typicode.com/soumya18/DemoApis/db';
      ApiCall({
        url: apiUrl,
        type: 'GET',
        "Content-Type": "application/json",
        success(responseData){
          if(responseData.bag[0].itemcount > 0){
            console.log(responseData.bag[0].items.length);
            console.log(responseData.bag[0].itemcount);
            self.props.BagList(responseData.bag[0]);
          }
        },
        error(error) {
          console.log(`Error is => ${error}`);
        }
      });
    }

    render(){
        return(
            <MyBag {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({ bagData: state.bagData });
const mapDispatchToProps = (dispatch) => (bindActionCreators({ BagList } , dispatch ));

export default connect(
                mapStateToProps,
                mapDispatchToProps
               )(BagScreen);
