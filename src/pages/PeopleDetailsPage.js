import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
//let ScreenHeight = Dimensions.get('window').height

export default class PeopleDetailsPage extends React.Component
{
  constructor(props) 
  {
		super(props)
  }
  
  render() 
  {
		const people = this.props.route.params.people
		return (
				<SafeAreaView>
					<View style={style.container}>
            <Text style={style.titulo}>Seus Dados</Text>
            <Image source={{uri: people.foto}}/>
            <Text> {`Nome: ${people.foto}`}</Text>
            <Text> {`Nome: ${people.nome}`}</Text>
            <Text> {`Cargo: ${people.cargo}`}</Text>
            <Text> {`Salário: ${people.salario}`}</Text>
            <Text> {`Data de Nascimento: ${people.data_nascimento}`}</Text>
					</View>
				</SafeAreaView>
    )
  }
}

const style = StyleSheet.create
({
  text: 
  {
		fontFamily: 'Arial',
		fontSize: 25,
		textAlign: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},

  picture: 
  {
		aspectRatio: 1,
		margin: 40,
		height: 256,
		width: 256,
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center'
	},
  title: 
  {
		fontFamily: 'Arial',
		fontSize: 30,
		textAlign: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 10
	},
  container: 
  {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
		flex: 1
  },
  titulo:
  {
    fontSize: 20
  }
})
