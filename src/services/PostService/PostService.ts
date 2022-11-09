import {hackerNewsApi} from "../api";
import {IPost} from "../../interfaces/IPost";

const postService = hackerNewsApi.injectEndpoints({
    endpoints: (builder) => ({
        getLastPostsIds: builder.query<number[], void>({
            query: () => `/newstories.json`,
            transformResponse: (response: number[]) => {
                return response.slice(0, 100)
            }
        }),
        getPostById: builder.query<IPost, number>({
            query: (id) => `/item/${id}.json`,
        }),
    })
})

export const { useGetLastPostsIdsQuery, useGetPostByIdQuery } = postService