export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    forks: number;
    language: string;
}
export type APIResponse = Repository[]; 