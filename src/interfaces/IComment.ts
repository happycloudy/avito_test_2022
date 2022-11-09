export interface IComment {
    text: string
    nestedComments?: number[]
    deleted: boolean | undefined
}