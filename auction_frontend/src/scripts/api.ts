const API_URL = 'http://localhost:8000/api/';

enum APIPathes {
    categories = 'categories',
    profile = 'me',
    auctions = 'auctions'
};

const fetchData = async (url: keyof typeof APIPathes) => {
    const response = await fetch(API_URL + APIPathes[url]);
    const data = await response.json();
    return data;
};

export const getAssetUrl = (path: string) => 'http://localhost:8000' + path;

export const findMe = async () => {
    const token = localStorage.getItem('token');
    if(!token)
        return;
    const auth = {
        'Authorization': `Bearer ${token}`
    }
    const response = await fetch(
        API_URL + APIPathes.profile,
        {
            headers: {
                'Content-Type': 'application/json',
                ...auth
            }
        }
    );
    if(!response.ok)
        return undefined;
    const data = await response.json();
    return data;
};

export default fetchData;
