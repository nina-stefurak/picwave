import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login - Picwave';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/profile-phone.png" alt="Phone with profile app" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border border-gray-primary
                mb-4 rounded mb-2">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logoPicwave.png" alt="Picwave" className="mt-2 w-6/12 mb-4" />
                </h1>
                {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                <form onSubmit={handleLogin} methot="POST">
                    <input
                    aria-label="Enter your email address"
                    type="text"
                    placeholder="Email address"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 
                    border border-gray-primary rounded mb-2"
                    onChange={({ target }) => setEmailAddress(target.value)}
                    />
                                        <input
                    aria-label="Enter your password"
                    type="password"
                    placeholder="Password"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 
                    border border-gray-primary rounded mb-2"
                    onChange={({ target }) => setPassword(target.value)}/>
                    <button disabled={isInvalid} type="submit" 
                    className={`bg-blue-500 text-white w-full rounded h-8 font-bold 
                    ${isInvalid && 'opacity-50'}`
                    }>
                        Log In
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 
            border border-gray-primary rounded mb-2">
                <p className="text-sm">Don't have an account?{``}
                
                </p>
            </div>
          </div>
        </div>
    );
}
// TODO: add to tailwind config
// bg-blue-medium -> hex values
// text-red-primary -> hex values
// text-gray-base -> hex values
// border-gray-primary -> hex values