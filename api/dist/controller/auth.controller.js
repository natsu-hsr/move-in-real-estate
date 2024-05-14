import bcrypt from 'bcrypt';
export const register = (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = bcrypt.hash(password, 10);
    res.end('register post');
};
export const login = (req, res) => {
    const body = req.body;
    const bp = JSON.stringify(body);
    res.end(`login response= ${body ? bp : 'null'}`);
};
export const logout = (req, res) => {
    res.end('logout response');
};
//# sourceMappingURL=auth.controller.js.map