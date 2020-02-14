const path = require('path');
const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');

const fileDb = require('../fileDb');
const config = require('../config');

const router = express.Router();

router.get('/', async (req, res) => {
   const goods = await fileDb.getItems();
   res.send(goods);
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, config.uploadPath),
    filename: (req, file, cb) => cb(null, nanoid() + path.extname(file.originalname))
});

const upload = multer({storage});


router.post('/', upload.single('image'), async (req, res) =>{
    const goods = req.body;
    if (req.body.author === ''){
        goods.author = 'Anonymous'
    }
    if(req.file) {
        goods.image = req.file.filename;
    }

    await fileDb.addItem(goods);

    res.send(goods.id);
});

module.exports = router;