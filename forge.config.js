module.exports = {
  packagerConfig: {
    asar: true,
    name: 'MiladGeo',
    executableName: 'MiladGeo'
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'miladgeowindows',
        setupExe: 'MiladGeo-Setup.exe',
        setupIcon: undefined
      }
    }
  ]
};
