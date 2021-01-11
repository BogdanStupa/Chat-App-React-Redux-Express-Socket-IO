import * as yup from "yup";
import constants from "modules/constants";



const {
    MIN_LENGHT_NICKNAME_NUMBER,
    MIN_LENGHT_PASSWORD_NUMBER,
    NICKNAME_MIN_LENGHT,
    PASSWORD_MIN_LENGHT,
    MAX_LENGHT_NICKNAME_NUMBER,
    MAX_LENGHT_PASSWORD_NUMBER,
    NICKNAME_MAX_LENGHT,
    PASSWORD_MAX_LENGHT,
    PASSWORD_REQUIRED,
    NICKNAME_REQUIRED,
    NICKNAME_MATCHES,
    PASSWORD_MATCHES,
    PLEASE_CONFIRM_PASSWORD,
    PASSWORD_DOESNT_MATCH
} = constants.LABELS.AUTH;

const schemaSignUp = yup.object().shape({
    nickname: yup.string().
        required(NICKNAME_REQUIRED).
        min(MIN_LENGHT_NICKNAME_NUMBER, NICKNAME_MIN_LENGHT).
        max(MAX_LENGHT_NICKNAME_NUMBER, NICKNAME_MAX_LENGHT).
        matches(/^[A-Za-z0-9]+$/, NICKNAME_MATCHES),
    password: yup.string()
        .required(PASSWORD_REQUIRED)
        .min(MIN_LENGHT_PASSWORD_NUMBER, PASSWORD_MIN_LENGHT)
        .max(MAX_LENGHT_PASSWORD_NUMBER, PASSWORD_MAX_LENGHT)
        .matches(/^[A-Za-z0-9.*&^]+$/, PASSWORD_MATCHES),
    confirmPassword: yup.string()
        .required(PLEASE_CONFIRM_PASSWORD)
        .oneOf([yup.ref("password"),null], PASSWORD_DOESNT_MATCH)
});


const schemaSignIn = yup.object().shape({
    nickname: yup.string().
        required(NICKNAME_REQUIRED).
        min(MIN_LENGHT_NICKNAME_NUMBER, NICKNAME_MIN_LENGHT).
        max(MAX_LENGHT_NICKNAME_NUMBER, NICKNAME_MAX_LENGHT).
        matches(/^[A-Za-z0-9]+$/, NICKNAME_MATCHES),
    password: yup.string()
        .required(PASSWORD_REQUIRED)
        .min(MIN_LENGHT_PASSWORD_NUMBER, PASSWORD_MIN_LENGHT)
        .max(MAX_LENGHT_PASSWORD_NUMBER, PASSWORD_MAX_LENGHT)
        .matches(/^[A-Za-z0-9.*&^]+$/, PASSWORD_MATCHES)
});


export {
    schemaSignIn,
    schemaSignUp
};