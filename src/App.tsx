/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, ReactNode} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Hello} from '@components/Hello';

class App extends Component<any, any> {
  public render(): ReactNode {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.viewStyle}>
            <Hello name={'World'} />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
