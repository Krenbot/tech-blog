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
  console.log('Hello')

  console.log(req.session.user_id)
  try {
    let blogs = await Blog.findAll({
      include: [User]
    },
      {
        where:
          { userId: req.session.user_id }
      })

    let sequlizeBlogs = blogs.map((blog) => blog.get({ plain: true }));

    console.log(sequlizeBlogs);

    res.render("dashboard", { blogs: sequlizeBlogs, logged_in: req.session.logged_in, username: req.session.username });
  } catch (err) {
    console.log(err)
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