import React , {useState} from 'react'
import {Form} from "semantic-ui-react"
import {useFormik} from "formik"
import {Auth} from "../../../../api" 
import { initialValues, validationSchem } from './RegisterFrom.From'
import "./RegisterFrom.scss"



const authController = new Auth()

export function RegisterFrom(props) {

  const {openLogin} = props
  const [error,setError]=useState("")

  const formik = useFormik({
    
    initialValues: initialValues(),
    validationSchema: validationSchem(),
    validateOnChange: false,


    onSubmit: async (formValue) =>{
      try{
        setError("")
        console.log(formValue)
        await authController.register(formValue)
        openLogin()
      }catch (error){
        setError("Error en el servidor")
      }
    }
  })
  return (
   <Form className='register-form'onSubmit={formik.handleSubmit}>
   
    <Form.Input name="fristname" type ="text" placeholder = "Nombres" onChange={formik.handleChange} value={formik.values.fristname} error = {formik.errors.fristname}/>
    
    <Form.Input name="lastname" type ="text" placeholder = "Apellidos" onChange={formik.handleChange} value={formik.values.lastname} error = {formik.errors.lastname}/>
    
    <Form.Input name="email" placeholder ="Correo Electronico" onChange={formik.handleChange} value={formik.values.email} error = {formik.errors.email}/>
    
    <Form.Input name="password" type ="password" placehorlder="Contraseña"  onChange={formik.handleChange} value={formik.values.password} error = {formik.errors.password}/>
    
    <Form.Input name="repeatPassword" type ="password" placehorlder="Repetir Contraseña" onChange={formik.handleChange} value={formik.values.repeatPassword} error = {formik.errors.repeatPassword}/>
    
    <Form.Checkbox name="conditionsAccepted" label="He leido y acepto las politicas de privacidad." onChange={( _, data)=> formik.setFieldValue
      ("conditionsAccepted", data.checked)} checked={formik.values.conditionsAccepted} error ={formik.values.conditionsAccepted}/>
    
    <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>Crear Cuenta</Form.Button>


    <p className='register-form_error'>{error}</p>

   </Form>
  )
}
