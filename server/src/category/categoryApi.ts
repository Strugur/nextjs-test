import express,{Request,Response,NextFunction} from 'express';
const router  = express.Router();

router.get('/list',(req:Request,res:Response) => {
    res.send([
        {id:1,name:'cat1'},
        {id:2,name:'cat2'}
    ]);
});

// router.get('/list',(req:Request,res:Response) => {
//     res.send([
//         {
//             id:1,
//             title:'cat1',
//             backlinks: [
//                 {
//                     uuid: '34fdf393-f449-4b04-a423-38ad02ae159e',
//                     date: '2012-08-10T00:00:00.000Z',
//                     url: 'http://example.com/foo/bar.html',
//                 },
//                 {
//                     uuid: 'd907743a-253d-4ec1-8329-404d4c5e6cf1',
//                     date: '2012-08-14T00:00:00.000Z',
//                     url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
//                 }
//            ]
//         },

//         // {id:2,title:'cat2'}
//     ]);
// });


export default router;