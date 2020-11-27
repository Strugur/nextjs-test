import express,{Request,Response,NextFunction} from 'express';

const router  = express.Router();

let products = [
   {id:1,name:'product1'},
   {id:2,name:'product2'}
];


router.get('/list',async(req:Request,res:Response) => {
   console.log('from list request');
   res.send(products);
   
});
router.get('/:id',async(req:Request,res:Response) => {
   console.log(req.params.id);
   console.log('getOne by id');
   res.send({id:2,name:'product2'});
});

router.post('/update/:id',async(req:Request,res:Response) => {
   console.log('update',req.params.id);
   
   res.send({id:2,name:'product2'});
});

router.post('/create',async(req:Request,res:Response) => {
   console.log('create');
   console.log('req.body',req.body);
   const productId = products.length + 1 ;
   products.push({
      id:productId,
      ...req.body
   })
   
   res.send({id:productId,...req.body});
});


export default router;