import {hackerNewsApi} from "../api";
import {IComment} from "../../interfaces/IComment";

const commentsService = hackerNewsApi.injectEndpoints({
    endpoints: (builder) => ({
        getCommentById: builder.query<IComment, number>({
            query: (id) => `/item/${id}.json`,
            transformResponse: (response: IComment & {kids: number[]}) => {
                return {...response, nestedComments: response.kids}
            }
        }),
    })
})

export const {useGetCommentByIdQuery} = commentsService