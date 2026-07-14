import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //este es para el equivalente de rutas jeje
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetalleEstudiante from './src/components/DetalleEstudiante';
import FormularioEstudiante from './src/components/FormularioEstudiante';
import ListaEstudiantes from './src/components/ListaEstudiantes'; 


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ListaDeEstudiantes" component={ListaEstudiantes} options = {{title: 'Lista de Estudiantes'} }/>
            <Stack.Screen name="DetalleDelEstudiante" component={DetalleEstudiante} options={{title: 'Detalle de Estudiante'}}/>
            <Stack.Screen name="FormularioDelEstudiante" component={FormularioEstudiante} options={{title: 'Formulario para crear Estudiante'}}/>
        </Stack.Navigator>
    </NavigationContainer>
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