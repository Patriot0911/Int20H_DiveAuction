export const SERVER_URL = 'http://localhost:8000';
export const API_URL = `${SERVER_URL}/api/`;

export enum APIPathes {
    categories      = 'categories',
    profile         = 'me',
    fav             = profile+'/favorites',
    auctions        = 'auctions',
    active          = profile+'/'+auctions,
    googleAuth      = 'auth/oauth/google'
};

const fetchData = async (url: keyof typeof APIPathes) => {
    const path = APIPathes[url];
    if(path.startsWith(APIPathes.profile)) {
        const token = localStorage.getItem('token');
        if(!token)
            return;
        const auth = {
            'Authorization': `Bearer ${token}`
        };
        const response = await fetch(API_URL + path, {
            headers: {
                'Content-Type': 'application/json',
                ...auth
            }
        });
        const data = await response.json();
        return data;
    };
    const response = await fetch(API_URL + path);
    const data = await response.json();
    return data;
};
export const fetchLot = async (lotId: number) => {
    const response = await fetch(
        API_URL.concat(
            APIPathes.auctions,
            `/${lotId}`
        )
    );
    if(!response.ok)
        return undefined;
    const data = await response.json();
    return data;
};

export const getLotUrl = (id: string) => API_URL.concat(APIPathes.auctions, '/', id);
export const getAssetUrl = (path: string): string => SERVER_URL.concat(path);

export const findMe = async () => {
    const token = localStorage.getItem('token');
    if(!token)
        return;
    const auth = {
        'Authorization': `Bearer ${token}`
    };
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

export const postAuction = async (formData: FormData) => {
    const token = localStorage.getItem('token');
    const auth = {
        'Authorization': `Bearer ${token}`
    };
    const response = await fetch('http://localhost:8000/api/auctions',
        {
            method: 'POST',
            headers: {
                ...auth
            },
            body: formData
        }
    )
    const data = await response.json();
    return {
        status: response.ok,
        data: data && `/lots/${data.auction.id}`
    };
};

export default fetchData;
