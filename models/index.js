// import all models here
const Users = require('./Users');
const Books = require('./BooksCollection');
const Posts = require('./Posts');

// create any associations here
Books.hasMany(Posts, {
    foreignKey: 'books_id',
    onDelete: 'CASCADE'
});

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Books, {
    foreignKey: 'user_id'
});

// export all models here
module.exports = { Users, Books, Posts };
