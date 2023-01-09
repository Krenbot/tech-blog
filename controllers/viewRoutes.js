const router = require('express').Router();
const { User, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    let blog = await Blog.findAll()

    blog = blog.map(blog => blog.get({ plain: true }));

    res.render('homepage', {
      blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//Get all Blogs w/ auth
router.get("/dashboard", withAuth, async (req, res) => {

  try {
    let blogs = await Blog.findAll({
      include: [User],
      where:
        { userId: req.session.user_id }
    })

    let sequlizeBlogs = blogs.map((blog) => {
      return {
        ...blog.get({ plain: true }),
        belongsToUser: req.session.user_id === blog.userId
      }
    });

    res.render("dashboard", { blogs: sequlizeBlogs, logged_in: req.session.logged_in, username: req.session.username });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/blog/:id', async (req, res) => {
  try {

    console.log('Hello from console log')

    const log = await Blog.findByPk(req.params.id)

    console.log(log.dataValues)

    res.render('editBlog', {
      data: log.dataValues
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO:
//.get (createBlog) WITH AUTH
//.put (editBlog) WITH AUTH

module.exports = router;

//TODO:
//Use withAuth in blog and comment routes
//