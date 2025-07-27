import db from '../../../config/db';

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';

import { logger } from '../helpers/logger';

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];

        if (!user || !(await bcrypt.compare(password, user.pass))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Log the login event
        logger.info(`User ${user.id} logged in successfully`);

        return res.json({ token });
    } catch (error) {
        // Log the error
        logger.error(`Login error: ${error.message}`);

        return res.status(500).json({ error: 'Internal server error' });
    }
}

const whoami = async (req, res) => {
    const userId = req.user.id;

    try {
        const [rows] = await db.query('SELECT id, email FROM users WHERE id = ?', [userId]);
        const user = rows[0];

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.json(user);
    } catch (error) {
        // Log the error
        logger.error(`Whoami error: ${error.message}`);

        return res.status(500).json({ error: 'Internal server error' });
    }
}

export const auth = {
    login,
    whoami
};
