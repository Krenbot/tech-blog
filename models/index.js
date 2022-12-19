const User = require('./User');
const Blog = require('./Blog')
const Comment = require('./Comment')

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
})

module.exports = { User, Blog, Comment };