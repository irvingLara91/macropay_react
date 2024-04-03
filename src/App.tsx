import React from 'react';
import './App.css';
import {themeOptions} from './theme/theme';
import {Box, createTheme, responsiveFontSizes, ThemeProvider, Toolbar} from "@mui/material";
import Pages from "../src/navigation/Pages";
import {BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/navigation/Navbar";
import {Footer} from "./components/navigation/Footer";

let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <div>
                        <Navbar />
                        <Toolbar/>
                        <main style={{
                            width: '100%',
                            overflow: 'auto',
                        }}>
                            <Box id="main-box" component="main" sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                <Pages/>
                            </Box>
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
