import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import AdminLogin from "./Login";

 
export function AdminNavigationBar({logout, user, role}) {
  console.log("navbar", role);
 
  return (
    <div>
      {user.value && (role==="admin") ? <Dashboard logout={logout} user={user} userAdmin={role}/> : <AdminLogin />}
    </div>
  );
}