import * as React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Add() {
  const [inputfield, setInputfield] = React.useState();
  const [file, setFile] = React.useState();

  const Change = (e) => {
    setInputfield({ ...inputfield, [e.target.name]: e.target.value });
    console.log(inputfield);
  };
  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    var body = new FormData();
    body.append("image", file);

    body.append("mobileName", inputfield.mobileName);
    body.append("price", inputfield.price);
    body.append("primaryCamera", inputfield.primaryCamera);
    body.append("secondaryCamera", inputfield.secondaryCamera);
    body.append("display", inputfield.display);
    body.append("availability", inputfield.availability);
    body.append("OS", inputfield.OS);

    const token = localStorage.getItem("token");
    console.log(token);
    const data = await axios.post("http://localhost:8080/mobile/add", body, {
      headers: { authorization: token },
    });
    if (data.status) {
      toast("Wow so easy!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <ToastContainer />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Button variant="contained" component="label">
              Upload File
              <input name="image" onChange={fileChange} type="file" hidden />
            </Button>
            <TextField
              onChange={Change}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Mobile Name"
              name="mobileName"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={Change}
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              id="price"
            />
            <TextField
              onChange={Change}
              margin="normal"
              required
              fullWidth
              name="primaryCamera"
              label="primaryCamera"
              id="primaryCamera"
            />
            <TextField
              onChange={Change}
              margin="normal"
              required
              fullWidth
              name="secondaryCamera"
              label="secondaryCamera"
              id="secondaryCamera"
            />
            <TextField
              onChange={Change}
              margin="normal"
              required
              fullWidth
              name="display"
              label="display"
              id="display"
            />
            <TextField
              onChange={Change}
              margin="normal"
              required
              fullWidth
              name="availability"
              label="availability"
              id="availability"
            />
            <TextField
              onChange={Change}
              margin="normal"
              required
              fullWidth
              name="OS"
              label="OS"
              id="OS"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
