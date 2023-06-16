import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk('contact/get', async () => {
  try {
    const response = await axios.get(
      'https://648ba28717f1536d65eb1acd.mockapi.io/contacts?sortBy=name'
    );
    return response.data;
  } catch (err) {
    return err;
  }
});

export const postContacts = createAsyncThunk('contact/post', async data => {
  const newContact = {
    name: data.name,
    phone: data.number,
    createdAt: Date.now(),
  };
  try {
    const response = await axios.post(
      'https://648ba28717f1536d65eb1acd.mockapi.io/contacts',
      newContact
    );
    return response.data;
  } catch (err) {
    return err;
  }
});

export const deleteContacts = createAsyncThunk('contact/delete', async id => {
  try {
    const response = await axios.delete(
      `https://648ba28717f1536d65eb1acd.mockapi.io/contacts/${id}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
});
