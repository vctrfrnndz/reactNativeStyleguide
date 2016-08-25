/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View
} from 'react-native';

import Header from './lib/header';
import Input from './lib/input';

class reactNativeStyleguide extends Component {
  render() {
    return (
      <ScrollView>
        <Header 
          tenantName='Github' 
          logo='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' 
        />
        <Header 
          tenantName='Github' 
          logo='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' 
          userName='Victor' 
          avatar='https://www.gravatar.com/avatar/1329d9e3f4bc1d233788c89c04410bfe.png?size=200' 
        />
        <View style={{marginTop: 30, marginBottom: 30}}>
          <Input 
            placeholder="Email"
          />
          <Input 
            placeholder="Password"
            icon="lock"
            isPassword={true}
          />
        </View>
    </ScrollView>
    );
  }
}

AppRegistry.registerComponent('reactNativeStyleguide', () => reactNativeStyleguide);
