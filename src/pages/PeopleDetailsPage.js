import React from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, Dimensions} from 'react-native';

const width_proportion = '100%';
const height_title = '20%';
const height_text = '40%';
const height_avatar = '40%';
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
            <ImageBackground source={{uri:"data:image/jpeg;base64,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"}} style={style.image}>
              <View style={style.principal}>
                <SafeAreaView style={style.areaTitle}>
                  <Text style={style.title}>Seus Dados</Text>
                </SafeAreaView>
                <SafeAreaView style={style.areaAvatar}>
                  <Image style={style.avatar} source={{uri: people.foto}}/>
                </SafeAreaView>
                <SafeAreaView style={style.areaText}>
                  <Text style={style.text}> {`Nome: ${people.nome}`}</Text>
                  <Text style={style.text}> {`Cargo: ${people.cargo}`}</Text>
                  <Text style={style.text}> {`Salário: ${people.salario}R$`}</Text>
                  <Text style={style.text}> {`Data de Nascimento: ${people.data_nascimento} - ${ano_atual - people.data_nascimento.split('/')[2]} anos`}</Text>
                </SafeAreaView>
              </View>
            </ImageBackground>
          </SafeAreaView>
        
    )
  }
}

const style = StyleSheet.create
({
  areaText:
  {
    width: width_proportion,
    backgroundColor: '#FFFFFF',
    height: height_text
  },
  text: 
  {
	fontFamily: 'Cochin',
    fontSize: 14,
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 10,
    margin: 2
  },
  areaTitle:
  {
    width: width_proportion,
    height: height_title,
    backgroundColor: '#FFFFFF',
  },
  title: 
  {
		fontFamily: 'Cochin',
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
    textAlignVertical: 'center',

  },
  principal:
  {
    height: 290,
    margin: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    alignItems: 'flex-start'
  },
  areaAvatar:
  {
    width: width_proportion,
    alignItems: 'center',
    backgroundColor: '#888888',
    height: height_avatar,
    backgroundColor: '#FFFFFF',
  },
  avatar:
  {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 100,
    margin: 8
  },
  image:
  {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: "cover",
    justifyContent: "center"
  }
})
