import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps87232Navigator from '../features/Maps87232/navigator';
import Add-Item87231Navigator from '../features/Add-Item87231/navigator';
import Maps87227Navigator from '../features/Maps87227/navigator';
import UserProfile87223Navigator from '../features/UserProfile87223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps87232: { screen: Maps87232Navigator },
Add-Item87231: { screen: Add-Item87231Navigator },
Maps87227: { screen: Maps87227Navigator },
UserProfile87223: { screen: UserProfile87223Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
