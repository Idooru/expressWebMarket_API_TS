import express, { Express, Request, Response, NextFunction } from "express";

const app: Express = express();

app.set("port", process.env.PORT || 1765);

app.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.send("Hello TS-Express");
});

app.listen(app.get("port"), () => {
  console.log(`server is running at http://localhost:${app.get("port")}`);
});
