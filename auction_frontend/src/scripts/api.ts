import { ILotData } from "@/types";

export const SERVER_URL = 'http://localhost:8000';
export const API_URL = `${SERVER_URL}/api/`;

export enum APIPathes {
    categories      = 'categories',
    profile         = '/api/me',
    fav             = '/api/me/favorites',
    auctions        = '/api/auctions',
    active          = profile+'/'+auctions,
    googleAuth      = 'auth/oauth/google'
};

export const fetchLots = async () => {
    const path = SERVER_URL + APIPathes['auctions'];
    const response = await fetch(path);
    if(!response.ok)
        return;
    const data = await response.json();
    if(!data)
        return;
    return data;
};
export const fetchFavs = async (): Promise<ILotData[]> => {
    const token = localStorage.getItem('token');
    if(!token)
        return [];
    const path = SERVER_URL + APIPathes['fav'];
    const options = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
    const response = await fetch(path, options);
    if(!response.ok)
        return [];
    const data = await response.json();
    if(!data)
        return [];
    return data;
};

const fetchData = async (url: keyof typeof APIPathes) => { // replace & remove
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
    if(!response)
        return;
    const data = await response.json();
    return data;
};
export const fetchLot = async (lotId: number) => {
    const path = API_URL.concat(APIPathes.auctions, `/${lotId}`);
    const response = await fetch(path);
    if(!response.ok)
        return;
    const data = await response.json();
    return data;
};

export const getAssetUrl = (path: string): string => SERVER_URL.concat(path);

export const findMe = async () => {
    const token = localStorage.getItem('token');
    if(!token)
        return;
    const path = SERVER_URL + APIPathes.profile;
    const auth = {
        'Authorization': `Bearer ${token}`
    };
    const options = {
        headers: {
            'Content-Type': 'application/json',
            ...auth
        }
    };
    const response = await fetch(path, options);
    if(!response.ok)
        return;
    const data = await response.json();
    return data;
};

export const postAuction = async (formData: FormData) => {
    const token = localStorage.getItem('token');
    if(!token)
        return;
    const path = SERVER_URL + APIPathes['auctions'];
    const auth = {
        'Authorization': `Bearer ${token}`
    };
    const options = {
        method: 'POST',
        headers: {
            ...auth
        },
        body: formData
    };
    const response = await fetch(path, options);
    const data = await response.json();
    return {
        status: response.ok,
        data: data && `/lots/${data.auction.id}`
    };
};

export default fetchData;
