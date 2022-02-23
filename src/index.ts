import Test from './test';
import './css/style.scss';

const root = document.getElementById('root');
const test = new Test('Hello World');
test.sayHello(root);