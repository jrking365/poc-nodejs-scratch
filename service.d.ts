type ConfigDefinition = {
  service: {
    path: string
  }
  log: {
    level: string
    file: string
  }
};

declare module 'config' {
  const config: ConfigDefinition;
  export default config;
}
