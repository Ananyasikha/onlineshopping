import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userschema.js";

const sequelize = new Sequelize('zepto', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres' 
});

let UserModel=null;
const connection=async()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  UserModel= await createUserModel(sequelize)
  await sequelize.sync();
  console.log("Database Synced")
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

}
export{
connection,
UserModel
}

