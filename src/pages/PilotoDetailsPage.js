import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ImageBackground,Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

const principalAlt = "55%"
const principalLarg= "80%"
const largTotal= "100%"
const alturaAvatar= "20%"
const alturaTexto= "60%"



export default class PilotoDetailsPage extends React.Component{
   
constructor(props){
  super(props)
  this.state={
    "people": props.route.params.people
  }
}


  render(){
    const people = this.props.route.params.people

let imagem = this.state.people.img
    return (
      <ImageBackground source={{uri:"https://criacaodesiterj.com/wp-content/uploads/2014/08/website-background.jpg"}}  style={style.image}>
        <View style={style.container}>
     
         <SafeAreaView style={style.principal}>

         <SafeAreaView style={style.areaAvatar}>

         {imagem != null && (<Image style={style.avatar} source={{ uri: people.img }} />)}

         </SafeAreaView >
      
            <SafeAreaView style={style.areaTexto}>

            <Text style={style.texto}>Sigla Do Piloto:{people.code}</Text>
            <Text style={style.texto}>Apilido: {people.driverId }</Text>
            <Text style={style.texto}>Primeiro Nome: {people.GivenName}</Text>
            <Text style={style.texto}>Sobrenome: {people.FamilyName}</Text>
            <Text style={style.texto}>Nacionalidade: {people.Nationality}</Text>

            </SafeAreaView>

           </SafeAreaView>
         

        </View>
        </ImageBackground>
       
    )
  }
}

const style = StyleSheet.create({
 
  texto:{


       fontSize: 14,
       alignItems:"flex-start",
       
  },

  principal:{
    width: principalLarg,
    height: principalAlt,
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    margin: 40,
    borderStyle: 'solid',
    borderWidth: 1,

    
  

  },
  
  avatar:{
    
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 100,

  },

  cotainer:{

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
  },

  image:
    {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    areaAvatar:{
      
      width: largTotal,
      height: alturaAvatar,
      marginBottom: 60,
      marginTop: 20,
      alignItems: 'center',

      

    },

    areaTexto:{
      
       width: largTotal,
       height: alturaTexto,
       alignItems: 'center', 

    } 
}
)