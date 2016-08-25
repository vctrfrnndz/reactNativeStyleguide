import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  }
});
  
class Tabs extends Component {
  static defaultProps = { 
    action: () => {},
    label1: 'Login',
    label2: 'Sign Up'
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      pressed: ''
    }
  }
  
  handlePress(event) {
    if(this.label) {
      
    }
    
    return this.props.action();
  }
  
  createTab(label) {
    return (
      <TouchableHighlight underlayColor='#000000' onPress={this.handlePress.bind(this)}>
        <View>
          <Text>{label}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  
  render() {
    let tab1 = this.createTab(this.props.label1);
    let tab2 = this.createTab(this.props.label2);
    
    return (
      <View style={styles.container}>
        {tab1}
        {tab2}
      </View>
    )
  }
}

export default Tabs;