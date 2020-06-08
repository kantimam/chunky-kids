import Searchbar from './Searchbar'
import { TextFieldProps } from '@material-ui/core';
const BASE = 'http://localhost:5000'



const getPreviewAPI = (value: string): Promise<Response> => {
    const search = encodeURIComponent(value);
    return fetch(BASE + '/recipes?s=' + search);
}

export default (props: TextFieldProps) => Searchbar({ ...props, getOptions: getPreviewAPI })
