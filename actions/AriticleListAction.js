import fetchie from 'fetchie';


const PAGE_SIZE = 16;
const NEXT_PAGE = false;


export function fetchArticleList(params) {

    return dispatch => {
        params.pageSize = PAGE_SIZE;
        params.nextPage = NEXT_PAGE;

        dispatch(fetchArticleListStart(params));
        return fetchie
            .get('http://localhost:1234/articlelist/'+params.type)
            .query(params)
            .then(res => {
                console.log(res)
                dispatch(fetchArticleListSuccess(res,params.type));
            });
    };
}


export function fetchArticleListStart(params) {
    return {
        type: 'fetch-article-list',
        data: {
            params,
            isFetching: true
        }
    };
}

export function fetchArticleListSuccess(listData,listType) {
    return {
        type: 'fetch-article-list-success',
        data: {
            data:listData.list,
            isFetching: false,
            listType:listType
        }
    };
}