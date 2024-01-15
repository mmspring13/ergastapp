import {BasePagination} from '../../shared/pagination/types.ts';

export type DriverItem = {
  driverId: string;
  url: string | null;
  givenName: string | null;
  familyName: string | null;
  dateOfBirth: string | null;
  nationality: string | null;
};

export type ResponseDriverDTO = {
  items: DriverItem[];
  pagination: BasePagination;
};
