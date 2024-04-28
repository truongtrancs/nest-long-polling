export default () => ({
  timeout: parseInt(process.env.TIMEOUT, 10) || 10000,
});
