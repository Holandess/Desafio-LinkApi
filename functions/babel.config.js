module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@model': './src/model',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@services': './src/services',
        '@interfaces': './src/interfaces'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
