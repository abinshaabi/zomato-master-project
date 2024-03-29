import mongoose from 'mongoose';
;import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String},
    address: [{ detail: {type: String}, for: { type: String} }],
    phoneNumber: [{type: Number}]

},
{
    timestamps: true,
}

);

UserSchema.methods.generateJWTtoken = function () {
    return jwt.sign({ user: this._id.toString()}, "Zomato");
}

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    //check whether email or phoneNumber exist
    const checkUserEmail = await UserModel.findOne({ email });
    const checkUserPhone = await UserModel.findOne({ phoneNumber });
    
    if (checkUserEmail || checkUserPhone){
        throw new Error("User already exist...");
    }

    return false;
}

UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    //check whether email exist
    const user = await UserModel.findOne({ email });

    if(!user) throw new Error("User does not exist !!!");

    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if(!doesPasswordMatch) throw new Error("invalid password")
    
    return user;

}

UserSchema.pre("save", function (next) {
    const user = this;

    if(!user.isModified("password")) return next();

    //generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error);

        //hash the password
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error) return next(error);
            //assigning hashed password
            user.password = hash;
            return next(); 
        })
    })
})


export const UserModel = mongoose.model("Users", UserSchema);

