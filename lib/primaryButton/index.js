import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EA5323',
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
    action: () => {}
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
        <View style={styles.container}>
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