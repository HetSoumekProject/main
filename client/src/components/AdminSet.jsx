import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Dashboard from './AdminDash';
const AdminSet=()=> {
  return (
    <div>
      <Dashboard/>
      <h2>Admin Profile</h2>
    </div>
  );
};
export default AdminSet;