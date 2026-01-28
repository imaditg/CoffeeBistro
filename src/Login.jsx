// import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className='main-login'>
                <div className='container'>
                    <div className='login-header'>
                        <h1>Log in to your account</h1>
                    </div>
                    <div className='login-form'>
                        <form>
                            <div className='email-input'>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" />
                            </div>
                            <div className='password-input'>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" />
                            </div>
                            <div className='login-btn'>
                                <h3>Forgot your password?</h3>
                                <button type="submit">Sign in</button>
                            </div>
                            <hr />
                            <div className='no-account'>
                                <p>No account? <Link to={'/signup'}>Create one here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login