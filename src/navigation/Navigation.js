import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';
import AccountNavigation from './AccountNavigation';

const TAB = createBottomTabNavigator();

export default function Navigation() {
    return (
        <TAB.Navigator>
            <TAB.Screen
                name='Favorites'
                component={FavoriteNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />
                }}
            />
            <TAB.Screen
                name='Pokedex'
                component={PokedexNavigation}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => renderPokeballImage(),
                }}
            />
            <TAB.Screen
                name='Account'
                component={AccountNavigation}
                options={{
                    tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />
                }}
            />
        </TAB.Navigator>
    )
}


const renderPokeballImage = () => (
    <Image
        source={require('../assets/pokeball.png')}
        style={{ width: 75, height: 75, top: -15 }}
    />
)