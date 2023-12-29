import {createStyleSheet} from '../../../config/unistyles';

export const stylesheet = createStyleSheet(theme => ({
  containerButton: {
    backgroundColor: theme.colors.primary,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textButton: {
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    color: 'white',
  },
}));
