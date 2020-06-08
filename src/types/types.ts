export interface SearchbarProps {
    getOptions: (value: string) => Promise<Response>,
}