import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PilotoList from '../component/PilotoList'



export default class PilotoPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      peoples: []
    }
  }

  componentDidMount(){
    axios
    .get('https://demo5640627.mockable.io/pilotos')
    .then(response => {
      const results = response.data
      this.setState({
        peoples: results
      })
    })
  }
 
  render(){
    return (
        <View>
            <PilotoList peoples={this.state.peoples} onPressItem={(people) => {this.props.navigation.navigate('Detalhes do Piloto', {"people": people})}} /> 
        </View>
    );
  }
 
}