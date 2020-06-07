import { Theme } from '@material-ui/core/styles';


export default (theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    containerPadding: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    inputMargin: {
        marginTop: theme.spacing(2)
    }
});