import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import PilotoListItem  from './PilotoListItem'
 
const PilotoList = props => {
    const {peoples, onPressItem} = props
    console.log(peoples)
    const items = peoples.map (people =>  {
       
          return (
              <PilotoListItem 
                    key={people.code} 
                     people={people}
                     onPressItemDetails={onPressItem}/>
          )
        }
      )
    return (
        <View style={style.container}>
        <ScrollView style={style.container}>
            {items}
        </ScrollView>
        </View>
    )
  
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffff'
    },
    
    scroll:
    {
        flex: 1,
        backgroundColor: '#FFF'
    }

}
)
 
export default PilotoList 