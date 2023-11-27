// Updated App.js for tab- and stack-driven navigations
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import Cities from './src/Cities/Cities'
import City from './src/Cities/city';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries'
import Country from './src/Countries/country';
import AddCountry from './src/AddCountry/AddCountry';
import { colors } from './src/theme'
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen ({navigation, route}){
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
      }}>
      <Stack.Screen name="Cities" component={Cities} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}} />
      <Stack.Screen name="City" component={City} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}}/>
      </Stack.Navigator>
    );
}

function CountriesStackScreen ({navigation, route}){
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: '#fff'
    }}>
    <Stack.Screen name="Countries" component={Countries} initialParams={{
      countries: route.params.countries,
      addcountry: route.params.addcountry}} />
    <Stack.Screen name="country" component={Country} initialParams={{
      countries: route.params.countries,
      addcountry: route.params.addcountry}}/>
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries:[]
  }
  addCity = (city) => {
    console.log(city);
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }
  addCountry = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }
  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => {
      return item.id === city.id
    })
    const chosenCity = this.state.cities[index]
    chosenCity.locations.push(location)
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ]
    this.setState({
      cities
    })
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cities" initialParams={{cities: this.state.cities,addCity: this.addCity,addLocation: this.addLocation}} component={CitiesStackScreen} />
          <Tab.Screen name="AddCity"   initialParams={{cities: this.state.cities,addCity: this.addCity,addLocation: this.addLocation}} component={AddCity} />
          <Tab.Screen name="Countries" initialParams={{countries: this.state.countries,addCountry: this.addCountry}} component={CountriesStackScreen} />
          <Tab.Screen name="AddCountry"  initialParams={{countries: this.state.countries,addCountry: this.addCountry}} component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}