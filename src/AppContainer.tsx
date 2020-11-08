import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SideMenu } from './components/SideMenu';
import { MasterScreen } from './screens/MasterScreen';
import { SecondScreen } from './screens/SecondScreen';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const config = {
    contentComponent: SideMenu
}
const stackConfig = {
    initialRouteName: 'Stack1',
    defaultNavigationOptions: {
        cardStyleInterpolator: ({ current: { progress } }) => {
            console.log("progress", progress);
            return { cardStyle: { opacity: progress } }
        },
    },
    headerMode: "none"
}



const createCustomStackNavigator = (prefix: string) => {
    let stackItems = {};
    stackItems["Stack1"] = { screen: MasterScreen };
    stackItems["Stack2"] = { screen: SecondScreen };
    // @ts-ignore
    return createSharedElementStackNavigator(stackItems, stackConfig);
}

const RootStack = createDrawerNavigator({
    Home: {
        // @ts-ignore
        screen: createCustomStackNavigator("Home")
    },
    SecondScreen: {
        // @ts-ignore
        screen: createCustomStackNavigator("SecondScreen")
    },
    ThirdScreen: {
        // @ts-ignore
        screen: createCustomStackNavigator("ThirdScreen")
    },
}, config);
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };