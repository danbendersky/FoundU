import "./Form.css"
import { useState } from 'react'
import addImage from '../../assets/add-image.png'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
export default function Form() {
    return (
        <>
            <form id="item-form">
                <img id="add-image" src={addImage}></img>
                <Button label="Take" variant="contained" size="medium" id="take-button">Take</Button>
                <TextField required label="Item Name" variant="standard" margin="normal" className="form-field"/>
                <TextField required label="Location" variant="standard" margin="normal" className="form-field"/>
                <TextField required label="Description" variant="standard" inputProps={{maxLength:150}} multiline margin="normal" className="form-field"/>
                <Button label="Submit" type="submit" variant="contained" size="medium" id="submit-button">Post</Button>
            </form>
        </>
    )
    

}