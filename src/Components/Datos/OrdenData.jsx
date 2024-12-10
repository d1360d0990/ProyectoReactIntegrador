import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider } from '@toolpad/core/AppProvider';
import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import StickyHeadTable from '../StickyHeader';
import { OutlinedInput } from '@mui/material'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const Skeleton = styled('div')(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

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
    // Remove this const when copying and pasting into your project.
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
                    <Grid container spacing={1}>
                        <Grid size={5} />
                        <Grid size={12}>
                            <OutlinedInput
                                placeholder="Buscar Evento"
                                inputProps={{ 'aria-label': 'search' }} sx={{ width: '60%' }}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <Button onClick={handleClear} variant="contained" color="success" sx={{ margin: '5px' }}>
                                LIMPIAR SELECCION
                            </Button>
                            <Button onClick={handleCreateEventClick} variant="contained" color="primary" sx={{ margin: '5px' }}>CREAR EVENTO</Button>
                        </Grid>
                        <Grid size={12}>
                            <StickyHeadTable />
                        </Grid>

                    </Grid>
                </PageContainer>
            </Paper>
        </AppProvider>
    );
}
