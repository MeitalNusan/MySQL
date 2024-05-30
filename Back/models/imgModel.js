import db from "../database/db.js";
import {DataTypes} from "sequelize"

const imgModel = db.define("images",{
   titulo:{type:DataTypes.STRING},
 })

export default imgModel