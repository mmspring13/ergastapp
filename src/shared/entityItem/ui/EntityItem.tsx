import React from 'react';
import styles from './EntityItem.styled.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export type EntityItemProps = {
  data: Array<{id: string; label: string; value: string | null}>;
  detailLink?: string | null;
  detailTitle?: string | null;
  extraBlocks?: React.JSX.Element;
};

const EntityItem = ({
  data,
  detailLink,
  extraBlocks,
  detailTitle,
}: EntityItemProps): React.JSX.Element => {
  const navigation = useNavigation<
    NavigationProp<{
      Drivers: undefined;
      Webview: {uri: string; name: string};
    }>
  >();

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.id} style={styles.infoContainer}>
          <Text style={styles.infoLabel}>{item.label}</Text>
          <Text style={styles.infoText}>{item.value}</Text>
        </View>
      ))}
      {detailLink && (
        <TouchableOpacity
          style={styles.infoLink}
          onPress={() =>
            navigation.navigate('Webview', {
              uri: detailLink,
              name: detailTitle || '',
            })
          }>
          <Text style={styles.infoLinkText}>More Info</Text>
        </TouchableOpacity>
      )}
      {extraBlocks}
    </View>
  );
};

export default React.memo(EntityItem);
