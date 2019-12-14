const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');

router.post('/register', (req, res) => {
  // implement registration
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
  // gathers data from users table and finds col. username
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      // if both of these are true, AKA user and password are correct... 
      res.status(200).json({ 
        message:`Youre in the Matrix {user.username}!`,
        // Let them in and give YITM mess. 
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

module.exports = router;
