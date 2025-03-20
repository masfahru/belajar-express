import sequelize from '../configs/sequelize'
import UserModel from './User'
import UserPrivilegeModel from './UserPrivilege'

async function syncDatabase() {
  UserPrivilegeModel.hasMany(UserModel, {
    foreignKey: 'privilegeId',
    as: 'users',
  })

  UserModel.belongsTo(UserPrivilegeModel, {
    foreignKey: 'privilegeId',
    as: 'privilege',
  })

  await sequelize.sync()
}

export {
  syncDatabase,
  UserModel,
  UserPrivilegeModel,
}
