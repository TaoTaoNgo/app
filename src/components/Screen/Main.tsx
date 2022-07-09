import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { toast } from '../../helpers';
import Home from './Home';
import Dictionary from './Dictionary';
import MyDictionary from './MyDictionary';

const Tab = createBottomTabNavigator();

export default function Main() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'ios-information-circle';

                    switch (route.name) {
                        case 'Home': {
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        }
                        case 'Dictionary': {
                            iconName = focused ? 'list' : 'list-outline';
                            break;
                        }
                        case 'My Dictionary': {
                            iconName = focused ? 'list' : 'list-outline';
                            break;
                        }
                        default: {
                            toast.errToast();
                            break;
                        }
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
                tabBarActiveTintColor: '#4E0189',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 70,
                    padding: 10,
                },
                tabBarLabelStyle: {
                    paddingBottom: 12,
                    fontSize: 10,
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Trang chủ',
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Dictionary"
                component={Dictionary}
                options={{
                    title: 'Dictionary',
                }}
            />
            <Tab.Screen
                name="My Dictionary"
                component={MyDictionary}
                options={{
                    title: 'My Dictionary',
                }}
            />
        </Tab.Navigator>
    );
}
