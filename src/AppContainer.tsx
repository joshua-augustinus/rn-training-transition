import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { SideMenu } from './components/SideMenu';
import { ActivityScreen } from './screens/ActivityScreen';
import { MasterScreen } from './screens/MasterScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { SecondScreen } from './screens/SecondScreen';

const config = {
    contentComponent: SideMenu
}



const createCustomStackNavigator = (prefix: string) => {
    let stackItems = {};
    stackItems["Stack1"] = { screen: MasterScreen };
    stackItems["Stack2"] = { screen: SecondScreen };

    return createStackNavigator(stackItems);
}

const RootStack = createDrawerNavigator({
    Home: {
        screen: createCustomStackNavigator("Home")
    },
    SecondScreen: {
        screen: createCustomStackNavigator("SecondScreen")
    },
    ThirdScreen: {
        screen: createCustomStackNavigator("ThirdScreen")
    },
    Activity: {
        screen: ActivityScreen
    }
}, config);
const AppContainer = createAppContainer(RootStack);

// Now AppContainer is the main component for React to render
export { AppContainer };