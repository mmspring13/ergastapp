import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.accentColor,
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
  },
  dots: {},
});

export default styles;
