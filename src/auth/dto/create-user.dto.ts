import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserhDto {

    @IsEmail()
    email:string;

    @IsString()
    name:string;

    @MinLength(6)
    password: string;

    

}
