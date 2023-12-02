import http from "http";
import express, { Request } from "express";
import { expressAdapterFactory } from "tsdk-server-adapters/lib/express-adapter";
import { checkMethodHasBody, ProtocolTypes } from "@/src/shared/tsdk-helper";
import { RequestInfo, routeBus } from "./gen-route";
import { setupHelloAPI } from "./project.api";

const port = 3045;

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.end("hi, from express.");
});
app.use(
  "/api/:type",
  expressAdapterFactory<RequestInfo>({
    routeBus,
    async getReqInfo(req: Request) {
      return {
        ip: req.ip as string,
        lang: "zh-CN",
        type: req.params.type,
        token: req.headers.authorization,
      };
    },
    getType(reqInfo) {
      return reqInfo.type;
    },
    async getData(req) {
      return checkMethodHasBody(req.method) ? req.body : req.query;
    },
  })
);

setupHelloAPI();

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
