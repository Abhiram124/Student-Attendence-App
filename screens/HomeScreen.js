import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

import db from '../config';
import Buttons from '../components/Buttons';


export default class HomeScreen extends React.Component {
  goToOverviewScreen = () => {
    this.props.navigation.navigate('OverviewScreen');
  };

  render() {
    return (
      <View>
<AppHeader/>

        <Text style={styles.nameText}>Aksh</Text>
        <Buttons name="Aksh" />
 
      

        <Text style={styles.nameText}>Binod </Text>

        <Buttons name="Binod" />
       
        <Text style={styles.nameText}>Charmi</Text>
        <Buttons name="Charmi" />
    
        <Text style={styles.nameText}>Dev</Text>
        <Buttons name="Dev" />
      

        <Text style={styles.nameText}>Dhruv</Text>
        <Buttons name="Dhruv" />
    

        <Text style={styles.nameText}>Dhyan</Text>
        <Buttons name="Dhyan" />
     

        <Text style={styles.nameText}>Gauri</Text>
        <Buttons name="Gauri" />
     

        <Text style={styles.nameText}>Kalash</Text>
        <Buttons name="Kalash" />
      

        <Text style={styles.nameText}>Kasi</Text>
        <Buttons name="Kasi" />
       

        <Text style={styles.nameText}>Khush</Text>
        <Buttons name="Khush" />
      
      <TouchableOpacity style={styles.greenbutton} onPress={()=>{this.goToOverviewScreen()}}><Text>SUBMIT</Text></TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  nameText: {
   
    fontWeight: 5,
    fontSize: 20,
  },
   greenbutton:{
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    flexDirection:'row',
    backgroundColor: 'yellow'
  }
});
