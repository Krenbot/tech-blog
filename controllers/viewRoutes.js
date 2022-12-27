const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

//TODO: REMOVE WITHAUTH FOR HOMEPAGE
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
      include: [{ model: User }],
    });

    blogs = blogs.map((blog) => blog.get({ plain: true }));
    console.log(blogs);
    res.render("dashboard", { blogs, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

//TODO:
//.get (createBlog) WITH AUTH
//.put (editBlog) WITH AUTH
//.get (blog:/id)

module.exports = router;

//NOTES:
//Use withAuth in blog and comment routes
//