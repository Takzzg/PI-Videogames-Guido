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
                validate: {
                    len: 3,
                    isString(value) {
                        if (typeof value !== "string")
                            throw new Error("Name must be a string")
                    }
                }
            },
            desc: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    isString(value) {
                        if (typeof value !== "string")
                            throw new Error("Description must be a string")
                    },
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
                validate: {
                    min: 0,
                    max: 5,
                    isNum(value) {
                        if (isNaN(value) || typeof value !== "number")
                            throw new Error("Rating must be a number")
                    }
                },
                allowNull: false
            },
            platforms: {
                type: DataTypes.ARRAY(DataTypes.JSONB),
                allowNull: false,
                validate: {
                    len: 1,
                    isArr(value) {
                        if (!Array.isArray(value))
                            throw new Error("Platforms must be an array")
                    }
                }
            }
        },
        { timestamps: false }
    )
}
