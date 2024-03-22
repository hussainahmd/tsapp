import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { expo } from './app.json';
import { PaperProvider, Icon,  Chip, ActivityIndicator, MD2Colors, MD3Colors, Divider, ProgressBar, SegmentedButtons, TextInput } from 'react-native-paper';
import React from 'react';

function App() {
  
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! {JSON.stringify(expo.name)}</Text>
      <Divider />
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
      <Divider />
      <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Divider />
      <Icon
        source="camera"
        color={MD3Colors.error50}
        size={20}
      />
      <ProgressBar progress={0.5} color={MD3Colors.error50} />

      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          { value: 'drive', label: 'Driving' },
        ]}
      />

      <TextInput
        mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        // right={<TextInput.Affix text="/100" />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

export default function Main() {
  return (
    // <PaperProvider>
    //   <App />
    // </PaperProvider>

    <App />
  );
}

AppRegistry.registerComponent(expo.name, () => Main);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
