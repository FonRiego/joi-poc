 
const express = require('express');
const router = express.Router();

const example1 = require('../responses/example1');
const example2 = require('../responses/example2');
const example3 = require('../responses/example3');
const example4 = require('../responses/example4');
const example5 = require('../responses/example5');
const example6 = require('../responses/example6');
const example7 = require('../responses/example7');
const example8 = require('../responses/example8');

router.get('/example1', (req, res) => res.json(example1));
router.get('/example2', (req, res) => res.json(example2));
router.get('/example3', (req, res) => res.json(example3));
router.get('/example4', (req, res) => res.json(example4));
router.get('/example5', (req, res) => res.json(example5));
router.get('/example6', (req, res) => res.json(example6));
router.get('/example7', (req, res) => res.json(example7));
router.get('/example8', (req, res) => res.json(example8));

module.exports = router;