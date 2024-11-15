import "./Form.css"
import { useState } from 'react'
import addImage from '../assets/add-image.png'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
export default function Form() {
    return (
        <>
            <form id="item-form">
                <img id="add-image" src={addImage}></img>
                <TextField label="Item Name" variant="standard" margin="normal" className="form-field"/>
                <TextField label="Location" variant="standard" margin="normal" className="form-field"/>
                <TextField label="Description" variant="standard" inputProps={{maxLength:150}} multiline margin="normal" className="form-field"/>
                <Button label="Submit" variant="contained" size="medium" id="submit-button">Submit</Button>
            </form>
        </>
    )
    

}