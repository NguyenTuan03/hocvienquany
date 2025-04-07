import { BrowserRouter as Router, Route, Routes} from 'react-router'
import { Box } from '@mui/material';
import publicRoutes from './routes/Routes';
import MainLayout from './layout/MainLayout';
import { Fragment } from 'react';

function App() {
  return (
      <Router>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "background.default",
                    color: "text.primary",
                    borderRadius: 1,
                }}
            >
                <Routes>
                    {publicRoutes.map((item, index) => {
                        let Layout = MainLayout;
                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Box>
        </Router>
  )
}

export default App
