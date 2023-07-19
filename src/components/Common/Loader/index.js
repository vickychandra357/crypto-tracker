import { CircularProgress } from '@mui/material'
import React from 'react'
import "./styles.css"
export default function Loader() {
  return (
    <div className='loader-container'>
    <CircularProgress />
    </div>
  )
}
