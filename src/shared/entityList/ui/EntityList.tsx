import styles from './EntityList.styled.ts';
import React from 'react';
import {ActivityIndicator, View, VirtualizedList} from 'react-native';
import {
  ListRenderItem,
  VirtualizedListWithoutRenderItemProps,
} from '@react-native/virtualized-lists/Lists/VirtualizedList';

export type EntityListProps<T extends Object> = {
  data: Array<T>;
  keyExtractor: VirtualizedListWithoutRenderItemProps<T>['keyExtractor'];
  renderItem: ListRenderItem<T>;
  isLoading: boolean;
};

function EntityList<T extends Object>({
  data,
  keyExtractor,
  renderItem,
  isLoading,
}: EntityListProps<T>): React.JSX.Element {
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <VirtualizedList
      style={styles.virtualList}
      scrollEventThrottle={100}
      renderItem={renderItem}
      getItemCount={items => items.length}
      getItem={(items, index) => {
        return items[index] as T;
      }}
      keyExtractor={keyExtractor}
      data={data}
    />
  );
}
export default EntityList;
