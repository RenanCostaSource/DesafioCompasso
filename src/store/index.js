import { configureStore } from '@reduxjs/toolkit';

import user from './ducks/gituser';
import repos from './ducks/gituserrepos';
import stars from './ducks/gituserstars';
import fetcherror from './ducks/fetcherror';

export default configureStore({
    reducer:{
        user,
        repos,
        stars,
        fetcherror
    }
});