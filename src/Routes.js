import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Inicio from './Pages/Inicio';
import Detalhe from './Pages/Detalhe';

const Routes= createAppContainer(
    createSwitchNavigator({
        Inicio,
        Detalhe,
    }),
);

export default Routes;