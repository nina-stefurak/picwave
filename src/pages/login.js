import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as ROUTES from '../constants/routes';

export default function Login() {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

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
                    value={emailAddress}
                    />
                    <input
                    aria-label="Enter your password"
                    type="password"
                    placeholder="Password"
                    className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 
                    border border-gray-primary rounded mb-2"
                    onChange={({ target }) => setPassword(target.value)}
                    value={password}
                    />
                    <button disabled={isInvalid} type="submit" 
                    className={`bg-blue-medium text-white w-full rounded h-8 font-bold 
                    ${isInvalid && 'opacity-50'}`
                    }>
                        Login
                    </button>
                </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 
            border border-gray-primary rounded mb-2">
                <p className="text-sm">Don't have an account? {``}
                <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
                    Sign up
                </Link>
                </p>
            </div>
          </div>
        </div>
    );
}
