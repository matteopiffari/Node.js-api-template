import jwt from 'jsonwebtoken';

const verifyJWT = (req, res, next) => {
    const token = req.cookies['Bearer']

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate' });
        }
        req.user = decoded;
        next();
    });
}

export { verifyJWT };
