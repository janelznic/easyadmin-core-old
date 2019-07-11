interface ApiConfig {
  readonly baseUrl: string;
  readonly version: string;
}

interface AppConfig {
  readonly api: ApiConfig;
}

const AppConfig: AppConfig = {
  api: {
    baseUrl: 'http://www.cheapshark.com/api/',
    version: '1.0'
  }
};

export default AppConfig;
