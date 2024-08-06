import * as Yup from "yup"

export function initialValues(){
    return{
        avatar:"",
        fileAvatar: null,
        fristname:"",
        lastname:"",
        email:"",
        role:"",
        password:"",
    }
}

export function validationSchema(){
    return Yup.object({
        fristname: Yup.string().required(true),
        lastname: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        role: Yup.string().required(true),
        password: Yup.string().required(true),
    })
}