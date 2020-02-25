import { makeStyles, colors } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
	square: {
		color: theme.palette.getContrastText(colors.deepOrange[500]),
		backgroundColor: colors.deepOrange[500],
	},
}));