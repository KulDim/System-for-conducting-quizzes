import * as React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ padding: 10 }}>
            <Text>wifi</Text>
            <Ionicons
                name="wifi"
                size={30}
                color=""
            />

            <Text>bluetooth</Text>
            <Ionicons
                name="bluetooth"
                size={30}
                color=""
            />
        </View>
    );
}
