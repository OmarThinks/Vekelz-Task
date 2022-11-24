import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      employerImage:
        "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png",
      employerName: "Facebook",
      title: "Lead Product Manager",
      jobType: "Full Time",
      salary: "4500",
    },
    {
      employerImage:
        "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
      employerName: "Spotify",
      title: "Product Designer",
      jobType: "Full Time",
      salary: "4500",
    },
    {
      employerImage:
        "https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png",
      employerName: "Netflix",
      title: "Visual Designer",
      jobType: "Full Time",
      salary: "4500",
    },
    {
      employerImage:
        "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19750.png",
      employerName: "Facebook",
      title: "Lead Product Manager",
      jobType: "Full Time",
      salary: "4500",
    },
    {
      employerImage:
        "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
      employerName: "Spotify",
      title: "Product Designer",
      jobType: "Full Time",
      salary: "4500",
    },
    {
      employerImage:
        "https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png",
      employerName: "Netflix",
      title: "Visual Designer",
      jobType: "Full Time",
      salary: "4500",
    },
  ],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
});

export const selectPosts = (state) => state.posts.value;

export default postsSlice.reducer;
