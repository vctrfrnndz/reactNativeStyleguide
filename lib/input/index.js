import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image } from 'react-native';

const icons = {
  user: require('./img/icon-user.png'),
  lock: require('./img/icon-lock.png')
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#eeeeee',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 3,
    height: 45,
    margin: 30,
    marginTop: 0,
    marginBottom: 15
  },
  indicator: {
    backgroundColor: '#eeeeee',
    height: 45,
    width: 45,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputArea: {
    height: 45,
    width: 300,
    color: '#999999',
    backgroundColor: '#ffffff',
    fontSize: 16
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
});

class Input extends Component {
  static defaultProps = {
    isPassword: false,
    placeholder: '',
    icon: 'user'
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.indicator}>
          <Image source={icons[this.props.icon]} style={styles.icon} />
        </View>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          placeholder={this.props.placeholder}
          style={styles.inputArea}
          secureTextEntry={this.props.isPassword}
        />
      </View>
    )
  }
}

export default Input;