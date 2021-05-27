import { createAsyncThunk } from '@reduxjs/toolkit';
import * as metamask from '../metamask';

export default createAsyncThunk('metamask/connect', async () => {
    return await metamask.connect();
});