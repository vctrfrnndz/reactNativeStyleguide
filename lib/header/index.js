import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import colors from '../_vars';

var device = Dimensions.get('window');
var headerHeight = 140;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccccc',
    alignItems: 'center',
    padding: 20,
    paddingTop: 35,
    overflow: 'hidden',
    height: headerHeight
  },
  backDrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: headerHeight
  },
  backDropImage: {
    resizeMode: 'cover',
    flex: 1,
    height: headerHeight
  },
  text: {
    textAlign: 'center',
    color: colors.black,
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: 'contain'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
    resizeMode: 'contain'
  }
});

class Header extends Component {
  static defaultProps = { 
    tenantName: 'Auth0',
    logo: '',
    avatar: ''
  };
  
  constructor(props) {
    super(props);
  }
  
  getLogo() {
    if(!this.props.logo) {
      return require('./img/badge.png')
    }
    
    return { 
      uri: this.props.logo
    }
  }
  
  getMainImage() {
    return (!this.props.avatar) ? 
      <Image
        style={styles.logo}
        source={this.getLogo()}
      /> : 
      <Image
        style={styles.avatar}
        source={{ uri: this.props.avatar }}
      />
  };
  
  getMainText() {
    return (this.props.userName) ? 'Welcome ' + this.props.userName : this.props.tenantName;
  }
  
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.backDrop}>
          <Image
            style={styles.backDropImage}
            source={require('./img/backdrop.png')}
          />
        </View>
        
        {this.getMainImage()}
        
        <Text style={styles.text}>
          {this.getMainText()}
        </Text>
      </View>
    )
  }
}

export default Header;