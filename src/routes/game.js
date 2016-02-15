/**
 * Created by scampbell on 2/14/16.
 */
import express from 'express';

let router = express.router();

router.get("/", (req, res, next) => {
    res.render('game', { title: 'Game!' });
});

module.exports = router;