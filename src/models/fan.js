import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla Fan
const Fan = connection.define("fan", {
    fan_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    img: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING(250),
    },
})

export default Fan;