import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    flex: 1,
    backgroundColor: theme.colors.sectionBg,
  },
  content: {
    flex: 1,
  },
  footer: {
    height: 60,
    backgroundColor: theme.colors.sectionBg,
    borderTopWidth: 2,
    borderTopColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
