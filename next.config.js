module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pagea',
        permanent: true,
      },
    ]
  },
}