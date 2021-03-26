import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homsStack';
import AboutStack from './aboutStack';

const RootAppDrawer = createDrawerNavigator({
    Home:{
        screen: HomeStack,
    },
    About:{
        screen: AboutStack,
    },
});
 export default createAppContainer(RootAppDrawer);