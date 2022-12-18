const router = require("express").Router();
const { Blog } = require("../../models")

//CREATE
router.post('/', async (req, res) => {
    try {
        //TODO:
    } catch (err) {
        res.status(400).json(err)
    }
})

//UPDATE
router.put('/:id', async (req, res) => {
    try {
        //TODO:
    } catch (err) {
        res.status(400).json(err)
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        //TODO:
    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router;