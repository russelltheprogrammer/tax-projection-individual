import { AppBar, Box, IconButton, Toolbar } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    return ( 
        // <div>
        // <Box>
        //     <AppBar component="nav">
        //         <Toolbar>
        //         <IconButton
        //             color="inherit"
        //             aria-label="open drawer"
        //             edge="start"
        //             // onClick={handleDrawerToggle}
        //             sx={{ mr: 2, display: { sm: 'none' } }}
        //             >
        //             <MenuIcon />
        //              </IconButton>
        //         </Toolbar>
        //     </AppBar>

        // </Box>
        // </div>

        <div className="header-heading">
            <h1>Tax Projection - Quarterly Estimates &#40;BETA&#41;</h1>
            <p>Note: This is for Individual tax return types only, other tax return types will not work. At this time, this projection application can only handle New York State
                and New York City tax jurisdictions. Please see contact information below if you have any questions, feature requests, and/or to report any bugs.<br/>
                You can find the technical documentation <a href="https://github.com/russelltheprogrammer/tax-projection-individual" target="_blank" rel="noreferrer"><b>HERE</b></a>.
            </p>
        </div>
     );
}
 
export default Header;