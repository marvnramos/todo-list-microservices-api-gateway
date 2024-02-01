import CryptoJS from "crypto-js";
import "dotenv/config";

const secretKey:string = process.env.SECRET_KEY!;

class Crypto {
    static encrypt = (password: string): string => {
        const hashedPassword = CryptoJS.HmacSHA256(password, secretKey).toString();
        return hashedPassword;
    }

    static compare = (inputPassword: string, storedPassword: string): boolean => {
        const hashedInputPassword = this.encrypt(inputPassword);
        return hashedInputPassword === storedPassword;
    }
}

export default Crypto;