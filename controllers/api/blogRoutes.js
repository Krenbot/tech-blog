const router = require("express").Router();
const { Blog } = require("../../models")

//CREATE
router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);

    } catch (err) {
        res.status(400).json(err)
    }
})

//UPDATE
router.put('/:id', async (req, res) => {

    console.log(req.body, req.params.id, req.session.user_id)

    try {
        const updateBlog = await Blog.update(req.body, {
            where: {
                id: req.params.id,
                userId: req.session.user_id,
            }
        })

        if (updateBlog > 0) {
            res.status(200).json(updateBlog)
        } else {
            res.status(404).send()
        }

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;