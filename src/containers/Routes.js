import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Browse from './Browse';
import Watch from './Watch';

export function Routes() {
	return (
		<Switch>
			<Route path="/browse" exact component={Browse} />
			<Route path="/watch/:key" exact component={Watch} />
			<Redirect to='/browse' />
		</Switch>
	);
}

export default Routes;
