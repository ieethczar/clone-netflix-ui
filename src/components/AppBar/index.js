import React from 'react';
import PropTypes from 'prop-types';
import {
	AppBar as NavBar,
	Toolbar,
	Typography,
	CssBaseline,
	useScrollTrigger,
	Box,
	Container
} from '@material-ui/core';

function ElevationScroll(props) {
	const { children, window } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
}

ElevationScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func,
};

export function AppBar(props) {
	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<NavBar>
					<Toolbar>
						<Typography variant="h6">Scroll to Elevate App Bar</Typography>
					</Toolbar>
				</NavBar>
			</ElevationScroll>
			<Toolbar />
			<Container>
				<Box my={2}>
					{[...new Array(50)]
						.map(
							() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
						)
						.join('\n')}
				</Box>
			</Container>
		</React.Fragment>
	);
}

export default AppBar;
