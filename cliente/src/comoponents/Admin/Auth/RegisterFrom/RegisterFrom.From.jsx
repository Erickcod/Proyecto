import * as Yup from "yup"

export function initialValues(){
    return{
        email:"",
        password:"",
        repeatPassword:"",
        conditionsAccepted: false,
    }
}

export function validationSchem(){
    return Yup.object({
        fristname: Yup.string().required("Campo obligatorio"),
        lastname: Yup.string().required("Campo obligatorio"),
        email: Yup.string().email("El email no es valido").required("Campo obligatorio"),
        password: Yup.string().required("Campo obligatorio"),
        repeatPassword: Yup.string().required("Campo obligatorio").oneOf([Yup.ref("password")],"La contraseña deben ser iguales"),
        conditionsAccepted: Yup.bool().isTrue(true),
    })
    }