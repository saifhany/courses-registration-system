export interface Payload {
    id: String;
    profType?: String;
}
export declare function getPayLoad(payload: Payload): {
    id: String;
    profType: String | undefined;
};
