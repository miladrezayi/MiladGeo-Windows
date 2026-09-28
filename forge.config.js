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
        name: 'miladgeowindows'
      }
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['win32']
    }
  ]
};
