import React,{ useState } from "react";
import "./Form.css";
import addImage from '../../assets/add-image.png';
import Button from '@mui/material/Button';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import TextField from '@mui/material/TextField';

import { styled } from "@mui/system";

// Styled hidden input
const VisuallyHiddenInput = styled("input")({
  display: "none",
});

export default function Form() {
    const [image, setImage] = useState(null);
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result); // Set the base64 string of the image
        };
        reader.readAsDataURL(file);
        }
    };
    return (
        <>
            <form id="item-form">
                <img 
                id="add-image"
                src={image || addImage}
                alt="Uploaded Preview"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
                />
                <Button
                    component="label"
                    variant="contained"
                    size="medium"
                    id="upload-btn"
                    >
                    Upload
                    <VisuallyHiddenInput
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                    />

                </Button>
                <TextField required label="Item Name" variant="standard" margin="normal" className="form-field"/>
                <TextField required label="Location" variant="standard" margin="normal" className="form-field" />
                <TextField required label="Description" variant="standard" inputProps={{maxLength:150}} multiline margin="normal" className="form-field"/>
                <Button label="Submit" type="submit" variant="contained" size="medium" id="submit-button">Post</Button>
            </form>
        </>
    )
    

}