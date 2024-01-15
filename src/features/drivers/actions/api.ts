import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ResponseDriverDTO} from '../types.ts';
import get from 'lodash/get';
import { API_URL } from "../../../shared/constants/env.ts";

export const driversApi = createApi({
  reducerPath: 'driversApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}drivers.json`,
  }),
  tagTypes: ['driversApi'],
  endpoints: builder => ({
    list: builder.query<ResponseDriverDTO, {limit: number; offset: number}>({
      query: arg => {
        return `?limit=${arg.limit}&offset=${arg.offset}`;
      },
      async transformResponse(response: unknown): Promise<ResponseDriverDTO> {
        return {
          pagination: {
            limit: get(response, 'MRData.limit', 0),
            total: get(response, 'MRData.total', 0),
            offset: get(response, 'MRData.offset', 0),
          },
          items: get(response, 'MRData.DriverTable.Drivers', []).map(item => ({
            dateOfBirth: get<string | null>(item, 'dateOfBirth', null),
            nationality: get<string | null>(item, 'nationality', null),
            driverId: get<string>(item, 'driverId', ''),
            givenName: get<string | null>(item, 'givenName', null),
            familyName: get<string | null>(item, 'familyName', null),
            url: get<string | null>(item, 'url', null),
          })),
        };
      },
      providesTags: [{type: 'driversApi', id: 'LIST'}],
      // serializeQueryArgs: ({ endpointName, ...rest }) => {
      //   console.log('test', rest)
      //   return endpointName
      // },
      // forceRefetch({ currentArg, previousArg }) {
      //   console.log(currentArg, previousArg)
      //   // return false
      //   return currentArg !== previousArg
      // },
    }),
  }),
});

export const {useListQuery: useDriverListQuery} = driversApi;
