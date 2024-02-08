// import all models here
const Users = require('./Users');
const Books = require('./BooksCollection');
const Posts = require('./Posts');

// create any associations here
Books.hasMany(Posts, {
    foreignKey: 'books_id',
    onDelete: 'CASCADE'
});

Users.hasMany(Books, {
    foreignKey: 'id'
});

// export all models here
module.exports = { Users, Books, Posts };
