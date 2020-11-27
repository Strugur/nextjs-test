import express,{Request,Response,NextFunction} from 'express';

const router  = express.Router();

router.post('/login',(req:Request,res:Response) => {
    console.log(req.body);
   const {username,password} = req.body;
   if(username === 'admin' && password === '123'){
        res.status(200).send({});
   }else{
     res.status(401).send('Unauthorized');
   }
   
});


export default router;