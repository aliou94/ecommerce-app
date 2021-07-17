import React from "react"
import { Form, Field} from 'react-final-form'



const RegistrationPage = () => {
    const handelSubmit = (values)=>{
        console.log(values)
    }
    const required = value => (value ? undefined : '*Required')
    return (
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3
                                    className="text-center font-weight-light my-4">Create Account</h3></div>
                                <div className="card-body">
<Form
    onSubmit={handelSubmit}
    render={
        ({handleSubmit})=>{
            return(
                (
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className=" form-floating mb-3">
                                    <Field name="inputFirstName" validate={required}>
                                        {({ input, meta }) => (
                                            <div  className="form-floating mb-3">
                                                <label htmlFor="inputFirstName">Email address</label>
                                                <input {...input}
                                                       type="text"
                                                       placeholder="Enter your first name"
                                                       className="form-control"
                                                       id="inputFirstName" />
                                                {meta.error && meta.touched && <span style={{color:"red"}}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <Field name="inputLastName" validate={required}>
                                        {({ input, meta }) => (
                                            <div  className="form-floating mb-3">
                                                <label htmlFor="inputLastName">Last name</label>
                                                <input {...input}
                                                       type="text"
                                                       placeholder="Enter your last name"
                                                       className="form-control"
                                                       id="inputLastName"/>
                                                {meta.error && meta.touched && <span style={{color:"red"}}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <label htmlFor="inputEmail">Email address</label>
                            <Field name="email" validate={required}>
                                {({ input, meta }) => (
                                    <div  className="form-floating mb-3">
                                        <label htmlFor="inputPassword">Email address</label>
                                        <input {...input}
                                               type="email"
                                               placeholder="name@example.com"
                                               className="form-control"
                                               id="email" />
                                        {meta.error && meta.touched && <span style={{color:"red"}}>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                    <Field   name="password" validate={required}>
                                        {({ input, meta }) => (
                                            <div  className="form-floating mb-3">
                                                <label htmlFor="inputPassword">Password</label>
                                                <input {...input}
                                                       type="password"
                                                       placeholder="*****"
                                                       className="form-control"
                                                       id="password" />
                                                {meta.error && meta.touched && <span style={{color:"red"}}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating mb-3 mb-md-0">
                                    <Field   name="password" validate={required}>
                                        {({ input, meta }) => (
                                            <div  className="form-floating mb-3">
                                                <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                                <input {...input}
                                                       type="password"
                                                       placeholder="Confirm password"
                                                       className="form-control"
                                                       id="inputPasswordConfirm" />
                                                {meta.error && meta.touched && <span style={{color:"red"}}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-0">
                            <div className="d-grid">
                                <a className="btn btn-primary btn-block" href="/">
                                    Create Account
                                </a>
                            </div>
                        </div>
                    </form>
                )
            )
        }
    }
    />

                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><a href="/e-commerce/login">Go to login</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RegistrationPage