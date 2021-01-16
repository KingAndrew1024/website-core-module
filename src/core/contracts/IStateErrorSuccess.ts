export interface IWebsiteStateError {
    after: 'GET' | 'UPDATE' | 'UPLOAD_IMAGE' | 'DELETE_IMAGE' | 'UNKNOWN';
    error: any;
}

export interface IWebsiteStateSuccess {
    after: 'GET' | 'UPDATE' | 'UPLOAD_IMAGE' | 'DELETE_IMAGE' | 'UNKNOWN';
}
