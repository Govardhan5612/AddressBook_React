import { Link } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import personsDetails from "../service/addressBookService.js"
import SortByAlphaRoundedIcon from '@mui/icons-material/SortByAlphaRounded';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";



function Home() {

    let navigate = useNavigate();
    const update = (id) => {
        navigate(`editPage/${id}`);
    }
    useEffect(() => {
        getAllPersons();
        console.log("Use Effect in the employee Pay Role");
    }, [])



    let valuesAssign = {
        PersonArray: [],
    }


    let [formValue, setValue] = useState({ valuesAssign });
    let [count, setCount] = useState();

    





    let getAllPersons = () => {
        
            personsDetails.getAllData().then((responce) => {
                console.log("---into service----");
                console.log(responce.data.data)
                setValue({ PersonArray: responce.data.data })
                setCount(responce.data.data.length);
            }
            ).catch(() => {
                console.log("Person data not getting");
            });
        
    }
    let sortByCity = () => {
        personsDetails.sortByCity().then((responce) => {
            console.log("---into service----");
            console.log(responce.data.data)
            setValue({ PersonArray: responce.data.data })
            setCount(responce.data.data.length);
        }
        ).catch(() => {
            console.log("Person data not getting");
        });
    }
    let sortByState = () => {
        personsDetails.sortByState().then((responce) => {
            console.log("---into service----");
            console.log(responce.data.data)
            setValue({ PersonArray: responce.data.data })
            setCount(responce.data.data.length);
        }
        ).catch(() => {
            console.log("Person data not getting");
        });
    }
     
    
    let [name,setName] = useState();
    let nameChange =(event)=>{
        setName(event.target.value);
    }
    
    let searchByName = () => {
        personsDetails.serchByName(name).then((responce) => {
            console.log("---into service----");
            console.log(responce.data.data)
            setValue({ PersonArray: responce.data.data })
            setCount(responce.data.data.length);
        }
        ).catch(() => {
            console.log("Person data not getting");
        });
    }

  

    let deletePerson = (id) => {
        let confirm = window.confirm(" Deleting conformantion ");
        if (confirm) {
            personsDetails.deletePerson(id).then(() => {
                window.location.reload();
                getAllPersons();
            })
                .catch(() => {
                    console.log("Invalid details");
                });
        } else {
            alert(" Not deleted the person details");
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "space-between", fontWeight: "bold", color: "green", fontSize: "30px", paddingTop: "20px", paddingBottom: "20px" }}>
                <div>
                    Total Person Details
                    <span style={{ color: "red" }}> ({count})
                    </span>
                </div>
                <Button  onClick={sortByCity} startIcon={<SortByAlphaRoundedIcon sx={{
                        fontSize: 50,
                        height:"25px"
                    }}
                    />} >
                    
                    CITY
                    </Button>

               <Button onClick={sortByState} startIcon={ <SortByAlphaRoundedIcon sx={{
                    fontSize: 50,
                    
                }}
                />}>
               
                STATE
                </Button >
               <Button  onClick={searchByName} style={{borderColor:"blue",borderWidth:"1px"}} >
                <SearchIcon sx={{
                    fontSize: 25,
                    
                }}
                />
                <input type="text"  name="firstName" value={name} onChange={nameChange} placeholder='search by name'style={{height:"25px",borderColor:"white"}} />
                </Button>
                
                <Link to="/addPage" >
                    <Button 

                startIcon={<AddBoxIcon sx={{
                        fontSize: 50,
                    }}

                    />
                }>
                    ADD
                    </Button>
            
                </Link>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                    <TableHead style={{ backgroundColor: "gainsboro" }}>
                        <TableRow>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>First Name</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>Last Name</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>Phone Number</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>Email</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>Address</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>City</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>State</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>Zip Code</TableCell>
                            <TableCell align="center" style={{ fontWeight: "bold" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            formValue.PersonArray && formValue.PersonArray.map((row, index) => (
                                <TableRow key={`${index}`}>
                                    <TableCell align="center">{row.firstName}</TableCell>
                                    <TableCell align="center">{row.lastName}</TableCell>
                                    <TableCell align="center">{row.phoneNumber}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.address}</TableCell>
                                    <TableCell align="center">{row.city}</TableCell>
                                    <TableCell align="center">{row.state}</TableCell>
                                    <TableCell align="center">{row.zipCode}</TableCell>
                                    <TableCell align="center">
                                        <EditNoteIcon onClick={() => { update(row.id) }}
                                            sx={{
                                                fontSize: 50,
                                                color: "lightgreen"
                                            }} />
                                        <DeleteIcon onClick={() => { deletePerson(row.id) }}
                                            sx={{
                                                fontSize: 50,
                                                color: "lightcoral"
                                            }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}
export default Home;