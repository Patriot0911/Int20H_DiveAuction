import { ILotData, ISearchOptions, TSetIsLoadingFunc, TSetLotsFunc } from "@/types";
import { fetchFavs, fetchLots } from "./api";

export const fetchAllItems = async (
    setLots: TSetLotsFunc,
    setIsLoading: TSetIsLoadingFunc,
    searchOptions?: ISearchOptions
) => {
    const lotsData: ILotData[] = await fetchLots(searchOptions);
    if(!lotsData)
        return setIsLoading(false);
    const favData = await fetchFavs()
    if(!favData) {
        setLots(lotsData);
    } else {
        const favLots = favData.map(
            item => item.auction.id
        );
        const lotsDataWithFavs: ILotData[] = lotsData.map(
            item => ({
                ...item,
                auction: {
                    ...item.auction,
                    isFav: favLots.includes(item.auction.id)
                }
            })
        );
        setLots(lotsDataWithFavs);
    };
    setIsLoading(false);
};

export const fetchFavItems = async (
    setLots: TSetLotsFunc,
    setIsLoading: TSetIsLoadingFunc
) => {
    const favData = await fetchFavs()
    if(!favData)
        setIsLoading(false);
    const favLotsList: ILotData[] = favData.map(
        item => ({
            ...item,
            auction: {
                ...item.auction,
                isFav: true
            }
        })
    );
    setLots(favLotsList);
    setIsLoading(false);
};
