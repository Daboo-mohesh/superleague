import React from 'react';
import {Link} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

//import config from './../../../config';

//import logo from './../../../assets/images/logo.svg';

const LogoSection = () => {

    return (
        <React.Fragment>
            <Link component={RouterLink} to={'/dashboard'}>
               <h2>SuperLeague</h2>
            </Link>
        </React.Fragment>
    );
};

export default LogoSection;
