import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';

export default class PeopleDetailsPage extends React.Component
{
  constructor(props) 
  {
		super(props)
  }
  
  render() 
  {
    const people = this.props.route.params.people
    const ano_atual = new Date().getFullYear()
    const idade = ano_atual - "05/05/2000".split('/')[2];
		return (
          <SafeAreaView style={style.container}>
            <ImageBackground source={{uri:"https://img.freepik.com/vetores-gratis/fundo-abstrato-tecnologia-azul_1035-17929.jpg?size=626&ext=jpg"}} style={style.image}>
              <View style={style.principal}>
                <Text style={style.title}>Seus Dados</Text>  
                <Image source={{uri: people.foto}}/>
                <Text style={style.text}> {`Nome: ${people.nome}`}</Text>
                <Text style={style.text}> {`Cargo: ${people.cargo}`}</Text>
                <Text style={style.text}> {`Salário: ${people.salario}R$`}</Text>
                <Text style={style.text}> {`Data de Nascimento: ${people.data_nascimento} - ${ano_atual - people.data_nascimento.split('/')[2]} anos`}</Text>
              </View>
            </ImageBackground>
          </SafeAreaView>
        
    )
  }
}

const style = StyleSheet.create
({
  text: 
  {
		fontFamily: 'Arial',
    fontSize: 14,
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 10,
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
    margin: 5
	},
  container: 
  {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#AAAAAA',
    flex: 1,
    textAlignVertical: 'center'
  },
  principal:
  {
    backgroundColor: '#FFFFFF',
    width: 350,
    height: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'flex-start'
  },
  image:
  {      
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"    
  }
})
