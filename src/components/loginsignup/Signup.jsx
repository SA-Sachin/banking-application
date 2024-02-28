import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div
      className="login-signup-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 1px 5px rgba(10, 10, 10, 10)",
        }}
      >
        <CardContent className="card-content">
          <h2 className="signup-heading" style={{ textAlign: "center" }}>
            Sign Up
          </h2>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={7}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                placeholder="Enter your email"
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                placeholder="Enter your password"
              />
            </Grid>

            <Grid item xs={8} justifyContent="center">
              <Grid
                container
                item
                xs={4}
                justifyContent="center"
                className="signup-button-container"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className="signup-button"
                  style={{ alignSelf: "center", margin: "auto" }}
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} style={{ textAlign: "center" }}>
              already have an account ?{" "}
              <Link to="/login">
                <span style={{ textDecoration: "underline" }}>Login</span>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
