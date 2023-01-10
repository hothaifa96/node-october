import { createContext, useState } from "react";
import axios from "axios";
import App from "../App";
import jwt from 'jwt-decode'
export const CommentsContext = createContext();

const ContextProvider = () => {
    const [display, setDisplay] = useState("main");
    const [comments, setComments] = useState([]);

    const getComments = async ()=> {
        const comments = await axios.get("http://127.0.0.1:4002/api/comments");
        console.log(comments.data);
        setComments(comments.data);
    };

    const logOut = async function () {
        localStorage.removeItem('token');
    };

    const addComment = async function (e, commentBody) {
        const token = localStorage.getItem("token");
        e.preventDefault();

        const {name} = jwt(token)
        const comment = await axios.post("http://localhost:4002/api/comments", {
            body: commentBody,
            name: name,
        },{headers:{
            'x-auth-token':token
        }});
        getComments();
    };

    const login = async function (e, loginInformation) {
        e.preventDefault();

        const login = await axios.post("http://localhost:4002/api/auth", {
            email: loginInformation.email,
            password: loginInformation.password,
        });
        localStorage.setItem("token", login.data);
    };
    const register = async function (e, registerInformation) {
        e.preventDefault();

        const {headers} = await axios.post("http://localhost:4002/api/users", {
            name: registerInformation.name,
            email: registerInformation.email,
            password: registerInformation.password,
        });
        localStorage.setItem("token",headers['x-auth-token']);
    };

    return (
        <CommentsContext.Provider
            value={{ addComment, login, display, setDisplay, comments, setComments, getComments, register }}
        >
            <App />
        </CommentsContext.Provider>
    );
};

export default ContextProvider;
