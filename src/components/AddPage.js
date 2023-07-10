import { TextField, Button, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import personService from "../service/addressBookService.js";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';

function Add() {
    let initialValue = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        id: "",
        isUpdate: false
    };



    const [formValue, setForm] = useState(initialValue);
    const ChangeValue = (event) => {
        console.log(event.target.value);
        setForm({ ...formValue, [event.target.name]: event.target.value });
    };
    const params = useParams();
    useEffect(() => {
        if (params.id) {
            getDataById(params.id);
        }
    }, [params.id]);

    const getDataById = (id) => {
        personService.getPersonById(id)
            .then((response) => {
                let object = response.data.data;
                setData(object);
            }).catch(() => {
                console.log("Invalid update details");
            });
    };
    const setData = (obj) => {

        console.log(obj);
        setForm({
            ...formValue,
            ...obj,
            id: obj.id,
            firstName: obj.firstName,
            lastName: obj.lastName,
            phoneNumber: obj.phoneNumber,
            email: obj.email,
            address: obj.address,
            city: obj.city,
            state: obj.state,
            zipCode: obj.zipCode,
            isUpdate: true

        });
    };

    const save = async (event) => {
        event.preventDefault();
        console.log(formValue);
        let object = {
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            phoneNumber: formValue.phoneNumber,
            email: formValue.email,
            address: formValue.address,
            city: formValue.city,
            state: formValue.state,
            zipCode: formValue.zipCode
        }
        console.log(object);
        if (formValue.isUpdate === true) {
            var answer = window.confirm("If data is modified it will not restore");
            if (answer === true) {
                personService.updatePerson(params.id, object)
                    .then((responce) => {
                        console.log(responce.data.data);
                    })
                    .catch((error) => {
                        alert("Error in updating,error", error)
                    });
            }
            else {
                window.location.reload();
            }
        }
        else {
            personService.addPerson(object)
                .then((response) => {
                    console.log(response.data.data);
                    alert(object.firstName + " data added")
                })
                .catch(() => {
                    alert("Error in add details");
                });
        }
    }
    return (
        <div style={{
            display: "flex", justifyContent: "center",
            alignitems: "center", backgroundColor: "peachpuff", paddingTop: "75px",
            paddingBottom: "75px",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "gold"
        }}>

            <form style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "50px",
                paddingBottom: "50px",
                backgroundColor: "aliceblue",
                justifyContent: "center",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "blue",
                borderRadius:"25px"
            }} onSubmit={save}>


                <Typography variant="h4" style={{
                    color: "brown",
                    fontStyle: "italic",
                    display: "flex", justifyContent: "space-between",
                    alignitems: "center"
                }}>
                    User Details Form
                    <Link to="/homePage">
                        <HomeIcon sx={{ fontSize: 50, color: "brown" }} />
                    </Link>
                </Typography>
                {/* <div style={{ display: "flex" }}> */}
                <Grid container spacing={2}>
                <Grid item xs={7}>
                    <TextField
                        label="First Name"
                        value={formValue.firstName} onChange={ChangeValue}
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
                        value={formValue.lastName} onChange={ChangeValue}
                        name='lastName'
                        fullWidth
                        margin="normal"
                        color="warning"
                    />
                    </Grid>
                    </Grid>

                
                <TextField
                    label="Phone Number"
                    value={formValue.phoneNumber} onChange={ChangeValue}
                    name='phoneNumber'
                    fullWidth
                    margin="normal"
                    color="warning"
                />
                <TextField
                    label="Email"
                    value={formValue.email} onChange={ChangeValue}
                    name='email'
                    fullWidth
                    margin="normal"
                    color="warning"
                />
                <TextField
                    label="Address"
                    value={formValue.address} onChange={ChangeValue}
                    name='address'
                    fullWidth
                    margin="normal"
                    color="warning"
                />
                <Grid container spacing={2}>
                <Grid item xs={4}>

                    <FormControl fullWidth margin='normal' color="warning">
                        <InputLabel >City</InputLabel>
                        <Select
                            value={formValue.city}
                            onChange={ChangeValue}
                            label="city"
                            name='city'
                        >
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Pune">Pune</MenuItem>
                            <MenuItem value="Banglore">Banglore</MenuItem>
                            <MenuItem value="Chennai">Chennai</MenuItem>
                            <MenuItem value="Tirupati">Tirupati</MenuItem>
                            <MenuItem value="Vijayawada">Vijayawada</MenuItem>
                            <MenuItem value="Turuvnanthapuram">Turuvnanthapuram</MenuItem>
                            <MenuItem value="Hydrabad">Hydrabad</MenuItem>
                            <MenuItem value="Kolkatha">Kolkatha</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={4}>

                    <FormControl fullWidth margin='normal' color="warning">
                        <InputLabel >State</InputLabel>
                        <Select
                            value={formValue.state} onChange={ChangeValue}
                            label="state"
                            name='state'
                        >
                            <MenuItem value="Maharastra">Maharastra</MenuItem>
                            <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                            <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                            <MenuItem value="Karnataka">Karnataka</MenuItem>
                            <MenuItem value="Kerala">Kerala</MenuItem>
                            <MenuItem value="West Bengal">West Bengal</MenuItem>
                            <MenuItem value="Telangana">Telangana</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={4}>

                    <FormControl fullWidth margin='normal' color="warning">
                        <InputLabel >Zip Code</InputLabel>
                        <Select
                            value={formValue.zipCode} onChange={ChangeValue}
                            label="zipCode"
                            name='zipCode'
                        >
                            <MenuItem value="123456">123456</MenuItem>
                            <MenuItem value="654789">654789</MenuItem>
                            <MenuItem value="014785">014785</MenuItem>
                            <MenuItem value="852369">852369</MenuItem>
                            <MenuItem value="984562">984562</MenuItem>
                            <MenuItem value="258741">258741</MenuItem>
                            <MenuItem value="100258">100258</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    </Grid>
                <div style={{ display: "flex", paddingTop:"30px",justifyContent:"center", paddingLeft:"160px" }}>
                    <Grid container spacing={35}>
                        <Grid item xs={2}>
                    <Button type="submit" variant="contained" color="primary" sx={{
                        bgcolor: 'lightgreen',
                        spacing: "10px",
                       
                    }}>
                        {formValue.isUpdate ? "Update" : "Submit"}
                    </Button>
                    </Grid>
                    <Grid item xs={2}>
                    <Button type="reset" variant="contained" sx={{
                        bgcolor: 'lightcoral',
                    }}>
                        Reset
                    </Button>
                    </Grid>
                    </Grid>

                </div>
            </form>

        </div>
    );
}
export default Add;