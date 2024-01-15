import {FC} from 'react';
import {DriverItem} from '../types.ts';
import {EntityList} from '../../../shared/entityList/ui';
import {EntityItem} from '../../../shared/entityItem/ui';
import {Text, TouchableOpacity, View} from 'react-native';
import {DefaultError} from '../../../shared/errors/ui/DefaultError';

export type DriverListProps = {
  data: DriverItem[];
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
};

const DriverList: FC<DriverListProps> = ({
  data,
  isLoading,
  isError,
  onRetry,
}) => {
  if (isError) {
    return <DefaultError onRetry={onRetry} />;
  }

  return (
    <EntityList
      isLoading={isLoading}
      data={data}
      keyExtractor={item => item.driverId}
      renderItem={item => {
        const info = [
          {id: 'givenname', label: 'Given Name', value: item.item.givenName},
          {id: 'DOB', label: 'Date Of Birth', value: item.item.dateOfBirth},
          {
            id: 'nationality',
            label: 'Nationality',
            value: item.item.nationality,
          },
          {id: 'familyName', label: 'Family Name', value: item.item.familyName},
        ];
        return (
          <EntityItem
            data={info}
            detailLink={item.item.url}
            detailTitle={`${item.item.givenName} ${item.item.familyName}`}
          />
        );
      }}
    />
  );
};

export default DriverList;
