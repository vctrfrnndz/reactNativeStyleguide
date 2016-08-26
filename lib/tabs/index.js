import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../_vars';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  tab: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: colors.lines
  },
  tabActive: {
    borderColor: colors.black
  },
  tabText: {
    color: colors.text
  },
  tabTextActive: {
    color: colors.black,
    fontWeight: '500'
  }
});
  
class Tabs extends Component {
  static defaultProps = { 
    items: [
      {
        name: 'Login',
        action: (id) => {
          // Do Stuff
        }
      },
      {
        name: 'Signup',
        action: (id) => {
          // Do Stuff
        }
      }
    ]
  }
  
  constructor(props) {
    super(props);
    
    this.state = {
      pressed: 0
    }
  }
  
  handlePress(id, item) {
    this.setState({
      pressed: id
    });
    
    return item.action(id);
  }
  
  createTab(id, item) {
    return (
      <TouchableHighlight 
        key={id}
        style={(this.state.pressed === id) ? [styles.tab, styles.tabActive] : styles.tab}
        underlayColor='transparent'
        onPress={this.handlePress.bind(this, id, item)}
      >
        <View>
          <Text style={(this.state.pressed === id) ? [styles.tabText, styles.tabTextActive] : styles.tabText}>{item.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  
  render() {
    var c = this;
    var tabItems = this.props.items.map((item, index) => {
      return this.createTab(index, item);
    });
    
    return (
      <View style={styles.container}>
        {tabItems}
      </View>
    )
  }
}

export default Tabs;