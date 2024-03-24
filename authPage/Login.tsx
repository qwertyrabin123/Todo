import React from 'react'
import UserRegister from './UserRegister';
import Userlogin from './Userlogin';

export default function Login({ userlogin, addUser }) {
    return (
        <>
            <div className='text-center text-4xl uppercase font-mono'>Welcome to Staff Details</div>
            <div className="loginbutton flex justify-center ">
                <Userlogin userlogin={userlogin} /> <UserRegister addUser={addUser} />
            </div>
        </>
    )
}


