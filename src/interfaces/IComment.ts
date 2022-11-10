export interface IComment {
    by: string
    text: string
    nestedComments?: number[]
    dead?: boolean
    deleted?: boolean
}