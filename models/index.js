// import all models here
const User = require('./User');
const Books = require('./BooksCollection');
const Posts = require('./Posts');

// create any associations here
Books.hasMany(Posts, {
    foreignKey: 'books_id',
    onDelete: 'CASCADE'
});

User.hasMany(Books, {
    foreignKey: 'id'
});

// export all models here
module.exports = { User, Books, Posts };
