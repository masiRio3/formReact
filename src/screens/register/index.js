import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ContainerInput, ContainerForm, Title, Input, Container, } from "./styles";

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Este campo es obligatorio")
        .matches(/^([a-zA-Z]+)(\s[a-zA-Z]+)*$/, "Solo se admiten letras"),
    id: Yup.number().required("Este campo es obligatorio").typeError("Solo acepta numeros")
        .min(30000000, "El documento debe ser mayor a  30 millones")
        .max(60000000, "El documento debe ser menor a 60 millones"),
    phone: Yup.number().typeError("Solo acepta numeros"),
    email:
        Yup.string().email("Este correo electronico es invalido").required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio").min(8, "Debes tener al menos ocho caracteres")
        .matches(/(?=\w*[A-Z])/, "Debe tener al menos una mayuscula"),
    repeatPassword: Yup.string().required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
})




const Register = () => {

    const [visible, setVisible] = useState(false);

    return(
    <Container>
    <Formik
        initialValues={{ name: "", id: "", phone: "", email: "", password: "", repeatPassword: "" }}
        validationSchema={RegisterSchema}
        //validateOnBlur
        validateOnSubmit
        //validateOnChange

    >
        {({ handleBlur, handleChange, handleSubmit, values, errors, touched, }) => (

            <ContainerForm onSubmit={handleSubmit} >
                {/* //*/}
                
                    <Title> Formulario de Registro </Title>
                    <ContainerInput>
                        <Input
                            placeholder="Nombre Completo"
                            name='name'
                            onChange={handleChange("name")}
                            // onBlur={handleBlur("name")}
                            value={values.name}
                        />
                        {touched.name && errors.name && <b><p class="text-danger">{errors.name}</p></b>}
                    </ContainerInput>

                    <ContainerInput>
                        <Input
                            placeholder="Numero de Documento"
                            name='id'
                            onChange={handleChange("id")}
                            // onBlur={handleBlur("id")}
                            value={values.id}
                        />
                        {touched.id && errors.id && <b><p class="text-danger">{errors.id}</p></b>}
                    </ContainerInput>

                    <ContainerInput>
                        <Input
                            placeholder="Numero de Telefono"
                            name='phone'
                            onChange={handleChange("phone")}
                            // onBlur={handleBlur("phone")}
                            value={values.phone}
                        />
                        {touched.phone && errors.phone && <b><p class="text-danger">{errors.phone}</p></b>}
                    </ContainerInput>

                    <ContainerInput>
                        <Input
                            placeholder="Correo Electronico"
                            name='email'
                            onChange={handleChange("email")}
                            // onBlur={handleBlur("email")}
                            value={values.email}
                        />

                        {touched.email && errors.email && <b><p class="text-danger">{errors.email}</p></b>}
                    </ContainerInput>

                    <ContainerInput>
                        <Input
                            placeholder="Crea tu contraseña"
                            name='password'
                            onChange={handleChange('password')}
                            // onBlur={handleBlur("password")}
                            value={values.password}
                            type={visible ? "text" : "password"}
                        />

                        {touched.password && errors.password && <b><p class="text-danger">{errors.password}</p></b>}
                    </ContainerInput>

                    <ContainerInput>
                        <Input
                            placeholder="Repeti tu password"
                            name='repeatPassword'
                            onChange={handleChange('repeatPassword')}
                            // onBlur={handleBlur("repeatPassword")}
                            value={values.repeatPassword}
                            type={visible ? "text" : "password"}
                        />

                        {touched.repeatPassword && errors.repeatPassword && <b><p class="text-danger">{errors.repeatPassword}</p></b>}
                    </ContainerInput>

                    <button type="button"
                        class="btn btn-warning col-4 mb-2 "
                        onClick={() => setVisible(!visible)}>

                        {visible ? "Ocultar Contraseñas" : "Mostrar contraseñas"}
                    </button>

                    <button type="button submit " class=" mb-4 col-7 btn btn-secondary btn btn-primary btn-lg">Registrarme</button>
                {/*  */}
                </ContainerForm>


               
        )} 
        </Formik>
    </Container>
)
           




     

};


export default Register;