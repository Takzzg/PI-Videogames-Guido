const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
        "videogame",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: { len: 3 }
            },
            desc: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    minWords(value) {
                        if (value.split(" ").length < 10)
                            throw new Error(
                                "Description must have at least 10 words"
                            )
                    }
                }
            },
            released: {
                type: DataTypes.DATEONLY,
                defaultValue: DataTypes.NOW
            },
            rating: {
                type: DataTypes.DECIMAL,
                defaultValue: 2.5,
                validate: { min: 0, max: 5 }
            },
            platforms: {
                type: DataTypes.ARRAY(DataTypes.JSONB),
                allowNull: false,
                validate: { len: 1 }
            }
        },
        { timestamps: false }
    )
}
