const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "genre",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { len: 3 }
            },
            image: DataTypes.STRING
        },
        { timestamps: false }
    )
}
