import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './styles.css'
import LoginImage from '../../Assets/img/taxi-login.jpg'
import { login } from '../../services/services'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const Login = () => {
  const navigate = useNavigate()
  const initialValues = {
    user: "",
    password: '',
  }

  const validationSchema = Yup.object().shape({
    user: Yup.string().min(4, 'Al menos 8 caracteres').required('Required'),
    password: Yup.string().min(6, "Almenos 8 caracteres").required('Required')
  })

  const onSubmit = async(values) => {
    let response = await login(values.user, values.password)

    if (response.status === 200 && response.data.length === 1) {
      navigate('/home')
    } else {
      toast('La credenciales no coinciden')
    }
  }

  return (
    <section className="vh-100 bg-login">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={LoginImage}
                    alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem", height: "500px", width: "500px", objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                      {({ handleSubmit }) => (
                        <FormikForm onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Iniciar sesón</h5>

                        <Form.Group controlId="user">
                          <ErrorMessage name="user" component={Form.Text} />
                          <Field type="text" placeholder="Usuario" name="user" as={Form.Control} />
                          <Form.Label>Usuario</Form.Label>
                        </Form.Group>

                        <Form.Group controlId="password">
                          <ErrorMessage name="password" component={Form.Text} />
                          <Field type="password" placeholder="Contraseña" name="password" as={Form.Control} />
                          <Form.Label>Contraseña</Form.Label>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Login
                        </Button>

                      </FormikForm>
                      )}
                      
                    </Formik>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Login