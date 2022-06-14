import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        after: '',
        posts: []
    },
    reducers: {
        addPosts: (state, action) => {
            const {posts, after} = action.payload;
            state.after = after;
            state.posts = state.posts.concat(posts);
        }
    }
});

export const {addPosts} = postSlice.actions;
export const {selectAfter} = (state) => state.after;
export const {selectPosts} = (state) => state.posts;
export default postSlice.reducer;