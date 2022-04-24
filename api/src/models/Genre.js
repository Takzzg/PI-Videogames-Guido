const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "genre",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            image: {
                type: DataTypes.STRING
            },
            count: {
                type: DataTypes.INTEGER
            }
        },
        { timestamps: false }
    )
}
