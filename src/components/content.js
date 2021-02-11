import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconDot from 'react-native-vector-icons/Entypo';
import IconChat from 'react-native-vector-icons/Ionicons';

import {Bold, Medium, Book, Light} from '../utils/fonts';
import data from '../utils/tweets.json';

function HomeScreen() {
  const renderTweets = ({item}) => (
    <TouchableOpacity style={styles.containerTweet}>
      <View style={styles.contentRetweet}>
        <Icon name="retweet" color="#657786" size={20} />
        <Text style={styles.text}>You Retweeted</Text>
      </View>
      <View style={styles.contentTweet}>
        <Image
          style={styles.avatar}
          source={{
            uri: item?.user?.avatar,
          }}
        />
        <View style={{flex: 3, marginLeft: 10}}>
          <Text style={styles.textFullname} numberOfLines={1}>
            {item?.user?.fullname}
          </Text>
          <Text style={{width: 250}}>{item?.desc}</Text>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.containerBottom}>
            <TouchableOpacity style={styles.contentBottom}>
              <IconChat name="chatbubble-outline" color="#657786" size={15} />
              <Text style={{...styles.text, marginLeft: 2}}>
                {item.comments}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.contentBottom,
                marginLeft: 10,
              }}>
              <Icon name="retweet" color="green" size={20} />
              <Text style={{...styles.text, marginLeft: 2, color: 'green'}}>
                {item.retweet}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.contentBottom,
                marginLeft: 10,
              }}>
              <Icon name="heart" color="#D0114D" size={20} />
              <Text style={{...styles.text, marginLeft: 2, color: '#D0114D'}}>
                {item.likes}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            ...styles.text,
            fontSize: 13,
            flex: 1,
            right: 30,
            fontFamily: Medium,
          }}>
          · {item?.date}
        </Text>
        <TouchableOpacity style={{right: 30}}>
          <IconDot name="dots-three-horizontal" color="#657786" size={15} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderTweets}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Content() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1DA1F2',
        inactiveTintColor: '#657786',
        tabStyle: {
          borderBottomColor: '#1DA1F2',
          backgroundColor: '#fff',
          borderBottomWidth: 1,
        },
        labelStyle: {
          textTransform: 'capitalize',
          fontSize: 13,
        },
      }}>
      <Tab.Screen name="Tweets" component={HomeScreen} />
      <Tab.Screen name="Media" component={HomeScreen} />
      <Tab.Screen name="Likes" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contentRetweet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
  },
  text: {
    color: '#657786',
    fontSize: 12,
  },
  contentTweet: {
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  textFullname: {
    fontFamily: Bold,
    width: 200,
  },
  image: {
    width: '110%',
    height: 250,
    marginTop: 5,
    flex: 1,
    resizeMode: 'contain',
  },
  containerBottom: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
    alignSelf: 'flex-start',
  },
  containerTweet: {
    width: '100%',
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  contentBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
