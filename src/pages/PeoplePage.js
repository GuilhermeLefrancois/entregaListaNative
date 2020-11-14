import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PeopleList from '../component/PeopleList'



export default class PeoplePage extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state= 
    {
      peoples: []
    }
  }

  componentDidMount()
  {
    axios.get('http://demo6508572.mockable.io/api-lefrancois').then(response => 
    {
      const {results} = response.data
      this.setState({peoples: results})
    })
  }
 
  render()
  {
    return (
        <View>
            <PeopleList peoples={this.state.peoples} onPressItem={(people) => {this.props.navigation.navigate('Detalhes da Pessoa', {people: people})}} /> 
        </View>
    )
  }
 
}