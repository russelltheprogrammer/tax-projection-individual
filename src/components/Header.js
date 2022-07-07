import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';


const Header = (props) => {

    const drawerWidth = 240;
    const navItems = ['Info', 'Documentation', 'Contact'];
    const title = "TAX PROJECTION APPLICATION (BETA)"

   
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            {title}
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
        ))}
      </List>
        </Box>
      );

     const container = window !== undefined ? () => window().document.body : undefined;


    return ( 
        <div>
        <Box>
            <AppBar component="nav" position="relative"
            sx={{
                marginBottom: "2%",
            }} >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                    <MenuIcon />
                </IconButton>
                <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, 
                    display: { xs: 'block', sm: 'block' },
                }}>
                {title}
                </Typography>
                     <Box sx={{ 
                        display: { xs: 'none', sm: 'none', md: "block" }
                        }}>
                        {navItems.map((item) => (
                        <Button key={item} sx={{ 
                            color: '#fff',
                            fontSize: "130%",
                            }}>
                            {item}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
        </div>
    );
}
       
export default Header;

        // <div className="header-heading">
        //     <h1>Tax Projection - Quarterly Estimates &#40;BETA&#41;</h1>
        //     <p>Note: This is for Individual tax return types only, other tax return types will not work. At this time, this projection application can only handle New York State
        //         and New York City tax jurisdictions. Please see contact information below if you have any questions, feature requests, and/or to report any bugs.<br/>
        //             You can find the technical documentation <a href="https://github.com/russelltheprogrammer/tax-projection-individual" target="_blank" rel="noreferrer"><b>HERE</b></a>.
        //         </p>
        //  </div>