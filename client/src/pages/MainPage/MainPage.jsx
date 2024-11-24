import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import "./MainPage.css"
import Typography from '@mui/material/Typography'
import ButtonGroup from '../../components/ButtonGroup/ButtonGroup'
import "leaflet/dist/leaflet.css";
import Map from '../../components/Map/Map'
function MainPage() {
  return (
    <>
        <Map/>
        <ButtonGroup/>
    </>
  )
}

export default MainPage