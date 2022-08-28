/* eslint-disable no-shadow-restricted-names */
import { CombinedState, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import _ from 'lodash';
import { RootState } from '../../app/store';
import { SERVER_BASE_API } from '../../utils/global';

export interface DemoState {
    isFetchingCategories: 'idle' | 'success' | 'error';
    categories: Array<any>;
    isFetchingCategoriesError?: string;

    isFetchingServices: 'idle' | 'success' | 'error';
    services: Array<any>;
    isFetchingServicesError?: string;

    /*
    // Data Sources
    users: any;
    owners: any;
    students: any;
    staffs: any;
    vehicles: any;
    classes: any;
    locations: any;
    transactions: any;
    ownerProfiles: any;
    userImageVault: any;
    calendars: any;

    // Auth

    userlogin: any;
    userName?: string;

    // States

    isAddingStudent: boolean;
    isShowingStudent: boolean;
    isAddingStaff: boolean;
    isShowingStaff: boolean;
    isAddingVehicle: boolean;
    isShowingVehicle: boolean;
    isShowingClass: boolean;
    isAddingClass: boolean;
    isShowingClassInformation: boolean;
    isAddingLocation: boolean;
    isShowingLocation: boolean;
    isAddingTransaction: boolean;
    isShowingTransaction: boolean;

    // async fetch status
    isFetchingOwnerProfiles: 'idle' | 'success' | 'error';
    isFetchingVehicles: 'idle' | 'success' | 'error';
    isFetchingTransactions: 'idle' | 'success' | 'error';

    isFetchingStudent: 'idle' | 'success' | 'error';
    isFetchingLocation: 'idle' | 'success' | 'error';
    isFetchingClass: 'idle' | 'success' | 'error';
    isFetchingVehicle: 'idle' | 'success' | 'error';
    isFetchingStaff: 'idle' | 'success' | 'error';

    isFetchingStudentError?: string;
    isFetchingTransactionError?: string;
    isFetchingLocationError?: string;
    isFetchingClassError?: string;
    isFetchingVehicleError?: string;
    isFetchingStaffError?: string;

    // UI controls
    menuOptionSelected: number;
    */
}

const initialState: DemoState = {
    isFetchingCategories: 'idle',
    categories: [],

    isFetchingServices: 'idle',
    services: []

    /*
    users: [],
    owners: [],
    students: [],
    staffs: [],
    vehicles: [],
    classes: [],
    locations: [],
    transactions: [],
    userlogin: {},
    ownerProfiles: {},
    userImageVault: [],
    calendars: [],

    isAddingStudent: false,
    isShowingStudent: false,
    isAddingStaff: false,
    isShowingStaff: false,
    isAddingVehicle: false,
    isShowingVehicle: false,
    isShowingClass: false,
    isAddingClass: false,
    isShowingClassInformation: false,
    isAddingLocation: false,
    isShowingLocation: false,
    isAddingTransaction: false,
    isShowingTransaction: false,

    isFetchingOwnerProfiles: 'idle',
    isFetchingVehicles: 'idle',
    isFetchingTransactions: 'idle',

    isFetchingStudent: 'idle',
    isFetchingLocation: 'idle',
    isFetchingClass: 'idle',
    isFetchingVehicle: 'idle',
    isFetchingStaff: 'idle',

    menuOptionSelected: 0
    */
};


export const fetchAllCategories = createAsyncThunk(
  '/api/categories',
  async (undefined, { rejectWithValue, getState }) => {
    console.log("fetching categories");
    try {
      const requestor = axios.create();
      const resp = await requestor.get(`${SERVER_BASE_API}/categories`);
      return resp.data;
    } catch (err) {
        const message = (err as any).response?.data?.message;
        return rejectWithValue(message);
    }
  }
);

export const fetchServicesByCategory = createAsyncThunk(
  '/api/services/category_id',
  async (category_id: number, { rejectWithValue, getState }) => {
    console.log("fetching services by category");
    try {
      const requestor = axios.create();
      const resp = await requestor.get(`${SERVER_BASE_API}/services/${category_id}`);
      return resp.data;
    } catch (err) {
        const message = (err as any).response?.data?.message;
        return rejectWithValue(message);
    }
  }
);

export const saveNewServiceRequest = createAsyncThunk(
  '/api/services-request/save',
  async (form_data: any, { rejectWithValue, getState }) => {
    console.log("saving new service request");
    try {
      console.log("form", form_data);
      const requestor = axios.create();
      const resp = await requestor.post(`${SERVER_BASE_API}/services-request/save`, {
        phone: form_data?.phone_number,
        date: form_data?.date,
        time: form_data?.time,
        first_name: form_data?.first_name,
        last_name: form_data?.last_name,
        customer_phone: form_data?.telephone,
        email: form_data?.email,
        street_address: form_data?.street,
        apartment_no: form_data?.apartment_no,
        city: form_data?.city,
        message: form_data?.message,
      });
      return resp.data;
    } catch (err) {
        const message = (err as any).response?.data?.message;
        return rejectWithValue(message);
    }
  }
);

export const saveNewFeedback = createAsyncThunk(
  '/feedback/save',
  async (form_data: any, { rejectWithValue, getState }) => {
    console.log("saving new feedback");
    try {
      console.log("form", form_data);
      const requestor = axios.create();
      const resp = await requestor.post(`${SERVER_BASE_API}/feedback/save`, {
        name: form_data?.name,
        message: form_data?.message,
      });
      return resp.data;
    } catch (err) {
        const message = (err as any).response?.data?.message;
        return rejectWithValue(message);
    }
  }
);

export const saveNewContactSubmission = createAsyncThunk(
  '/contact-submission/save',
  async (form_data: any, { rejectWithValue, getState }) => {
    console.log("saving new contact submission");
    try {
      console.log("form", form_data);
      const requestor = axios.create();
      const resp = await requestor.post(`${SERVER_BASE_API}/contact-submission/save`, form_data);
      return resp.data;
    } catch (err) {
        const message = (err as any).response?.data?.message;
        return rejectWithValue(message);
    }
  }
);

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    setIsFetchingLocation: (state, action: PayloadAction<any>) => {
    //   state.isFetchingLocation = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAllCategories.pending, (state) => {
      state.isFetchingCategories = 'idle';
    })
    .addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.isFetchingCategories = 'success';
      state.categories = action.payload;
    })
    .addCase(fetchAllCategories.rejected, (state, action) => {
      state.isFetchingCategories = 'error';
      state.isFetchingCategoriesError = JSON.stringify(action.payload);
    })
    .addCase(fetchServicesByCategory.pending, (state) => {
      state.isFetchingServices = 'idle';
    })
    .addCase(fetchServicesByCategory.fulfilled, (state, action) => {
      state.isFetchingServices = 'success';

      const result = [];

      action.payload.map(im => {
        result.push(im?.subcategory);
        im?.services?.map(service => result.push(service));
      });

      state.services = _.uniqBy(result, 'id');
    })
    .addCase(fetchServicesByCategory.rejected, (state, action) => {
      state.isFetchingServices = 'error';
      state.isFetchingServicesError = JSON.stringify(action.payload);
    })
  },
});

export const {
    setIsFetchingLocation
} = siteSlice.actions;

// export const getDemoUser = (state: RootState) => state.demo.userlogin;
// export const getUser = (state: RootState) => state.demo.userlogin;

export default siteSlice.reducer;
