import React from 'react'


const login = () => {
    return (
        <div id="white">
            <div id="holder">
                <h3> Welcome to CEFPaY </h3>
                <p> Enter your email address or phone number to log in or set up your CEFPaY account. </p>
                <form>
                    <label htmlFor=""> Email or Phone Number </label> 
                    <br />
                    <input type="text"  placeholder="Enter your email address or Phone Number"/>
                </form>

                <div id='Purple'>
                    <a href="##"> Continue </a>
                </div>

                <div id='lines'>
                    <div className='greyline'></div>
                    <p>Or</p>
                    <div className='greyline'></div>
                </div>

                <div id='grey-border'>
                    <img src="" alt="" />
                    <a href="##"> Continue with Google </a>
                </div>

            </div>
        </div>
    )
}

export default login
