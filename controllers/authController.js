const {generateToken, verifyToken} = require ('../utils/jwtHelpers');

const hardcoded = {
  employeeId: "admin",
  password: "password123"
};

const login = (req, res) => {
  try{
    const {employeeId, password} = req.body;

    if(!employeeId || !password){
      return res.status(400).json({message: "EmployeeId and Password requried."});
    }

    if(employeeId !== hardcoded.employeeId || password !== hardcoded.password){
      return res.status(401).json({message: "Invalid credentials"});
    }
    const token = generateToken({employeeId});

    return res.status(200).json({token});
  } catch (error){
    console.error(error);
    return res.status(500).json({message:"Server error."});
  }
};

const dashboard = (req, res) => {
  try{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
      return res.status(401).json({message: "Unauthorized"});
    }
    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);
    return res.status(200).json({message: "Welcome to your dashboard!"});
  } catch (error){
    console.error(error);
    return res.status(401).json({error: "Unauthorized"});
  }
};

module.exports = {login, dashboard};