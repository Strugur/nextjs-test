import express,{Request,Response,NextFunction} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import range from './range';
import userApi from './user/userApi';
import productApi from './product/productApi';
import categoryApi from './category/categoryApi';
import path from 'path';

const app = express();

const corsOptions = {
    exposedHeaders:'Content-Range'
};
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Headers", "*");
//     // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, , Accept");
    
//     // res.header("Access-Control-Request-Headers", "*");
//     next();
//   });
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(range);
app.use(function (req:Request, res:Response ,next:NextFunction) {
    res.setHeader('Content-Range','products 0-10/10');
    next();
});

// app.use(express.static('./build'));
// app.get('/admin',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'build','index.html'));
// });
app.get('/',(req,res)=>{
    console.log('some request');
    
    // res.send({s:'hello'});
});

app.use('/user',userApi);
app.use('/product',productApi);
app.use('/category',categoryApi);

app.listen(5000,()=>{console.log('Server running')});