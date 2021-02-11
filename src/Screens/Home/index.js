import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMap from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';

import Content from '../../components/content';
import {Bold, Medium, Book, Light} from '../../utils/fonts';
import user from '../../utils/user.json';

HEADER_MAX_HEIGHT = 120;
HEADER_MIN_HEIGHT = 50;
PROFILE_IMAGE_MAX_HEIGHT = 80;
PROFILE_IMAGE_MIN_HEIGHT = 40;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });
    const profileImageHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const profileImageMarginTop = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
      outputRange: [
        HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
        HEADER_MAX_HEIGHT + 5,
      ],
      extrapolate: 'clamp',
    });
    const headerZindex = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
      outputRange: [0, 0, 1000],
      extrapolate: 'clamp',
    });

    const headerTitleBottom = this.state.scrollY.interpolate({
      inputRange: [
        0,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
        HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
        HEADER_MAX_HEIGHT -
          HEADER_MIN_HEIGHT +
          5 +
          PROFILE_IMAGE_MIN_HEIGHT +
          26,
      ],
      outputRange: [-20, -20, -20, 10],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.containerParent}>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#1DA1F2',
            height: headerHeight,
            zIndex: headerZindex,
            alignItems: 'center',
          }}>
          <Animated.View
            style={{position: 'absolute', bottom: headerTitleBottom}}>
            <Text style={styles.textName}>{user?.fullname}</Text>
          </Animated.View>
        </Animated.View>
        <ScrollView
          style={{flex: 1}}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}],
            {useNativeDriver: false},
          )}>
          <Animated.View
            style={{
              height: profileImageHeight,
              width: profileImageHeight,
              borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
              borderColor: 'white',
              borderWidth: 3,
              overflow: 'hidden',
              marginTop: profileImageMarginTop,
              marginLeft: 10,
            }}>
            <Image
              source={{
                uri: user?.avatar,
              }}
              style={{flex: 1, width: null, height: null}}
            />
          </Animated.View>
          <TouchableOpacity style={styles.buttonEdit}>
            <Text style={styles.textButtonEdit}>Edit profile</Text>
          </TouchableOpacity>
          <View style={styles.contentUpper}>
            <Text style={styles.textFullname}>{user.fullname}</Text>
            <Text style={styles.textUsername}>{user.username}</Text>
            <Text style={styles.description}>{user.bio}</Text>
            <View style={styles.contentJoined}>
              <IconMap name="map-pin" color="#657786" />
              <Text style={styles.textJoined}>{user.location}</Text>
            </View>
            <View style={styles.contentJoined}>
              <Icon name="calendar-sharp" color="#657786" />
              <Text style={styles.textJoined}>Joined {user.joined}</Text>
            </View>
            <View style={styles.contentFollow}>
              <Text style={styles.textFollow}>
                {user.following}{' '}
                <Text
                  style={{
                    ...styles.textFollow,
                    fontWeight: null,
                    color: '#657786',
                    fontFamily: Medium,
                  }}>
                  Following
                </Text>
              </Text>
              <Text style={{...styles.textFollow, marginLeft: 10}}>
                {user.followers}{' '}
                <Text
                  style={{
                    ...styles.textFollow,
                    fontWeight: null,
                    color: '#657786',
                    fontFamily: Medium,
                  }}>
                  Followers
                </Text>
              </Text>
            </View>
          </View>
          <Content />
        </ScrollView>
        <TouchableOpacity style={styles.buttonTweet}>
          <Feather
            name="plus"
            size={15}
            color="#fff"
            style={{left: 5, bottom: 5}}
          />
          <Feather name="feather" size={25} color="#fff" style={{right: 5}} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  containerParent: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    color: '#fff',
    fontSize: 14,
    fontFamily: Bold,
  },
  buttonEdit: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#1DA1F2',
    alignSelf: 'flex-end',
    marginRight: 20,
    bottom: '2%',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  textButtonEdit: {
    color: '#1DA1F2',
    fontFamily: Medium,
  },
  textFullname: {
    fontFamily: Bold,
    fontSize: 18,
    color: '#14171A',
  },
  contentUpper: {
    paddingLeft: 10,
    bottom: '2%',
    marginTop: 10,
  },
  textUsername: {
    fontSize: 13,
    color: '#657786',
    fontFamily: Medium,
  },
  textJoined: {
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 5,
    color: '#657786',
    fontFamily: Medium,
  },
  description: {
    fontSize: 12,
    marginTop: 10,
    width: '95%',
    textAlign: 'left',
    color: '#3b3b3b',
    lineHeight: 15,
    fontFamily: Medium,
  },
  contentFollow: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
  },
  textFollow: {
    fontSize: 12,
    fontFamily: Bold,
    color: '#14171A',
  },
  contentJoined: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: '95%',
  },
  buttonTweet: {
    backgroundColor: '#1DA1F2',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 10,
    flexDirection: 'row',
  },
});
