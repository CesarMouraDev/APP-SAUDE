const Sequelize = requeire("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storege: '.db/app.db'
});

module.exports = sequelize