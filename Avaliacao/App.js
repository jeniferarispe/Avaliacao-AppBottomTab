import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Bage from "./screens/Bage";
import Pelotas from "./screens/Pelotas";
import PortoAlegre from "./screens/PortoAlegre";

function BageScreen() {
    return <Bage > < /Bage>;
}

function PelotasScreen() {
    return <Pelotas > < /Pelotas>;
}

function PortoAlegreScreen() {
    return <PortoAlegre > < /PortoAlegre>;
}

const Tab = createBottomTabNavigator();

export default function App() {
    return ( <
        NavigationContainer >
        <
        Tab.Navigator >
        <
        Tab.Screen name = "Bage"
        component = { BageScreen }
        options = {
            {
                tabBarIcon: () => ( <
                    Image source = { require("./assets/icon.png") }
                    style = {
                        { width: 20, height: 20 }
                    }
                    />
                ),
            }
        }
        /> <
        Tab.Screen name = "Pelotas"
        component = { PelotasScreen }
        options = {
            {
                tabBarIcon: () => ( <
                    Image source = { require("./assets/favicon.png") }
                    style = {
                        { width: 20, height: 20 }
                    }
                    />
                ),
            }
        }
        /> <
        Tab.Screen name = "PortoAlegre"
        component = { PortoAlegreScreen }
        options = {
            {
                tabBarIcon: () => ( <
                    Image source = { require("./assets/splash.png") }
                    style = {
                        { width: 20, height: 20 }
                    }
                    />
                ),
            }
        }
        /> < /
        Tab.Navigator > <
        /NavigationContainer>
    );
}