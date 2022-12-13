const User = require('./User');
const Blog = require('./Blog')
const Comment = require('./Comment')

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

Blog.hasMany(Comment, {

})

User.hasMany(Comment, {

})

Comment.belongsTo(User, {

})

Comment.belongsTo(Blog, {

})

module.exports = { User, Blog, Comment };