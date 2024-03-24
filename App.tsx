import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, AppRegistry, TextInput, Button, Image } from "react-native"
import { expo } from "./app.json"
//import { PaperProvider, Icon,  Chip, ActivityIndicator, MD2Colors, MD3Colors, Divider, ProgressBar, SegmentedButtons, TextInput } from 'react-native-paper';
import React, {useState} from "react"

//className='flex-[.5] bg-cyan-100 scale-90 rounded-3xl shadow-2xl shadow-cyan-500'
//<StatusBar style="auto" />

function App() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = () => {
        // Add logic to handle sign-in here
        console.log('Username:', username)
        console.log('Password:', password)
    };

    return (
        <View style={styles.container}>

            <View style={{}}>
                <Image source={require('./assets/one-piece-logo.png')} style={styles.logo}/>
            </View>
            <View style={styles.card} >
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button title="Sign In" onPress={handleSignIn} />
            </View>
        </View>
    )
}

export default function Main() {
    return (
        // <PaperProvider>F
        //   <App />
        // </PaperProvider>

        <App />
    )
}

//AppRegistry.registerComponent(expo.name, () => Main);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        //justifyContent: "center",
    },
    card: {
        flex:.5,
        backgroundColor:'#a5cef0',
        borderRadius:36,
        marginHorizontal:20,
        marginBottom:20,
        paddingBottom:0,

        alignItems:'center',
        justifyContent:'center',

        // For Android
        elevation: 14,

        // For iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 30,
        width:300,
        backgroundColor:'white',
        elevation:14
    },
    logo:{
        height:200,
        width:400
    }
})
