import Searchbar from './Searchbar'
const BASE = 'http://localhost:5000'



const getPreviewAPI = (value: string): Promise<Response> => {
    const search = encodeURIComponent(value);
    return fetch(BASE + '/recipes?s=' + search);
}

export default (props: any) => Searchbar({ ...props, getOptions: getPreviewAPI })
