import WebView from 'react-native-webview';
import styles from './Webview.styled.ts';
import {ActivityIndicator, View} from 'react-native';

export type WebviewScreenProps = {
  uri: string;
};
const WebviewScreen = ({uri}: WebviewScreenProps) => {
  return (
    <WebView
      renderLoading={() => (
        <View style={{flex: 1, alignItems: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      )}
      style={styles.container}
      source={{uri}}
    />
  );
};

export default WebviewScreen;
