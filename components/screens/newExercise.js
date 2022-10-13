import { useState } from 'react';
import {StyleSheet, TextInput, Button, ScrollView, View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import {fetchExByDay, updateExById, addNewEx, fetchExerciseTypes, updateEx} from '../../database/db';

export const NewExercise=()=>{

    const [newEx, setNewEx]= useState();
    const [newExGroup, setNewExGroup]= useState();
    const [exListAll, setExListAll]=useState([]);

    const newExHandler=(enteredText)=>{
        setNewEx(enteredText);
        console.log(newEx);
      }

    const newExGroupHandler=(enteredText)=>{
        setNewExGroup(enteredText);
        console.log(newExGroup);
      }

    const workoutInputHandler=({newEx, newExGroup})=>{
        console.log(newEx);
        console.log(newExGroup);
        addNewEx(newEx, newExGroup);
    }

    async function readAllEx() {
        try{
            const dbResult = await fetchExerciseTypes();
            console.log('dbResult sisältö');
            console.log(dbResult);
            setExListAll(dbResult);
        }
        catch (err) {
            console.log('Error: '+err);
        }
    }

    //fetchExerciseTypes
    const renderItem=({item, index})=>{

    return (
        <TouchableOpacity>          
        <Text key={index}>{index+1}. {item.name} </Text>
         </TouchableOpacity>
    );
}

return (

    <ImageBackground source={require('../../assets/images/salikuva.jpg')} style={styles.imageBackground} resizeMode='cover'>
    <View style={styles.container}>
        <View style={styles.upper}>

        </View>
            <View style={styles.newWindow}>
                <View style>
                    <Text>Lisää uusi harjoitus</Text>   
                </View>
                <TextInput style={styles.inputStyle} placeholder="Anna harjoituksen nimi..." 
                    onChangeText={newExHandler}/>
                    <TextInput style={styles.inputStyle} placeholder="Anna lihasryhmä..." 
                    onChangeText={newExGroupHandler}/>
                <Button style={styles.buttonStyle} color='#a4161a' title='Lisää!' onPress={()=>addNewEx(newEx, newExGroup)} 
                />
                
            </View>
       
        <View style={styles.listStyle}>
        <Button title="Näytä kaikki" onPress={()=>readAllEx()} />
            <View style={styles.listStyle}>
                        <Text style={styles.textStyle}>Kaikki Harjoitukset</Text>
                        <FlatList
                            data={exListAll}
                            renderItem={renderItem}       
                        /> 
            </View>
        </View>
    </View>
    </ImageBackground>  
    
    );
}

const styles = StyleSheet.create({
    container: {
    
      },
    textView: {
        
    },
    textStyle:{
        color: 'white',
    },
    newWindow: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#b1a7a6',
        borderWidth: 3,
        borderColor: '#660708',
        justifyContent:'center',
        paddingHorizontal:30,
        marginTop:'50%',
        maxHeight:'50%',
        borderRadius: 7,
        elevation: 10,
    },
    inputStyle: {
        backgroundColor: '#d3d3d3',
        borderColor: '#660708',
        borderWidth: 3,
        borderRadius: 7,
        marginBottom:10,
    },
    imageBackground:{
        flex:1,
        width:'100%',
        justifyContent: "flex-start",
        alignItems: 'center',
      },
    buttonStyle: {
        
    },
    listStyle: {
        flex: 1,
    }

});