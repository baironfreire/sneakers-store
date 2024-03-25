export type AdditionalElementsType = {
    token: string;
    channel: string;
    traceId: string;
    username: string;
    ip: string;
    os: string;
    groups: string[];
    roles: string[];
}
export interface OutputWithData<T> {
    code: string;
    message: string;
    datetime: string;
    data: T;
}
