import React, {useCallback} from 'react'
import { Form,Image } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { useDropzone } from 'react-dropzone'
import { image } from '../../../../assets'
import { initialValues,validationSchema } from './UserFrom.From'
import "./UserFrom.scss"

export function UserFrom(props) {
    const {close, onReload, user} = props

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) =>{
            try {
                console.log(formValue);
            } catch (error) {
                console.log(error);
            }
        }
    })

    const onDrop = useCallback((acceptedFiles)=>{
        console.log(acceptedFiles);
    })

    const { getRootProps,getInputProps} = useDropzone({
        accept: "image/jpge, image/jpg, image/png",
        onDrop,
    })


    const getAvatar = () =>{
        return image.noAvatar
    }

  return (
   <Form className='user-form' onSubmit={formik.handleSubmit}>
    <div className='user-form_avatar' {... getRootProps()}>
        <input {... getInputProps()} />
        <Image avatar size="small" src={getAvatar()} />
    </div>

    <Form.Group  widths="equal">
        <Form.Input name="fristname" placeholder="Nombre" onChange={formik.handleChange} value={formik.values.fristname} error={formik.errors.fristname} />
        <Form.Input name="lastname" placeholder="Apellidos" onChange={formik.handleChange} value={formik.values.lastname} error={formik.errors.lastname} />
    </Form.Group>
    <Form.Group  widths="equal">
        <Form.Input name="email" placeholder="Correo" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email}/>
        <Form.Dropdown placeholder="Selecciona un rol" options={roleOptions} selection onChange={(_, data)=> formik.setFieldValue("role",data.value)} value={formik.values.role} error={formik.errors.role} />
    </Form.Group>
    <Form.Input type='password' name="password" placeholder="Contraseña" onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password} />
    <Form.Button type='submit' primary fluid loading={formik.isSubmitting}>
        {user? "Actualizar Usuario":"Crear Ususario"}
    </Form.Button>
   </Form>
  )
}

const roleOptions=[
    {
        key:"user",
        text:"Usuario",
        value:"user"
    },
    {
        key:"admin",
        text:"Administrador",
        value:"admin"
    },
]