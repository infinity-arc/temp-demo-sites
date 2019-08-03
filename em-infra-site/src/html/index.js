import diagram from './backup-diagram.html';

import './styles.css'

const diagramContainer = document.createElement('div');

diagramContainer.classList.add('diagram-container');

diagramContainer.innerHTML = diagram;

export default diagramContainer;