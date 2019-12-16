const bcrypt = require('bcryptjs');
const Users = require('../users/users-model');



module.exports = (req, res, next) => {
  const token = req.headers.authorization;
// see if there is a token and it is verified.
if(token){
jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) =>{
  if(err) {
res.status(401).json({message:'not verified'});
  }else{
    //vaildtoken
    req.decodedToken = decodedtoken;
    next();
   }
})
}else{
  res.status(401).json({ you: 'shall not pass!' });
};
}