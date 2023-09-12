import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function App() {
    return (
        <>
            <MainContainer />
            <StatusBar style="auto" />
        </>
    );
}

export default App;
