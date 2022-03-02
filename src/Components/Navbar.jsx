
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Box sx={{mt:5,ml:10}}>
            <Link to="/home">
            Home
            </Link>
        </Box>
    </div>
  )
}

export default Navbar