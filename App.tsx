import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, AppRegistry } from "react-native"
import { expo } from "./app.json"
//import { PaperProvider, Icon,  Chip, ActivityIndicator, MD2Colors, MD3Colors, Divider, ProgressBar, SegmentedButtons, TextInput } from 'react-native-paper';
import React from "react"

//className='flex-[.5] bg-cyan-100 scale-90 rounded-3xl shadow-2xl shadow-cyan-500'

function App() {
    const [value, setValue] = React.useState("")

    return (
        <View className='flex-1 bg-[#66e5ff] justify-center'>
            <StatusBar style="auto" />
            <View style={styles.card} >
                
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
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        flex:.5,
        backgroundColor:'white',
        borderRadius:36,
        marginHorizontal:20,
        marginVertical:40,
        elevation:12,
        //borderColor:'grey',
        shadowColor:'black',
        shadowOffset:{
            width:100,
            height:100
        },
        shadowOpacity:100,
        shadowRadius:100
        //borderWidth:5
    }
})
