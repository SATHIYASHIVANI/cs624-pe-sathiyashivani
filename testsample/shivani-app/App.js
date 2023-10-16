import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App1 = () => {
  return (
    <ScrollView style={shivanimakeup2.scrollviewstyle}>
    <View style={{padding:30}}>
    <Image
        source={
          require('./assets/icon.png')
        }
        style={{width: 300, height: 300}}
      />
      </View>

<View style={{height:20}}></View>

<Text>Which course did you like?</Text>
<TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2,
          width:350,
        }}
        defaultValue="ex. CS624"
      />

<View style={{height:30}}></View>

    <View style={shivanimakeup2.container}>
      <Text style={{fontSize:'45', fontWeight:'bold'}}>Core Requirements (24 credits)</Text>
    </View>

    <Text style={shivanimakeup2.Text}>CS 504 Software Engineering</Text>
    <Text style={shivanimakeup2.Text}>CS 506 Programming For Computing</Text>
    <Text style={shivanimakeup2.Text}>CS 519 Cloud computing Overview</Text>
    <Text style={shivanimakeup2.Text}>CS 533 Computer Architecture</Text>
    <Text style={shivanimakeup2.Text}>CS 547 Secure System and 506Programs</Text>
    <Text style={shivanimakeup2.Text}>CS 622 Discrete Math and Algorithms for Computing</Text>
    <Text style={shivanimakeup2.Text}>CS 510 Artifical intelligence for DataScience</Text>
    <Text style={shivanimakeup2.Text}>CS 620 Machine learning & Deep Learning </Text>
    <View style={{height:40}}></View>
    
    <View style={shivanimakeup2.container}>
      <Text style={{fontSize:'45',fontWeight:'bold'}}>Depth of Study (6 credits)</Text>
    </View>
   
    <Text style={shivanimakeup2.Text}>CS 624 Full-stack Development-Mobile App</Text>
    <Text style={shivanimakeup2.Text}>CS 628 Full-stack Development-Web App</Text>
    <View style={{height:40}}></View>
    

    <View style={shivanimakeup2.container}>
      <Text style={{fontSize:'45',fontWeight:'bold'}}>Captsone (3 credits)</Text>
    </View>
    <View style={{paddingBottom:100}}>
    <Text style={shivanimakeup2.Text}>CS 687 Computer Science Capstone</Text>
    </View>

    </ScrollView>
  );
}

export default App1;


const shivanimakeup2= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'left',
    justifyContent: 'left',
    fontWeight:'bold'
  },
  Text:{
    fontSize:17,
  },
  scrollviewstyle : {
    flex:1,
    backgroundColor:'white',
    paddingLeft:0,
    paddingTop:50,
    paddingBottom:10,
    flexGrow:1,
  },
  boldText:{
    fontWeight:'bold'
  }

}
);