import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
    const [isListening, setIsListening] = useState(false);
    useEffect(() => {
        if (isListening) {
            const url = 'http://localhost:8080/start';
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                });
        } else {
            console.log('2');
        }
    }, [isListening]);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <Ionicons
                name="radio-button-off"
                size={30}
                color=""
            />
            <Ionicons
                name="radio-button-on-outline"
                size={30}
                color=""
            />

            <Button
                title={isListening ? 'Stop' : 'Start'}
                accessibilityLabel="button"
                onPress={() => setIsListening(state => !state)}
            />
        </View>
    );
}
