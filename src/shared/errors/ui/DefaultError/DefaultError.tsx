import {Text, TouchableOpacity, View} from 'react-native';
import styles from './DefaultError.styled.ts';

export type DefaultErrorProps = {
  onRetry?: () => void;
};

const DefaultError = ({onRetry}: DefaultErrorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ooops %( Something Wrong</Text>
      {onRetry && (
        <TouchableOpacity onPress={onRetry} style={styles.button}>
          <Text style={styles.buttonText}>Retry Fetch</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DefaultError;
