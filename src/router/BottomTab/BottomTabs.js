import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo'
import Home from '../../pages/Home/Home';
import MyCart from '../../pages/MyCart/MyCart';
import Favorite from '../../pages/Favorite/Favorite';
import Colors from '../../styles/Colors';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

function AppTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarLabel: () => null, // Hiding the tab title globally
                tabBarActiveTintColor: Colors.primary, // Active tab color
                tabBarInactiveTintColor: Colors.tabInActive, // Inactive tab color
                tabBarStyle: { height: RFPercentage(8), backgroundColor: Colors.white }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="home"
                            size={RFPercentage(3.5)}
                            style={{ color: color, }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="heart"
                            size={RFPercentage(4)}
                            style={{ color: color, }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="MyCart"
                component={MyCart}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo
                            name="shopping-cart"
                            size={RFPercentage(3.5)}
                            style={{ color: color, }}
                        />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default AppTabs;