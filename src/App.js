// src/App.js
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./components/Login";
import { auth, firestore } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const unsubscribe = firestore
        .collection("transactions")
        .where("userId", "==", user.uid)
        .onSnapshot((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setTransactions(data);
        });
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <div>
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <div>
            <h1>Transactions</h1>
            <ul>
              {transactions.map((transaction) => (
                <li key={transaction.id}>
                  {transaction.type}: ${transaction.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
