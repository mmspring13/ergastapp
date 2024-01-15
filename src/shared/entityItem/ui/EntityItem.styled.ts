import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: theme.colors.mainBg,
    marginBottom: 24,
    borderRadius: 4,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  infoLabel: {},
  infoText: {},
  infoLink: {
    marginTop: 20,
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    borderColor: theme.colors.accentColor,
    paddingLeft: 4,
    paddingRight: 4,
  },
  infoLinkText: {
    color: theme.colors.accentColor,
  },
});

export default styles;
