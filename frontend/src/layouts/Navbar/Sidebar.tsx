import {FC, ReactNode, useState} from "react";
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";

// ----------------------------------------------------------------------

const drawerWidth = 240;

// ----------------------------------------------------------------------

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{ open?: boolean; }>(({theme, open}) => ({
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),

    height: '100%',
    minWidth: '100%',
}));

// ----------------------------------------------------------------------

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open',})<AppBarProps>(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

// ----------------------------------------------------------------------

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

// ----------------------------------------------------------------------

interface Sidebar {
    children: ReactNode;
}

const Sidebar: FC<Sidebar> = ({children}) => {
    const theme = useTheme();
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleDrawerOpen = () => {
        setOpenSidebar(true);
    };

    const handleDrawerClose = () => {
        setOpenSidebar(false);
    };

    return (
        <>
            <Box sx={{display: 'flex'}}>
                <AppBar position="fixed" open={openSidebar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, ...(openSidebar && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Persistent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={openSidebar}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <Divider/>
                    <List>
                        {['login', 'signup'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <Link href={`/user/${text}`}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}
                                        </ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>

                </Drawer>
                <Main open={openSidebar}>
                    <DrawerHeader/>
                    {children}
                </Main>
            </Box>
        </>
    );
};

export default Sidebar;


