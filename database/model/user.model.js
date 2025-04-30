

const userModel=(sequelize,DataTypes)=>{

  const user=sequelize.define('user',{

    userName:{
      type:DataTypes.STRING,
      allowNull:false
    },
    userAdd:{
      type:DataTypes.STRING,
      allowNull:false
    },
    userPhone:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    userProfile:{
      type:DataTypes.STRING,
      allowNull:false
    }
  })
  return user
}
module.exports=userModel