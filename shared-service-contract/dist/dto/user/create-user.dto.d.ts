import { Gender } from "../../enum";
export declare class CreateUserDto {
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    gender: Gender;
    bithdate: string;
}
