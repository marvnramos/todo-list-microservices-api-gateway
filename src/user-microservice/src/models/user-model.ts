import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
    name: string;
    surname: string;
    email: string;
    password: string;
};

const userSchema = new Schema( 
    {
        name: {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true, versionKey: false }
);

const UserModel = model<IUser>("User", userSchema);
export default UserModel;