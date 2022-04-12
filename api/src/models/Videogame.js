const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("videogame", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        released: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        platforms: {
            type: DataTypes.ARRAY(DataTypes.UUID)
        }
    })
}
