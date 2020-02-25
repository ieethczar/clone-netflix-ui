import React from 'react';
import { useStyles } from './styles';

export function Avatar() {
	const classes = useStyles();
	return (
		<Avatar variant="square" className={classes.square}>
      N
		</Avatar>
	);
}

export default Avatar;
