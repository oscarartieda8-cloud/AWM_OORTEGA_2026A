import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ListaEstudiantes from './src/components/ListaEstudiantes'; 

export default function App() {
  return (
    <View style={styles.container}>
      <ListaEstudiantes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    marginTop: 50, 
  },
});