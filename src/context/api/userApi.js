import { api } from "./index";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({
        url: "/users/search",
        params,
      }),
      providesTags: ["User"],
    }),
    signUser: build.mutation({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Post request
    createUser: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation, useSignUserMutation } =
  userApi;
