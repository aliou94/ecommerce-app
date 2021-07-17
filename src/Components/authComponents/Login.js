import React, {useState} from "react"
import { Form, Field} from 'react-final-form'


const LoginPage = () => {

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
    <div className="col-lg-5">

<div className="card shadow-lg border-0 rounded-lg mt-5">

    <div className="card-header">
        <h1 className="text-center font-weight-light my-4"><i className="fa fa-unlock-alt"/></h1>
    </div>

    <div className="card-body">

        <Form
            onSubmit={handelSubmit}
            render={
                ({handleSubmit})=>
                {

                    return(
                        (
                            <form onSubmit={handleSubmit}>
                                <div className=" form-floating mb-3">
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
                                <div className=" form-floatingmb-3">
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

                                <div
                                    className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <a
                                        className="btn btn-primary"
                                        type="submit"
                                        href="/e-commerce/dashboard"
                                    >Login</a>
                                </div>
                            </form>
                        )
                    )
                }
            }
        />

    </div>

    <div className="card-footer text-center py-3">
        <div className="small">
            <a href="/e-commerce/registration">Create an account</a>
        </div>
        <div className="small">
            <a className="small" href="/e-commerce/resetPassword">Forgot Password?</a>
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

export default LoginPage
