// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  file: 'dev',

  // Settings for the embedded version
  // embedded: true,
  // apiUrl:
  //     `${window.location.protocol}//${window.location.hostname}`,

  // Settings below for the proxy version
  embedded: false,
  apiUrl:
    window.location.protocol + '//' + window.location.hostname + ':9000/api',
  nbiApiUrl: 'https://localhost:8443/nbi',
  lockAppMode: 'nbi',
  sessionTimeout: true,
};
