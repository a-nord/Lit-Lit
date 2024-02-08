// import all models here
const User = require('./User');
const Books = require('./BooksCollection');
const Posts = require('./Posts');

// create any associations here
Books.hasMany(Posts, {
    foreignKey: 'text',
    onDelete: 'CASCADE'
});

User.hasMany(Books, {
    foreignKey: 'username'
});

// export all models here
module.exports = { User, Books, Posts };
