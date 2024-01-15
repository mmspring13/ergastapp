import {StyleSheet} from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: theme.colors.mainBg,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
  },
});
export default styles;
