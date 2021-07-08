import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../static/routes';

const Navigation: React.FC = (): JSX.Element => {
    return (
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_UP}>Home</Link>
            </li>
        </ul>
    );
};

export default Navigation;