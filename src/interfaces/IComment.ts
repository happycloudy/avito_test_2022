export interface IComment {
    text: string
    nestedComments?: number[]
    dead?: boolean
    deleted?: boolean
}