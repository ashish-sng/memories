import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import decode from "jwt-decode";

import useStyles from "./styles";
import memories from "../../images/memories.png";

const Navbar = () => {
  const classes = useStyles();

  const user = useSelector((state) => state.auth.authData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("profile"));
    if (storedUser) {
      dispatch({ type: "AUTH", data: storedUser });
    }
  }, [dispatch]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height={60}
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.picture}
            >
              {user?.result?.name?.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.name || user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Log Out
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
