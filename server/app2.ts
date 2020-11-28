import express, { Request, Response } from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const appNext = next({ dev });
const handle = appNext.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  try {
    await appNext.prepare();
    const app = express();

    app.get('/admin',(req: Request, res: Response)=>{
        res.send('hi');
    });

    // app.get('/fronend',(req: Request, res: Response)=>{
    //     return handle(req, res);
    // });
    app.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    app.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();