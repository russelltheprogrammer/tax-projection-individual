import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';


const Header = (props) => {


    

    const drawerWidth = 240;
    const navItems = 
        [[0, 'Info', "#info"], 
        [1, 'Documentation', "https://github.com/russelltheprogrammer/tax-projection-individual#readme"],
        [2, 'Contact', "#footer"]];
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
            {/* item[0] = id, item[1] = description, item[2] = link */}
            {navItems.map((item) => (
            <ListItem key={item[0]} disablePadding sx={{ textAlign: 'center' }}>
                <div className="header-list-anchor-container" key={item[0]}>
                    <a className="header-list-anchor"
                        target={item[1] === "Documentation" ? "_blank" : null}
                        href={item[2]}> 
                        {item[1]}
                    </a>
                </div>
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
                    sx={{ mr: 2, display: { md: 'none' } }}
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
                            {/* item[0] = id, item[1] = description, item[2] = link */}
                        {navItems.map((item) => (
                        <a className="header-anchor"
                            target={item[1] === "Documentation" ? "_blank" : null}
                            key={item[0]}
                            href={item[2]}> 
                            {item[1].toUpperCase()}
                        </a>
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
                        display: { xs: 'block', md: 'none' },
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