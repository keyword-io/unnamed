const CracoAntDesignPlugin = require("craco-antd");
const CracoLinariaPlugin = require("craco-linaria");
const CracoEnvPlugin = require("craco-plugin-env");
const dotenv = require('dotenv');

dotenv.config();
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  plugins: [
    { plugin: CracoEnvPlugin },
    { plugin: CracoAntDesignPlugin },
    {
      plugin: CracoLinariaPlugin,
      options: {
        displayName: isDev,
        preprocessor: "none",
        source: isDev
      }
    },
  ],
  devServer: {
    open: false,
    proxy: {
      "/api": {
        target: `http://${process.env.APOLLO_SERVER_HOST}/`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        },
        onError: err => {
          console.log("Suppressing WDS proxy upgrade error:", err);
        },
        onProxyReqWs: (proxyReq, req, socket, options, head) => {
          socket.on("error", function(err) {
            console.warn("Socket error using onProxyReqWs event", err);
          });
        },
        secure: false
      }
    }
  }
};
