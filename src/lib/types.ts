export type TAPISuccess<T> = T & {
  success: true;
};

export type TAPIError = {
  success: false;
  message: string;
};

export type TResp<T> = TAPISuccess<T> | TAPIError;

export type TGeoDetails = {
  ip: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  postal: string;
  connection: {
    isp: string;
  };
  timezone: {
    utc: string;
  };
};

export type TGeoResp = TResp<TGeoDetails>;

export type TIPResp = TResp<{ ip: string }>;
