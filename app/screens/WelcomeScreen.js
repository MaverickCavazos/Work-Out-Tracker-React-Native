import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableHighlight, TouchableOpacity } from "react-native";

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/fit-homepage-image.png')}
        >   

          
            
            <TouchableOpacity activeOpacity={0.6} style={styles.loginButton}><Text style={styles.loginText}>Login</Text></TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={styles.registerButton}><Text style={styles.registerText}>Register</Text></TouchableOpacity>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#ffffff",
        alignItems: "center"
        
    },
    loginText: {
        paddingTop: 24
    },
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer: {
        positon: "absolute",
        bottom: 70,
        alignItems: "center"
    },
    registerButton: {
        width: "100%",
        height: 80,
        backgroundColor: "#000000",
        alignItems: "center"
    },
    registerText: {
        paddingTop: 24,
        color: "#ffffff"
    }
})


export default WelcomeScreen;