const { Model, DataTypes } = require('sequelize')

class Produto extends Model {
    static init(sequelize){
    super.init({
        nome: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        tipo: DataTypes.STRING
    },{sequelize,tablename:'produtos',})
    }
}

module.exports = Produto;