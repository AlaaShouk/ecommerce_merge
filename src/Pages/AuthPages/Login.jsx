import React from "react";
import Swal from "sweetalert2";

import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import {callApiPost,} from "../../services/http"
import { useSpinner } from "./SpinnerContext";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
} from "@mui/material";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [formError, setFormError] = useState(null);
  const[lockButton ,setLockButton] = useState(false);
  const { show, hide } = useSpinner();
   const { t } = useTranslation();
  
   async function handleSubmit(e) {
  e.preventDefault();
  // setFormError(null);

      if (!email || !password) {
        setFormError('الرجاء إدخال البريد الإلكتروني وكلمة المرور');
        return;
      }
    //  setLockButton(true)
      show();
      console.log("show");
      const result = await callApiPost("login",{ email, password } ,(data ) => data.message  || "Login failed")
      hide();      
      // setLockButton(false)
      login(result.data.user);
      navigate("/");

}



 return (
  <Box
    sx={{
      minHeight: "100vh",
      bgcolor: "#fff",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Grid container
    columnSpacing={{ xs: 0, md: 8, lg: 12 }}
    >

      {/* الصورة */}

      <Grid
       item
        xs={12}
        md={5}
        lg={4}
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
        }}
      >
        <Box
          component="img"
          src="/assets/Side_Image.png"
          alt="login"
          sx={{
            width: "100%",
            maxWidth: 700,
            objectFit: "contain",
          }}
        />
      </Grid>

      {/* الفورم */}

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: {
            xs: 4,
            md: 8,
          },
          py: 8,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
           sx={{
              width: "100%",
              maxWidth: 370,
          }}
        >
          <Typography
                variant="h3"
                  sx={{
                      fontWeight: 500,
                      mb: 1,
                      fontSize: {
                          xs: 34,
                          md: 40,
                      },
                  }}
          >
            Log in to Exclusive
          </Typography>

          <Typography
             color="text.secondary"
                mb={5}
          >
            Enter your details below
          </Typography>

          <TextField
            fullWidth
              variant="standard"
              placeholder="Email or Phone Number"
              InputProps={{
                  disableUnderline: false,
              }}
              sx={{
                  mb: 4,

                  "& input": {
                      fontSize: 16,
                      py: 1.2,
                  },

                  "& .MuiInput-root": {
                      '&:before': {
                          borderBottom: "1px solid #bdbdbd",
                      },
                      '&:hover:not(.Mui-disabled):before': {
                          borderBottom: "1px solid #000",
                      },
                      '&:after': {
                          borderBottom: "2px solid #DB4444",
                      },
                  },
              }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          
          />

          <TextField
            fullWidth
            type="password"
            variant="standard"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 5 }}
          />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="contained"
              color="error"
              type="submit"
              disabled={lockButton}
               sx={{
                  width: 150,
                  height: 56,
                  borderRadius: 1,
                  textTransform: "none",
                  fontSize: 16,
                  boxShadow: "none",
                  "&:hover": {
                      boxShadow: "none",
                  },
              }}
            >
              {t("common.login")}
            </Button>

            <MuiLink
              component={RouterLink}
              to="/forgot-password"
              underline="none"
              color="error"
                  sx={{
                        color: "#DB4444",
                        fontSize: 16,
                        ml: 3,
                    }}
            >
              Forgot Password?
            </MuiLink>
          </Box>

          {formError && (
            <Typography
              color="error"
              mt={3}
            >
              {formError}
            </Typography>
          )}
        </Box>
      </Grid>

    </Grid>
  </Box>
);
};

export default Login;
