import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
//import uuidV4 from 'uuid/V4'
import 'react-native-get-random-values';
import { v4 as uuidV4} from 'uuid';
import { colors } from '../theme'

export default class AddCountry extends React.Component {
  state = {
    country: '',
    currency: '',
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.currency === '' || this.state.country === '') {
      alert('please complete form')
    }
    const country = {
      country: this.state.country,
      currency: this.state.currency,
      id: uuidV4(),
      locations: []
    }
    //this.props.screenProps.addCity(city)
    this.props.route.params.addCountry(country)
    this.setState({
      country: '',
      currency: ''
    }, () => {
      this.props.navigation.navigate('Countries')
    })
  }
  render() {   
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Country</Text>
        <TextInput
          placeholder='Country name'
          onChangeText={val => this.onChangeText('country', val)}
          style={styles.input}
          value={this.state.country}
        />
        <TextInput
          placeholder='Currency'
          onChangeText={val => this.onChangeText('currency', val)}
          style={styles.input}
          value={this.state.currency}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Country</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})