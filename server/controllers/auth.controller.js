"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPasswordRoute = exports.checkAuth = exports.logout = exports.login = exports.register = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const utils_1 = require("../lib/utils");
const crypto_1 = __importDefault(require("crypto"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, fullName } = req.body;
        if (!email || !password || !fullName) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        if (password.length < 6) {
            res
                .status(400)
                .json({ message: "Password must be at least 6 characters" });
            return;
        }
        const user = yield user_model_1.default.findOne({ email });
        if (user) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        const salt = yield bcryptjs_1.default.genSalt(10);
        const hashedPass = yield bcryptjs_1.default.hash(password, salt);
        const newUser = new user_model_1.default({
            fullName,
            email,
            password: hashedPass,
        });
        if (newUser) {
            (0, utils_1.generateToken)(newUser._id, res);
            yield newUser.save();
            const userObj = newUser.toObject();
            const { password: hidePass } = userObj, userWithoutPassword = __rest(userObj, ["password"]);
            res.status(201).send(userWithoutPassword);
        }
    }
    catch (error) {
        res.status(500).send("Server Error");
        console.log(error);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "You must fill all of the fields" });
            return;
        }
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const comparePass = yield bcryptjs_1.default.compare(password, user.password);
        if (!comparePass) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const userObj = user.toObject();
        const { password: hidePass } = userObj, userWithoutPassword = __rest(userObj, ["password"]);
        (0, utils_1.generateToken)(user._id, res);
        res.status(200).send(userWithoutPassword);
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" });
        console.log("Error in login route: ", error);
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch (error) {
        console.log("Error in logout: ", error);
        res.status(500).json({ message: "Server Error" });
    }
});
exports.logout = logout;
const checkAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send(req.user);
    }
    catch (error) {
        console.log("Error in checkAuth: ", error);
        res.status(500).json({ message: "Server Error" });
    }
});
exports.checkAuth = checkAuth;
const forgotPasswordRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(400).json({ message: "Email is required" });
            return;
        }
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            res.status(400).json({ message: "Invalid email" });
            return;
        }
        const transporter = nodemailer_1.default.createTransport({
            service: "gmail",
            auth: { user: "danmil511@gmail.com", pass: "jzsz imjc oeba gfin" },
        });
        const resetToken = crypto_1.default.randomBytes(32).toString("hex");
        user.resetToken = resetToken;
        user.resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour;
        yield user.save();
        const resetLink = `http://localhost:5173/reset-password/${resetToken}`;
        const mailOptions = {
            from: "danmil511@gmail.com",
            to: user.email,
            subject: "Voya - reset your password",
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password. The link expires in 1 hour.</p>`,
        };
        yield transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Password reset email sent" });
        res.status(200).json({ user });
    }
    catch (error) { }
});
exports.forgotPasswordRoute = forgotPasswordRoute;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { resetToken } = req.params;
    const { password } = req.body;
    const user = yield user_model_1.default.findOne({ resetToken });
    if (!user) {
        res.status(400).json({ message: "Expired session" });
        return;
    }
    const salt = yield bcryptjs_1.default.genSalt(10);
    user.password = yield bcryptjs_1.default.hash(password, salt);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    (0, utils_1.generateToken)(user._id, res);
    yield user.save();
    res.status(200).json(user);
});
exports.resetPassword = resetPassword;
