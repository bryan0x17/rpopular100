import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk(
    'post/loadPosts',
    async (after, thunkAPI) => {
        const options = {
            method: 'GET',
            
            body: JSON.stringify(after)
        };
        const url = 'https://www.reddit.com/r/popular.json';
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }
);

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        after: '',
        posts: []
    },
    reducers: {
        addPosts: (state, action) => {
            const { posts, after } = action.payload;
            state.after = after;
            state.posts = state.posts.concat(posts);
        }
    },
    extraReducers: {
        [loadPosts.fulfilled]: (state, action) => {
            state.after = action.payload.data.after;
            state.posts = action.payload.data.children; 
        }
    }
});



export const { addPosts } = postSlice.actions;
export const selectAfter = (state) => state.posts.after;
export const selectPosts = (state) => state.posts.posts;
export default postSlice.reducer;