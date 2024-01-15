import {PropsWithChildren} from 'react';
import styles from './ScreenLayout.styled.ts';
import {SafeAreaView, StatusBar, View} from 'react-native';

export type ScreenLayoutProps = {
  footer?: React.JSX.Element;
};

const ScreenLayout = ({
  children,
  footer,
}: PropsWithChildren<ScreenLayoutProps>) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.content}>{children}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </SafeAreaView>
  );
};

export default ScreenLayout;
