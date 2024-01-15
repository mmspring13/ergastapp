import React, {useMemo} from 'react';
import styles from './Pagination.styled.ts';
import {Text, TouchableOpacity, View} from 'react-native';
import {paginate} from '../helpers.ts';

export type PaginationProps = {
  limit: number;
  total: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const Pagination = ({
  limit,
  total,
  currentPage,
  onChange,
}: PaginationProps): React.JSX.Element => {
  const pagination = useMemo(
    () => paginate({current: currentPage, max: Math.floor(total / limit)}),
    [currentPage, limit, total],
  );

  const handleChange = (value: number) => onChange(value);

  return (
    <View style={styles.container}>
      {pagination?.items.map(item => {
        return (
          <TouchableOpacity
            onPress={() =>
              item.value !== '...' ? handleChange(item.id) : undefined
            }
            style={[
              styles.button,
              currentPage === item.id ? styles.buttonActive : null,
            ]}
            key={item.id}>
            <Text style={styles.buttonText}>{item.value}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Pagination;
