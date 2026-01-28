import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <>
            <div className='main-signup'>
                <div className="container">
                    <h2>Create an account</h2>
                    <form className="signup-form">
                        <p className="login-text">
                            Already have an account? <Link to={'/login'}>Log in instead!</Link>
                        </p>
                        <label>Social title</label>
                        <div className="radio-group">
                            <label><input type="radio" name="title" /> Mr.</label>
                            <label><input type="radio" name="title" /> Mrs.</label>
                        </div>

                        <label htmlFor="fname">First name</label>
                        <input type="text" id="fname" placeholder=" " />
                        <p className="hint">Only letters and the dot (.) character, followed by a space, are allowed.</p>

                        <label htmlFor="lname">Last name</label>
                        <input type="text" id="lname" placeholder=" " />
                        <p className="hint">Only letters and the dot (.) character, followed by a space, are allowed.</p>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder=" " />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />

                        <label htmlFor="birthdate">
                            Birthdate <span className="optional">Optional</span>
                        </label>
                        <input type="text" id="birthdate" placeholder="MM/DD/YYYY" />
                        <p className="hint">(E.g.: 05/31/1970)</p>
                        <label class="checkbox">
                            <input type="checkbox"/>
                                I agree to the terms and conditions and the privacy policy
                        </label>
                        <div className='submit-btn'>
                            <button type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup