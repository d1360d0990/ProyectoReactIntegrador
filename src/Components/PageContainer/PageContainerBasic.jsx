import * as React from 'react';
import {  useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import { OutlinedInput } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageContainerBasic.css'


const NAVIGATION = [
    {
        segment: 'orders',
        title: 'Eventos Generales',
        icon: <DashboardIcon />,
    },
];

function useDemoRouter(initialPath) {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

function PageToolbar() {
    const handlePrint = () => {
        window.print(); // Llama a la función de impresión del navegador
    };


    return (
        <PageContainerToolbar>
            <Stack direction="row" spacing={1} alignItems="center">
                <Button
                    variant="outlined"
                    size="small"
                    color="neutral"
                    startIcon={<PrintIcon fontSize="inherit" />}
                    onClick={handlePrint}
                >
                    Print
                </Button>
            </Stack>
        </PageContainerToolbar>
    );
}

export default function PageContainerBasic(props) {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const handleClear = () => {
        setInputValue('');
    }
    const { window } = props;
    const router = useDemoRouter('/orders');
    const theme = useTheme();
    
    const demoWindow = window ? window() : undefined;
    const handleCreateEventClick = () => {
        navigate('/addEvent');
    }

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={theme}
            window={demoWindow}
            branding={{
                title: 'ACME Inc.',
            }}
        >
            <Paper sx={{ p: 2, width: '100%' }}>
                <PageContainer
                    slots={{
                        toolbar: PageToolbar,
                    }}
                >
                    <Grid container spacing={1} sx={{ maxWidth: '100%', width: '100%', margin: 0 }}>
                        <Grid size={5} md={8} lg={6} />
                        <Grid size={12} sx={{ maxWidth: '100%' , width: '100%', margin: 0 }}>
                            <OutlinedInput
                                placeholder="Buscar Evento"
                                inputProps={{ 'aria-label': 'search' }} sx={{ width: '60%' }}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                
                            />
                            <Button onClick={handleClear} variant="contained" color="success" sx={{ margin: '10px' }}>
                                LIMPIAR BUSQUEDA
                            </Button>
                            <Button onClick={handleCreateEventClick} variant="contained" color="primary" sx={{ margin: '5px' }}>CREAR EVENTO</Button>
                        </Grid>
                        
                    </Grid>
                </PageContainer>
            </Paper>
        </AppProvider>
    );
}
