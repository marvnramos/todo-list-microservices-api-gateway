import { Schema, model } from "mongoose";

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

const userModel = model("users", userSchema);
export default userModel;