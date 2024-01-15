import {ScreenLayout} from '../../shared/screenLayout/ui';
import {DriverList} from '../../features/drivers/ui';
import React from 'react';
import {useDriverListQuery} from '../../features/drivers/actions/api.ts';
import Pagination from '../../shared/pagination/ui/Pagination.tsx';
import {BASE_TAKE} from '../../shared/pagination/constants.ts';
import {usePaginator} from '../../shared/pagination/hooks.ts';

const DriversScreen = () => {
  const {handleChangePage, offset, page, getTotalAndLimit} = usePaginator();
  const {data, isFetching, isError, refetch} = useDriverListQuery({
    limit: BASE_TAKE,
    offset: offset,
  });
  const {total, limit} = getTotalAndLimit(data?.pagination);

  return (
    <ScreenLayout
      footer={
        <Pagination
          onChange={handleChangePage}
          currentPage={page}
          total={total}
          limit={limit}
        />
      }>
      <DriverList
        onRetry={refetch}
        isError={isError}
        data={data?.items || []}
        isLoading={isFetching}
      />
    </ScreenLayout>
  );
};

export default DriversScreen;
