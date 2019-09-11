const mongoose = require('mongoose');

const Login = mongoose.model('Login');

module.exports = {
  //Cria user no bd
    async create(req,res) {
      const user = await Login.create(req.body);
      return res.json(user);
    },
   
    //Lista os users no bd
    async show(req, res) {
      const login = await Login.find();
      return res.json(login)
   },

    async auth(req, res) {
      const user = await Login.findById(req.params.id);
      
      let login = user.login;
      let senha = user.senha;

      if(login == req.params.login && senha == req.params.senha){
        console.log("Iguais")
        return res.json({"Msg":"Deu Certo"}) 
      }
      else{ 
        console.log("Deu Ruim")
        return res.json({"Msg":"Deu ruim"})
      }
      
   },

   async Tokenfy(item){
     

   }
};