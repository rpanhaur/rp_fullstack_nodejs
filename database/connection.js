// Database connection logic

const { Sequelize, DataTypes } = require("sequelize")

const bookModel=require('./model/book.model')
const userModel=require('./model/user.model')




const sequelize = new Sequelize("postgresql://postgres.ntgwsrrkeepwsrejopfb:rabindrapanhaur@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true")

sequelize.authenticate().then(() => {
  console.log("connected");
}).catch((err) => {
  console.log("error" +err);
})

const db={}
db.sequelize=sequelize
db.sequelize=sequelize

db.books=bookModel(sequelize,DataTypes);
db.users=userModel(sequelize,DataTypes)

sequelize.sync({alter:false}).then(()=>{
  console.log('migrate successfully');
})


module.exports=db


// // hami yaha database connection ko code/logic lekxam
// const {Sequelize,DataTypes} =  require("sequelize")

// // const sequelize = require("sequelize")
// // const Sequelize = sequelize.Sequelize
// // const DataTypes = sequelize.DataTypes


// const sequelize = new Sequelize("postgresql://postgres.cnyaqklytzrovjdkjexp:hahahehehuhu1234@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")


// sequelize.authenticate()
// .then(()=>{
//     console.log("Authenticated vayo, connected vayo !!")
// })
// .catch((err)=>{
//     console.log("Error aayo" + err)
// })

// const db  = {}
// db.Sequelize = Sequelize 
// db.sequelize = sequelize

// module.exports = db





