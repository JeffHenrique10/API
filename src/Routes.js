import {createAppContainer, createSwitchNavigator} from 'react-native-navigation';

import inicio from './Pages/Inicio/inicio';
import detalhes from './Pages/Detalhe/detalhes';

const Routes= createAppContainer(
    createSwitchNavigator({
        inicio,
        detalhes
    }),
);

export default Routes;