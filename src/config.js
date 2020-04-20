if (process.env.NODE_ENV === "production") {
  module.exports = {
    url: process.env.PROD_API_URL,
  };
} else {
  module.exports = {
    url: process.env.DEV_API_URL,
  };
}
