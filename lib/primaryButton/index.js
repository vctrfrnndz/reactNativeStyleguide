import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../_vars';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    overflow: 'hidden',
    height: 90
  },
  buttonIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});
  
class PrimaryButton extends Component {
  static defaultProps = { 
    action: () => {},
    primaryColor: colors.primaryDefault
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      pressed: false
    }
  }
  
  handlePress() {
    return this.props.action();
  }
  
  render() {
    return (
      <TouchableHighlight underlayColor='#000000' onPress={this.handlePress.bind(this)}>
        <View 
          style={[styles.container, { backgroundColor: this.props.primaryColor }]}>
          <Image
            style={styles.buttonIcon}
            source={require('./img/submit-icon.png')}
          />
        </View>
      </TouchableHighlight>
    )
  }
}

export default PrimaryButton;