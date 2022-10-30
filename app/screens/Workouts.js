import { setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from "react-native";
import { useState, useEffect } from "react";




function Workouts() {

    const [workoutText, newWorkoutText] = React.useState("Exercise")
    const [weightText, newWeightText] = React.useState("Weight")
    const [repsText, newRepsText] = React.useState("Reps")


    const [inputs, setInputs] = useState([{key: '', value: ''}]);

    const addHandler = ()=>{
        const _inputs = [...inputs];
        _inputs.push({key: '', value: ''});
        setInputs(_inputs);
    }
    
    const deleteHandler = (key)=>{
        const _inputs = inputs.filter((input,index) => index != key);
        setInputs(_inputs);
    }

/*     const inputHandler = (text, key)=>{
        const _inputs = [...inputs];
        _inputs[key].value = text;
        _inputs[key].key   = key;
        setInputs(_inputs);
        
    } */

    return (
        <SafeAreaView style={styles.background}>  

        <View>
            <Text style={styles.workoutTitle}>
                Workout Plan
            </Text>
        </View>

     <ScrollView style={styles.exerciseContainer}> 

     {inputs.map((input, key) =>(
         <View style={styles.exerciseContainer}> 
         
            <TextInput
            style={styles.inputExercise}
                placeholder={"Exercise"}
            ></TextInput>
            <TextInput
            style={styles.inputWeight}
            placeholder={"Pounds"}
            ></TextInput>
            <TextInput
            style={styles.inputReps}
            placeholder={"Reps"}
            ></TextInput>

            <TouchableOpacity onPress = {()=> deleteHandler(key)} activeOpacity={0.6} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>  

        </View>
     ))}
       

    </ScrollView>

        <TouchableOpacity onPress={addHandler} activeOpacity={0.6} style={styles.exerciseButton}><Text style={styles.exerciseText}>Add Exercise</Text></TouchableOpacity>
        

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: '#ffffff'
    },
    workoutTitle:{
        fontSize: 30
    },
    exerciseContainer: {
        width: '90%',
        flexDirection: "row"
    },
    inputExercise: {
        width: "45%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal:6
       
    },
    inputWeight: {
        width: "28%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal:6
       
    },
    inputReps: {
        width: "22%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal:6
        
    },
    
    exerciseButton: {
        width: "30%",
        borderRadius: 60,
        height: 55,
        backgroundColor: "#000000",
        alignItems: "center"
    },
    exerciseText: {
        paddingTop: 18,
        color: "#ffffff"
    },

    deleteButton: {
        width: "20%",
        borderRadius: 10,
        height: 40,
        backgroundColor: "#000000",
        alignItems: "center",
        marginTop: 10
    },
   
    deleteText: {
        paddingTop: 10,
        color: "#ffffff"
    }
})


export default Workouts;


