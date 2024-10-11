module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        pname: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.TEXT,
        content: DataTypes.TEXT,
        price: DataTypes.STRING,     
        num: DataTypes.STRING,
    })
    return Blog
}