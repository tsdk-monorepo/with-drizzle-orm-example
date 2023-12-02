import { IncomingMessage, ServerResponse } from "http";
import httpProxy from "http-proxy";

const API_URL = process.env.API_URL || "";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function api(
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) {
  return new Promise((resolve, reject) => {
    proxy.web(
      req,
      res,
      {
        target: API_URL,
        changeOrigin: true,
      },
      (err) => {
        if (err) {
          return reject(err);
        } else {
          resolve(1);
        }
      }
    );
  });
}
