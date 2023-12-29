import {createStyleSheet} from '../../config/unistyles';

export const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
  },
  header: {
    height: 160,
    backgroundColor: {
      xs: theme.colors.primary,
      sm: 'blue',
    },
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
  },
}));
