import './src/style/index.css';
import './src/style/kamadatepicker.min.css';
import { app } from './src/App';

const todo = document.getElementById('app');
todo.appendChild(app());

kamaDatepicker('task-date');
kamaDatepicker('deadline');
