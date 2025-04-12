import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import UserContext, {UserProvider} from './Context/UserContext';
import HomeScreen from './BottomScreen/HomeScreen';
import ProfileScreen from './BottomScreen/ProfileScreen';
import WelcomeScreen from './Components/WelcomeScreen';
import LoginScreen from './AuthScreens/LoginScreen';
import SignupScreen from './AuthScreens/SignupScreen';
import LeaderboardScreen from './BottomScreen/LeaderboardScreen';
import CategoriesScreen from './BottomScreen/CategoriesScreen';
import QuizScreen from './Components/QuizScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Custom Tab Button Component
const CustomTabButton = ({children, onPress, isActive, label}) => {
  return (
    <TouchableOpacity style={styles.customButton} onPress={onPress}>
      <View
        style={[
          styles.tabButton,
          isActive ? styles.activeTabButton : styles.normalTabButton,
        ]}>
        {children}
        {!isActive && <Text style={styles.tabLabel}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

// Bottom Tab Navigator
const HomeTabs = () => {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false, // Hide default labels
      })}
      screenListeners={({route}) => ({
        tabPress: () => setSelectedTab(route.name),
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <CustomTabButton
              {...props}
              isActive={selectedTab === 'Home'}
              label="Home">
              <Icon
                name="newspaper-o"
                size={24}
                color={selectedTab === 'Home' ? '#fff' : '#808080'}
              />
            </CustomTabButton>
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={QuizScreen}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <CustomTabButton
              {...props}
              isActive={selectedTab === 'Categories'}
              label="Categories">
              <Icon2
                name="category"
                size={24}
                color={selectedTab === 'Categories' ? '#fff' : '#808080'}
              />
            </CustomTabButton>
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarButton: props => (
            <CustomTabButton
              {...props}
              isActive={selectedTab === 'Leaderboard'}
              label="Leaderboard">
              <Icon2
                name="leaderboard"
                size={24}
                color={selectedTab === 'Leaderboard' ? '#fff' : '#808080'}
              />
            </CustomTabButton>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarButton: props => (
            <CustomTabButton
              {...props}
              isActive={selectedTab === 'Profile'}
              label="Profile">
              <Icon
                name="user"
                size={24}
                color={selectedTab === 'Profile' ? '#fff' : '#808080'}
              />
            </CustomTabButton>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Stack Navigator for Auth + Main App
const AppNavigation = () => {
  const {isLoggedIn} = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        ) : (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Main App Component
const App = () => {
  return (
    <UserProvider>
      <AppNavigation />
    </UserProvider>
  );
};

// Styles
const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    height: 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    left: 10,
    right: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 3,
  },
  customButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabButton: {
    backgroundColor: '#6A5ACD',
    top: -18,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 8},
    shadowRadius: 8,
  },
  normalTabButton: {
    backgroundColor: 'transparent',
  },
  tabLabel: {
    color: '#808080',
    fontSize: 12,
    marginTop: 3,
    textAlign: 'center',
  },
});

export default App;
