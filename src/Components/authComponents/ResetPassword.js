import React from "react"
import {Field, Form} from "react-final-form";


const ForgotPasswordPage = () => {
const handelSubmit = (values) => {
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
<div className="card-header"><h3
className="text-center font-weight-light my-4">Password Recovery</h3></div>
<div className="card-body">
<div className="small mb-3 text-muted">Enter your email address and we will send
you a link to reset your password.
</div>

<Form
onSubmit={handelSubmit}
render={
    ({handleSubmit}) => {

        return (
            (
                <form onSubmit={handleSubmit}>
                    <div className=" form-floating mb-3">
                        <Field name="email" validate={required}>
                            {({input, meta}) => (
                                <div className="form-floating mb-3">
                                    <label htmlFor="inputPassword">Email
                                        address</label>
                                    <input {...input}
                                           type="email"
                                           placeholder="name@example.com"
                                           className="form-control"
                                           id="email"/>
                                    {meta.error && meta.touched && <span
                                        style={{color: "red"}}>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div
                        className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <button className="btn btn-primary" href="#"
                                type="submit">Reset Password
                        </button>
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
<a className="small" href="/e-commerce/login">Return to login</a>
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

export default ForgotPasswordPage