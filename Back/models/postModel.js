import db from "../database/db.js";
import {DataTypes} from "sequelize"

const postModel = db.define("posts",{
    name:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
})

export default postModel