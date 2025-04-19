import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla User
const User = connection.define("user", {
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    created_at:{
        type: DataTypes.DATE,
    },
    role: {
        type: DataTypes.ENUM("user", "admin"),
        allowNull: false,
        defaultValue: "user",
    },
})


export default User;