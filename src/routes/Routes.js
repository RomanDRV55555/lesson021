import React from 'react';

import { Route, Navigate, Routes as ReactRouterRoutes } from 'react-router-dom';
import Nav from '../components/Nav';
import {NotFoundPage} from '../pages/NotFound.page';
import { SignInPage } from '../pages/SignIn.page';
import { SignUpPage } from '../pages/SignUp.page';

const Routes = () => {
    return (
        <div>
            <Nav />
            <ReactRouterRoutes>
                <Route path='/' element={<Navigate to="/signin" />} ></Route>
                <Route path='/signin' element={<SignInPage/>}></Route>
                <Route path='/signup' element={<SignUpPage/>}></Route>
                <Route path='*' element={<NotFoundPage/>}></Route>
            </ReactRouterRoutes>
        </div>
    );
};

export default Routes;