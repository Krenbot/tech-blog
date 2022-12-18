const router = require("express").Router();
const { Blog } = require("../../models")

//CREATE (.post /)
router.post('/', async (req, res) => {
    try {


    } catch (err) {
        res.status(400).json(err)
    }
})

//UPDATE (.put /:id)
router.put('/:id', async (req, res) => {
    try {


    } catch (err) {
        res.status(400).json(err)
    }
})

//DELETE (.delete /:id)
router.delete('/:id', async (req, res) => {
    try {


    } catch (err) {
        res.status(400).json(err)
    }
})


module.exports = router;