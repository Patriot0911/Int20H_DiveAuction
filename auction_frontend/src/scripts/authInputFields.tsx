import { AuthActionsTypes, IAuthUpInputFieldSettings } from "@/types";
import { FaUserCircle } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const iconProps = {
    size: 55,
    color: 'rgb(255, 220, 255)'
};

const authInputFields: IAuthUpInputFieldSettings[] = [
    {
        name:           'userName',
        placeholder:    'Ім\'я Користувача',
        required:       true,
        minLength:      3,
        formtype:       AuthActionsTypes.SignUp,
        maxLength:      50,
        iconComponent:
        <FaUserCircle
            {...iconProps}
        />
    },
    {
        name:           'email',
        placeholder:    'Пошта',
        type:           'email',
        required:       true,
        formtype:       AuthActionsTypes.SignIn,
        minLength:      3,
        maxLength:      255,
        iconComponent:
        <IoMailUnread
            {...iconProps}
        />
    },
    {
        name:           'password',
        placeholder:    'Пароль',
        type:           'password',
        required:       true,
        formtype:       AuthActionsTypes.SignIn,
        minLength:      8,
        maxLength:      32,
        iconComponent:
        <RiLockPasswordFill
            {...iconProps}
        />
    }
];

export default authInputFields;
