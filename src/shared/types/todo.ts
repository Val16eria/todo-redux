import { AxiosError } from 'axios';

export type TTodo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export enum TODO_RESULT_TYPE {
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE'
}

type TodoResultSuccess<T> = {
    type: TODO_RESULT_TYPE.SUCCESS,
    data: T
}

type TodoResultFailure = {
    type: TODO_RESULT_TYPE.FAILURE,
    data: string
}

export type TodoResult<T> = TodoResultSuccess<T> | TodoResultFailure;
export type BadResponse = AxiosError<{reason: string}>
