// after react scripts version 0.4, this file is a special file
// you can add into your application to run BEFORE tests with create-react-app

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

