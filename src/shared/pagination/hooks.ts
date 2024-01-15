import {useMemo, useState} from 'react';
import {BASE_TAKE} from './constants.ts';
import {BasePagination} from './types.ts';
import get from 'lodash/get';

export const usePaginator = () => {
  const [offset, setOffset] = useState(0);

  const page = useMemo(() => Math.ceil(offset / BASE_TAKE) || 1, [offset]);

  const handleChangePage = (newPage: number) => setOffset(BASE_TAKE * newPage);

  const getTotalAndLimit = (info?: BasePagination | null) => ({
    total: get(info, 'total', 0),
    limit: get(info, 'limit', 0),
  });

  return {
    offset,
    page,
    handleChangePage,
    getTotalAndLimit,
  };
};
