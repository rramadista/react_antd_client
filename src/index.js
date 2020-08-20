import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	rootElement
);

serviceWorker.unregister();
