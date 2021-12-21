module.exports = {
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        source: '/with-locale', // automatically handles all locales
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },
    ]
  }
}
