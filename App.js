import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';


function ArtInstitute({}) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/art.png')} />
      <TouchableOpacity 
        onPress={ () => WebBrowser.openBrowserAsync('https://www.artic.edu/')}
        style={styles.button}
      >
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}

function MagnificentMile({ }) {
  return (        
    <View style={styles.container}>      
      <Image style={styles.imgSettings} source={require('./assets/mile.png')} />
      <TouchableOpacity 
        onPress={ () => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')}
        style={styles.button}
      >
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}

function NavyPier({ }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/pier.png')} />
      <TouchableOpacity 
        onPress={ () => WebBrowser.openBrowserAsync('https://navypier.org/')}
        style={styles.button}
      >
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}
function WaterTower({ }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/water.png')} />
      <TouchableOpacity 
        onPress={ () => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}
        style={styles.button}
      >
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}
function WillisTower({ }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgSettings} source={require('./assets/willis.png')} />
      <TouchableOpacity 
        onPress={ () => WebBrowser.openBrowserAsync('https://www.willistower.com/')}
        style={styles.button}
      >
        <Text style={styles.text}>More Information</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  imgSettings: {
    width: 240,
    height: 360,
  },
  button: {
    margin: 10,
    backgroundColor: '#2099E3',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    maxWidth: 200,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  
});
