import { Grid } from '@mui/material';
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

export default function MainLayout({children}) {
    return (
        <>
        <Grid
            container
            direction="column"
            sx={{ minHeight: '100vh' }} 
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
