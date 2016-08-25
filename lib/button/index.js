import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    padding: 20,
    overflow: 'hidden',
    height: 50
  }
});
  
class PrimaryButton extends Component {
  static defaultProps = { 
    tenantName: 'Auth0',
    logo: '',
    avatar: ''
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.action}>
        <Text>Hello world</Text>
      </TouchableHighlight>
    )
  }
}

export default PrimaryButton;