const express=require('express');
const router=express.Router();
const newsController=require('../controllers/newsController')

router.get('/', newsController.list);
router.post('/add', newsController.add);
router.post('/update', newsController.update);
router.get('/delete/:id_news', newsController.delete);
router.get('/redir/:id_news', newsController.redir);

module.exports=router;