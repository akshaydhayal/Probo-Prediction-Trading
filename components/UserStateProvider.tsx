"use client";
import React, { ReactNode, useState } from "react";

const UserStateProvider = ({ children }:{children:ReactNode}) => {
  const [userState,setUserState]=useState(false);
  return { children };
};

export default UserStateProvider;
