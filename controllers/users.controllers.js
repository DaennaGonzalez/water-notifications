import db from '../models/index'

export default {
  getAll: async (request, response, next) => {
    const users = await db.User.findAll();
    console.log("All users:", JSON.stringify(users, null, 2));
    response.status(200).json(users);
  },

  /*getById: async (request, response, next) => {
    try{
      const {id} = request.params
      const user = await User.findByPk(id)
      response.status(200).json(employer)  
    }catch(err){
      response.status(500).json({message: err.message})
    }
  },

  create: async (request, response, next) => {
    try{
      const {name, lastname, profile_id} = request.body
      const new_employeer = await Employeer.create({
        name,
        lastname,
        profile_id
      })
      response.status(201).json(new_employeer);
    }catch(err){
      response.status(500).json({message: err.message})
    }
  },

  update: async (request, response, next) => {
    try{
      const {id} = request.params
      const {profile_id} = request.body
      const employer = await Employeer.update({profile_id},{where:  {id}})
      response.status(204).json(employer)
    }catch(err){
      response.status(500).json({message: err.message})
    }
  },

  delete: async (request, response, next) => {
  }*/
}
