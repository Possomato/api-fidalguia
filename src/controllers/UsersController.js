const AppError = require('../utils/AppError')

class UsersController{
  create(request, response){
    const { name, email, senha } = request.body

    if(!name){
      throw new AppError('nome é obrigatório')
    }

    response.json({ name, email, senha })
  }
}

module.exports = UsersController