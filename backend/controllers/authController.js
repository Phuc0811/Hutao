import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user registration
export const register = async(req,res) =>{
    try{

        //hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
    
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()
        res.status(200).json({success: true, message: "Tạo thành công"})
    }catch(err){
        res.status(500).json({success: false, message: "Tạo không thành công. Vui lòng tạo lại!"})

    }
};

//user login
export const login = async(req,res) =>{
const email = req.body.email

    try{
        const user = await User.findOne({email})

        //if user dosen't exist
    if(!user){
        return res.status(404).json({success: false, message:"Không tìm thấy người dùng này"})
    }
        //if user is exist then check the password or comare the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)
        //if password is incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({success:false, message:"Email hoặc password chưa chính xác!"});
        }
        
        const { password, role, ...reset } =user._doc;

        //create JWT token
        const token = jwt.sign(
                { id: user._id, role: user.role},
                process.env.JWT_SECRET_KEY,
                { expiresIn: "15d"}
        );

        //set token in the browser cookies and send the response to the client
        res.cookie("accessToken", token,{
            httpOnly: true,
            expires: token.expiresIn,
        })
        .status(200)
        .json({
            token, 
            data:{...reset},
            role,
        })
        }catch(err){
            res.status(500).json({success:false, message:"Đăng nhập không thành công"});
        }
};