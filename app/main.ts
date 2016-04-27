import {upgradeAdapter} from './upgrade-adapter';
import './downgraded-components';

upgradeAdapter.bootstrap(document.body, ['contacts-app']);
