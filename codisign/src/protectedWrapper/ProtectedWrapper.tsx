import React, { useEffect } from "react";
import { useUsersContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const ProtectedWrapper = ({
  children,
  withRedirect = true,
}: {
  children: React.ReactNode;
  withRedirect?: boolean;
}) => {
  const { isLoggedIn } = useUsersContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && withRedirect) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  return <>{isLoggedIn ? <div>{children}</div> : <></>}</>;
};
