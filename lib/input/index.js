import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, Image } from 'react-native';

const icons = {
  user: require('./img/icon-user.png'),
  lock: require('./img/icon-lock.png')
};

const sizing = {
  height: 45,
  sidesMargin: 20,
  separation: 15,
  iconsSize: 20
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
    height: sizing.height,
    margin: sizing.sidesMargin,
    marginTop: sizing.separation,
    marginBottom: 0
  },
  containerInvalid: {
    borderColor: '#ff0000'
  },
  indicator: {
    backgroundColor: '#eeeeee',
    height: sizing.height,
    width: sizing.height,
    marginRight: sizing.separation,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputArea: {
    height: sizing.height,
    width: 300,
    color: '#999999',
    backgroundColor: '#ffffff',
    fontSize: 16
  },
  icon: {
    width: sizing.iconsSize,
    height: sizing.iconsSize,
    resizeMode: 'contain'
  },
  errorMsg: {
    textAlign: 'left',
    color: '#ff0000',
    fontSize: 13,
    marginTop: 5,
    marginLeft: sizing.sidesMargin,
    backgroundColor: 'transparent'
  }
});

class Input extends Component {
  static defaultProps = {
    isPassword: false,
    placeholder: '',
    icon: 'user',
    errorMsg: 'Please enter a valid value',
    validator: (val) => {
      return true;
    }
  };
  
  constructor(props) {
    super(props);
    
    this.timer = setTimeout(() => {}, 0);
    this.state = {
      valid: true
    }
  }
  
  handleChange(text) {
    var c = this;
    var valid = c.props.validator(text);
  
    clearTimeout(this.timer);
    
    this.timer = setTimeout(() => {
      if(!valid && text !== '') {
        return c.setState({ valid: false });
      }
      
      return c.setState({ valid: true });
    }, 800);
  }
  
  render() {
    return (
      <View>
        <View style={(this.state.valid) ? styles.container : [styles.container, styles.containerInvalid]}>
          <View style={styles.indicator}>
            <Image source={icons[this.props.icon]} style={styles.icon} />
          </View>
          <TextInput
            onChangeText={this.handleChange.bind(this)}
            autoCapitalize='none'
            autoCorrect={false}
            placeholder={this.props.placeholder}
            style={styles.inputArea}
            secureTextEntry={this.props.isPassword}
          />
        </View>
        { (!this.state.valid && this.props.errorMsg) ?
            <Text style={styles.errorMsg}>{this.props.errorMsg}</Text>
            : null }
    </View>
    )
  }
}

export default Input;