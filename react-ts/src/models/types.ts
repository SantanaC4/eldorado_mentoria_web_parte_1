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
    login: string,
    name: string;
    avatar_url: string;
    followers: string;
    location: string;
    bio: string;
}
export type APIResponse = Repository[]; 