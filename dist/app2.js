"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const dev = process.env.NODE_ENV !== "production";
const appNext = next_1.default({ dev });
const handle = appNext.getRequestHandler();
const port = process.env.PORT || 3000;
(async () => {
    try {
        await appNext.prepare();
        const app = express_1.default();
        app.get('/admin', (req, res) => {
            res.send('hi');
        });
        // app.get('/fronend',(req: Request, res: Response)=>{
        //     return handle(req, res);
        // });
        app.all("*", (req, res) => {
            return handle(req, res);
        });
        app.listen(port, (err) => {
            if (err)
                throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
