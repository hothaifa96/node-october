import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CommentsProvider from "./Helpers/Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CommentsProvider>
            <App />
        </CommentsProvider>
    </React.StrictMode>
);

reportWebVitals();
