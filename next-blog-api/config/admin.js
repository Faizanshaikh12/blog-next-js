module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1f96f67d6e8d6e7d271ac95f8240342b'),
  },
});
