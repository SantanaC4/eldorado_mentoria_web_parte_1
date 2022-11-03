export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    forks: number;
    language: string;
}
export type User = {
    id: number;
    public_repos: number;
    login: string,
    name: string;
    avatar_url: string;
    followers?: string;
    company?: string;
    bio: string;
}
export type APIResponse = Repository[]; 