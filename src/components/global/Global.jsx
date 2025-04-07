import { Box } from '@mui/material'
import React from 'react'
import './Global.css'
export default function Global({children}) {
  return (
    <Box>
        {children}
    </Box>
  )
}
