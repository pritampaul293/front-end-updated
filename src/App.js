import React from 'react';
import { MessengerChat } from "react-messenger-chat-plugin";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./router/AppRoute";
import axios from 'axios';

function App() {
  axios.defaults.baseURL='https://agro-facility-239y.onrender.com'
  return (
    <BrowserRouter>
      <AppRoute />
      <MessengerChat
        pageId="105702374195107"
        language="English"
        themeColor={"#000000"}
        bottomSpacing={20}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
          console.log("onMessengerShow");
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide");
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow");
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide");
        }}
        onMessengerMounted={() => {
          console.log("onMessengerMounted");
        }}
        onMessengerLoad={() => {
          console.log("onMessengerLoad");
        }}
      />
    </BrowserRouter>
  );
}

export default App;
