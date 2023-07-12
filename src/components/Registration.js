import Grid from '@mui/material/Unstable_Grid2';
import { Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
function Registration(){
    return(
        <div style={{ display: "flex", justifyContent: "center", alignitems: "center", paddingTop: "50px" }}>
        <Grid container spacing={2} xs={8} sm={4} sx={{ backgroundColor: "gainsboro" }} style={{
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
                <span style={{ display: "flex", justifyContent: "center", alignitems: "center", fontStyle: "italic", fontWeight: "bold", fontSize: "24px", color: "darkgreen" }}>Address Book Registration Page</span>
            </Grid>
           
          
            <Grid container spacing={2}>
            <Grid item xs={7}>
                        <TextField
                            label="First Name"
                            name='firstName'
                            fullWidth
                            margin="normal"
                            color="warning"
                            style={{ borderRadius: "5px" }}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            label="Last Name"
                            name='lastName'
                            fullWidth
                            margin="normal"
                            color="warning"
                        />
                    </Grid>
                </Grid>


            <Grid xs={12}>
            <Grid xs={12}>
                <TextField
                    label="Phone Number"
                    name='phoneNumber'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                />
            </Grid>

            <Grid xs={12}>
                <TextField
                    label="Email"
                    name='email'
                    fullWidth
                    margin="normal"
                    color="warning"
                    style={{ borderRadius: "5px" }}
                />
            </Grid>
                
            </Grid>
            <Grid xs={6}>
                <a href="/" style={{ textDecoration: "none" }}>
                    <Button    startIcon={<LoginIcon />} style={{ display: "flex", justifyContent: "center", alignitems: "center" }}>Back to Login</Button>
                </a>
            </Grid>
            <Grid xs={6}>

                {/* <a href="/a" style={{ textDecoration: "none" }}> */}
                    <Button startIcon={<AppRegistrationIcon />} style={{ display: "flex", justifyContent: "center", alignitems: "center", textDecoration: "none" }} >Save your Details</Button>

                {/* </a> */}

            </Grid>
        </Grid>
    </div>
    );

}
export default Registration;