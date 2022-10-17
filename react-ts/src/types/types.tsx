export interface Repository {
    id?: any | null,
    name: string,
    description: string,
    html_url: string,
    forks?: number,
    language: string
}
export interface APIResponse {
    results: Repository[], 
}