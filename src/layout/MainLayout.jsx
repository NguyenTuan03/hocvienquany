import { Grid } from '@mui/material';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

export default function MainLayout({children}) {
    return (
        <>
        <Grid
            width={'100%'}
            container
            direction="column"
            sx={{
                height: '100%',
                 minHeight: '100vh',
                 overflow:'visible'
            }} 
        >
            <Grid item>
                <Header />
            </Grid>
            
            <Grid item sx={{ flexGrow: 1 }}>
                {children}
            </Grid>

            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    </>
    );
}
