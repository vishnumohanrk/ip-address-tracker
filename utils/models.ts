export interface IDetails {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  coordinates: [number, number];
}

export interface IRetData {
  data: IDetails;
  isLoading: boolean;
  isError: boolean;
}
