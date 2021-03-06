import React, { useEffect } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, BackHandler, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { SafeAreaView, StackActions } from 'react-navigation';
import { DrawerActions, NavigationDrawerProp } from 'react-navigation-drawer';

/**
 * https://reactnavigation.org/docs/4.x/typescript
 */
type Props = {
    navigation: NavigationDrawerProp<{ userId: string, routeName: string }>;
}

const imageSource = require("../../src/assets/logo.png");

const MasterScreen = (props: Props) => {

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', function () {
            console.log("Back called");
            return true;
        });
    }, []);

    const onMenuPress = () => {
        console.log(props.navigation.state);// { key: 'Home', routeName: 'Home' }
        console.log("Menu pressed");
        props.navigation.dispatch(DrawerActions.toggleDrawer());
    }

    const onButtonPress = () => {
        const pushAction = StackActions.push({
            routeName: 'Stack2',
            params: {
                myUserId: 9,
            },
        });

        props.navigation.dispatch(pushAction);
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 50, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity style={{ backgroundColor: 'yellow' }}
                    onPress={() => onMenuPress()}>
                    <Text>Menu</Text>
                </TouchableOpacity>
                <SharedElement id="imageId" >
                    <Image source={imageSource} style={{ height: '100%', resizeMode: "contain" }} />
                </SharedElement>

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>{props.navigation.state.routeName}</Text>
                <TextInput placeholder="Enter text here..."></TextInput>
                <Button title="Press me" onPress={() => onButtonPress()}></Button>
            </View>
        </SafeAreaView>

    );

}

MasterScreen.navigationOptions = {}

export { MasterScreen }