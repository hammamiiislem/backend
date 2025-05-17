const jwt = require('jsonwebtoken');
const { User } = require('../moduls/User');



exports.logged=  function (req, res, next) {
    const token = req.headers['authorization'];
    if (!token && !token.startsWith('Bearer')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const tokenWithoutBearer = token.split(' ')[1].trim();
    jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET, async(err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        console.log(decoded);
        if(!decoded){
            return res.status(401).json({ message: 'Unauthorized' });
        }
        try{
            // Find the user by ID
            const verifUser = await User.findById(decoded.id).select('email _id');
            if(!verifUser){
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.user=verifUser;
            next();
        }catch(err){
            return res.status(500).json({ message: err.message });
        }   
        
    });
    }

        


