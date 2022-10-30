import { setStatusBarStyle } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity, TextInput, SafeAreaView } from "react-native";
import {useState } from "react";






function addExercise(props) {

    const [workoutText, newWorkoutText] = React.useState("Exercise")
    const [weightText, newWeightText] = React.useState("Weight")
    const [repsText, newRepsText] = React.useState("Reps")





    return (
    


    <View name='exercises' style={styles.exerciseContainer}> 

        <TextInput
        style={styles.inputExercise}
            onChangeText={newWorkoutText}
            value={workoutText}
        ></TextInput>
        <TextInput
        style={styles.inputWeight}
            onChangeText={newWeightText}
            value={weightText}
        ></TextInput>
        <TextInput
        style={styles.inputReps}
            onChangeText={newRepsText}
            value={repsText}
        ></TextInput>

    </View>

        
       
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
        flexDirection: "row"
    },
    inputExercise: {
        width: "30%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal:6
       
    },
    inputWeight: {
        width: "25%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingHorizontal:6
       
    },
    inputReps: {
        width: "20%",
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
    buttonText: {
        paddingTop: 18,
        color: "#ffffff"
    }
})


export default addExercise;
