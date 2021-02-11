import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {CommonActions} from '@react-navigation/native';
export default Splash = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1DA1F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
