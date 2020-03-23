import React from "react";
import { Header } from "./js/components/Header";
import { Balance } from "./js/components/Balance";
import { IncomeExpenses } from "./js/components/IncomeExpenses";
import { TransactionList } from "./js/components/TransactionList";
import { AddTransaction } from "./js/components/AddTransaction";

import { GlobalProvider } from "./js/context/GlobalState";

// import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
