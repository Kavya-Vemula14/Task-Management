const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  //! Get the token from the header
  const headerObj = req.headers;
  const token = headerObj?.authorization?.split(" ")[1];
  console.log(token);
  //! verify token
  const verifyToken = jwt.verify(token, "kavya", (err, decoded) => {
    console.log(decoded);
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
  if (verifyToken) {
    //save the user req obj
    req.user = verifyToken.id;
    next();
  } else {
    const err = new Error("Token expired, Login again");
    next(err);
  }
};

module.exports = isAuthenticated;
