import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const URL_SERV = 'http://localhost:3002'

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async({page=1, order='asc', limit=10},{ getState })=>{
        //http://localhost:3002/posts?_page=2&_limit=6&_order=desc&_sort=id
        try{
            const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
            const prevState = getState().posts

            return {
                items:[...prevState.articles.items,...response.data],
                page: page,
                end: response.data.length === 0 ? true:false
            }
        }catch(error){
            throw error
        }
    }
)

export const fetchPostById = createAsyncThunk(
    'posts/fetchPostById',
    async(id)=>{
        try{
            const response = await axios.get(`${URL_SERV}/posts/${id}`);
            return response.data;
        } catch(error){
            throw error;
        }
    }
)
