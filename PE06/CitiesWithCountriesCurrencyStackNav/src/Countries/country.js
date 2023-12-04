// Listing 6.9 City route (functionality)
import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, TextInput, TouchableOpacity} from 'react-native'

import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'

class Country extends React.Component {
  static navigationOptions = (props) => {
    const { country } = props.route.params
    return {
      title: country.country,
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
      }
    }
  }
  state = {
    name: '',
    info: ''
  }
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  addCurrency = () => {
    if (this.state.name === '' || this.state.info === '') return
    const { country } = this.props.route.params
    const currency = {
      name: this.state.name,
      info: this.state.info
    }
    this.props.route.params.addCurrency(currency, country)
    this.setState({ name: '', info: '' })
  }
  render() {
    const { country } = this.props.route.params
    console.log('props: ', this.props)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!country.currency.length && { flex: 1 }]}>
          <View style={[styles.locationsContainer, !country.currency.length && { flex: 1, justifyContent: 'center' }]}>
            {
              !country.currency.length && <CenterMessage message='No Cuurency for this country!' />
            }
            {
              country.currency.map((currency, index) => (
                <View key={index} style={styles.locationContainer}>
                  <Text style={styles.locationName}>{currency.name}</Text>
                  <Text style={styles.locationInfo}>{currency.info}</Text>
                </View>
              ))
            }
          </View>
        </ScrollView>
        <TextInput
          onChangeText={val => this.onChangeText('name', val)}
          placeholder='Currency name'
          value={this.state.name}
          style={styles.input}
          placeholderTextColor='black'
        />
        <TextInput
          onChangeText={val => this.onChangeText('info', val)}
          placeholder='Currency info'
          value={this.state.info}
          style={[styles.input, styles.input2]}
          placeholderTextColor='black'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addCurrency}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Currency</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  locationsContainer: {
    paddingBottom: 104
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2
  },
  locationName: {
    fontSize: 20
  },
  locationInfo: {
    color: 'rgba(0, 0, 0, .5)'
  }
})

export default Country