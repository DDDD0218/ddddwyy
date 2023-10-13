const path = require("path");
module.exports = {
  webpack: {
    entry: "./index.jsx",
    configure: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "/src"),
        },
      },
    },
  },
};
