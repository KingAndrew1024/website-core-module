export interface IWebsiteStateError {
    after: 'GET' | 'UPDATE' | 'UNKNOWN';
    error: any;
}

export interface IWebsiteStateSuccess {
    after: 'GET' | 'UPDATE' | 'UNKNOWN';
}
