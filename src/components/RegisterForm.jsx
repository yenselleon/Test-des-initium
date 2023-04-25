import { useFormik } from 'formik';
import * as Yup from 'yup';


const RegisterForm = () => {


  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Debe de ser menos de 15 caracteres')
      .required('Este campo es requerido'),
    lastName: Yup.string()
      .max(20, 'Debe de ser menos de 15 caracteres')
      .required('Este campo es requerido'),
    email: Yup.string().email('Direccion emal invalida').required('Este campo es requerido'),
    sector: Yup.string()
      .max(20, 'Debe de ser menos de 15 caracteres')
      .required('Este campo es requerido'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      sector: '',
    },
    validationSchema: validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="wrap-contact100">
      <div className="contact100-pic js-tilt" data-tilt>
        <img src="src/images/Initium-logo.png" alt="IMG" />
      </div>

      {/* Start Form */}
      <form className="contact100-form" onSubmit={formik.handleSubmit}>

        <span className="contact100-form-title text-center">
          Registro
        </span>

        {/* name input*/}
        <div
          className={`wrap-input100 validate-input ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : null}`}
          data-validate="Name is required"
        >
          <input
            className={`input100 form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : null}`}
            type="text"
            name="firstName"
            placeholder="Nombre"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <span
            className="focus-input100"
          >
          </span>
          <span
            className="symbol-input100">
            <i
              className="fa fa-user"
              aria-hidden="true"
            />
          </span>
        </div>

        {formik.touched.firstName && formik.errors.firstName ? (
          <small className="form-text  text-danger">{formik.errors.firstName}</small>
        ) : null}


        {/* LastName */}
        <div
          className={`wrap-input100 validate-input ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : null}`}
        >
          <input
            className={`input100 form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : null}`}
            type="text"
            name="lastName"
            placeholder="Apellido"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          
          <span
            className="focus-input100"
          >
          </span>
          <span
            className="symbol-input100">
            <i
              className="fa fa-user"
              aria-hidden="true"
            />
          </span>

        </div>

          {/* error message */}
          {formik.touched.lastName && formik.errors.lastName ? (
          <small className="form-text  text-danger">
            {formik.errors.lastName}
          </small>

          ) : null}


        {/* Email */}
        <div className={`wrap-input100 validate-input ${formik.touched.email && formik.errors.email ? 'is-invalid' : null}`}>
          <input 
            className={`input100 form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : null}`} 
            type="text" 
            name="email" 
            placeholder="Correo Empresarial"
            onChange={formik.handleChange}
            value={formik.values.email}
          />

          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </span>

        </div>

          {/* error message */}
          {formik.touched.email && formik.errors.email ? (
          <small className="form-text  text-danger">
            {formik.errors.email}
          </small>

          ) : null}


        {/* Sector */}
        <div className={`wrap-input100 validate-input ${formik.touched.sector && formik.errors.sector ? 'is-invalid' : null}`}>
          <input 
            className={`input100 form-control ${formik.touched.sector && formik.errors.sector ? 'is-invalid' : null}`}
            type="text" 
            name="sector" 
            placeholder="Sector" 
            onChange={formik.handleChange}
            value={formik.values.sector}
          />

          <span className="focus-input100"></span>
          <span className="symbol-input100">
            <i className="fa fa-industry" aria-hidden="true"></i>
          </span>

        </div>

          {/* error message */}
          {formik.touched.sector && formik.errors.sector ? (
          <small className="form-text  text-danger">
            {formik.errors.sector}
          </small>

          ) : null}

        <div className="container-contact100-form-btn">
          <button 
            className="contact100-form-btn"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>

      {/* End Form */}
    </div>
  )
}

export default RegisterForm;