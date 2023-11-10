import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 
import { Platform, Image, StyleSheet, Text, View, TouchableHighlight, ScrollView } from 'react-native'; 
 
const userImage = require('./assets/user.png');
 
const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. ' +
      'He loves using JS to build React Native applications ' +
      'for iOS and Android',
    showThumbnail: true
  }
];
 
const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];
 
  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }
 
  return (
    <TouchableHighlight onPress={onPress}> 
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image}/>
        </View>
        <View>
          <Text style={styles.cardName}>
            {name}
          </Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>
            {occupation}
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};
 
ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};
 
const WrapContainer = ({ children }) => (
  <ScrollView>
    <View style={styles.wrapContainer}>
      {children}
    </View>
  </ScrollView>
);
 
WrapContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
 
export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }
 
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    const profiles = this.state.data.map((item, index) => (
      <ProfileCard
        key={'card-' + index}
        image={item.image}
        name={item.name}
        occupation={item.occupation}
        description={item.description}
        onPress={() => this.handleProfileCardPress(index)}
        showThumbnail={item.showThumbnail}
      />
    ));
 
    const rows = [];
    for (let i = 0; i < profiles.length; i += 2) {
      rows.push(
        <WrapContainer key={`wrap-container-${i / 2}`}>
          {profiles.slice(i, i + 2)}
        </WrapContainer>
      );
    }
 
    return (
      <View style={styles.container}>
        {rows}
      </View>
    );
  }
}
 
const profileCardColor = 'dodgerblue';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 190,
    height: 250,
    marginBottom: 10,
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      }
    })
  },
  cardThumbnail: {   
    transform: [{scale: 0.2}]
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 15,
    paddingTop: 7.5,
    ...Platform.select({ 
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15,
      }
    })
  },
  cardImage: {
    width: 40,
    height: 40
  },
  cardName: {   
    color: 'white',
    marginTop: 15,
    fontWeight: 'bold',    
    fontSize: 12,  
    textShadowColor: 'black',      
    textShadowOffset: {            
      height: 1,
      width: 1
    },
    textShadowRadius: 2            
  },
  cardOccupationContainer: {    
    borderColor: 'black',
    borderBottomWidth: 3,
    marginBottom: 5,
  },
  cardOccupation: {     
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 10,
  },
  cardDescription: {  
    fontStyle: 'italic',  
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 5,
    fontSize: 10,
  }
});