import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './AdminDash';
const Transactions=()=> {
  return (
    <div>
      <Dashboard/>
      <h2>Transactions</h2>
    </div>
  );
};
export default Transactions;