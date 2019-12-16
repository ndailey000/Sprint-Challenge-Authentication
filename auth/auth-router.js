const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');

router.post('/register', (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
// creates a hashed password 
  Users.add(user)
  .then(saved => {
    // add jwt here
    const token = generateToken(saved) 
    res.status(201).json({
      user: saved,
      token});
  });
})
// above sends back the token with the saved user.


router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
  // gathers data from users table and finds col. username
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      // add jwt here
      const token = generateToken(user);
      // if both of these are true, AKA user and password are correct... 
      res.status(200).json({ 
        message:`Youre in the Matrix {user.username}!`,
        // Let them in and give YITM mess. 
        token
      });
    }else{
      // Youre not invited to sit with us
      res.status(401).json({ message: 'Invalid Creds' });
    }
  })
  // its not me its you
  .catch(err => {
    res.status(500).json(err);
  })
});


function generateToken() {
   const payload = {
     sub: user.id,
     username: user.name,
// there isnt any roles in the db, but they would go here
   };
   const options ={
     expiresIn: '1d'
   };
   return jwt.sign(payload, process.env.JWT_SECRET, options);
  }

module.exports = router;
