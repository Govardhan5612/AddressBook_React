import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { useState } from "react";
import personsDetails from "../service/addressBookService.js"

function Login() {
    

    let [name, setName] = useState();


    let nameChange = (event) => {
        setName(event.target.value);
    }
    let [email, setEmail] = useState();
    
    let emailChange = (event) => {
        setEmail(event.target.value);
      
    }

  
    let [path, setPath] = useState();
    let [message, setMessage] = useState();
    let [status, setStatus] = useState();

    let pathChange = () => {
       personsDetails.login(name,email).then((responce) => {
        console.log("---into service----");
        console.log(responce)
        console.log(responce.data.data)
        setStatus(responce.data.data)
    }
    
    ).catch(() => {
        console.log("Person data not getting");
    })
        console.log(name);
        console.log(email);
        console.log(status);
        if (status === "true") {
            setPath("/homePage");

        }
        else {
            //setPath("/homePage");
            setMessage("Enter valid details");
        }

    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignitems: "center", paddingTop: "50px" }}>
            <Grid container spacing={2} xs={8} sm={3} sx={{ backgroundColor: "gainsboro" }} style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "goldenrod",
                borderRadius: "25px",
                paddingTop: "50px",
                paddingBottom: "25px",
                paddingLeft: "30px",
                paddingRight: "30px"
            }}>
                <Grid xs={12}>
                    <span style={{ display: "flex", justifyContent: "center", alignitems: "center", fontStyle: "italic", fontWeight: "bold", fontSize: "24px", color: "darkgreen" }}>Address Book Login Page</span>
                </Grid>
                <Grid xs={12}>
                    <TextField
                        label="First Name"
                        value={name} onChange={nameChange}
                        name='firstName'
                        fullWidth
                        margin="normal"
                        color="warning"
                        style={{ borderRadius: "5px" }}
                    />
                </Grid>
                <Grid xs={12}>
                    <TextField
                        label="Email"
                        value={email} onChange={emailChange}
                        name='email'
                        fullWidth
                        margin="normal"
                        color="warning"
                        style={{ borderRadius: "5px" }}
                    />
                </Grid>
                <Grid xs={12}>
                    <span onClick={pathChange}>{message}</span>
                </Grid>
                <Grid xs={6}>
                    <a href={path} style={{ textDecoration: "none" }}>
                        <Button  onClick={pathChange}  startIcon={<LoginIcon />} style={{ display: "flex", justifyContent: "center", alignitems: "center" }}>Login</Button>
                    </a>
                </Grid>
                <Grid xs={6}>

                    <a href="/Registration" style={{ textDecoration: "none" }}>
                        <Button startIcon={<AppRegistrationIcon />} style={{ display: "flex", justifyContent: "center", alignitems: "center", textDecoration: "none" }} >Registration</Button>

                    </a>

                </Grid>
            </Grid>
        </div>
    );
}
export default Login;