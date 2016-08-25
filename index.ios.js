/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';

import Header from './lib/header';
import Input from './lib/input';
import PrimaryButton from './lib/primaryButton';
import Tabs from './lib/tabs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

class reactNativeStyleguide extends Component {
  constructor(props) {
    super(props);
  }
  
  handleScroll(event) {
    if (event.nativeEvent.contentOffset.y > 20) {
      return StatusBar.setHidden(true, 'slide')
    }
    
    return StatusBar.setHidden(false, 'slide')
  }
  
  render() {
    return (
      <ScrollView
        onScroll={this.handleScroll}
        scrollEventThrottle={200}
      >
        <StatusBar />
        <Header 
          tenantName='Github' 
          logo='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' 
          userName='Victor' 
          avatar='https://www.gravatar.com/avatar/1329d9e3f4bc1d233788c89c04410bfe.png?size=200' 
        />
        <Tabs />
      <View>
          <Input 
            placeholder='Email'
            validator={(val) => {
              if(/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(val)) {
                 return true;
              }
	            return false;
	          }}
            errorMsg='Please enter a valid email'
          />
          <Input 
            placeholder='Password'
            icon='lock'
            isPassword={true}
          />
        
        
        </View>
        <PrimaryButton />
    </ScrollView>
    );
  }
}

AppRegistry.registerComponent('reactNativeStyleguide', () => reactNativeStyleguide);
