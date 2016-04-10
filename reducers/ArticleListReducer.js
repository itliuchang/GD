const initialState = {
    data: [],
    class:{data:[],params:[],isFetching:false},
    campus:{data:[],params:[],isFetching:false},
    province:{data:[],params:[],isFetching:false},
    country:{data:[],params:[],isFetching:false},
    Alldata:{'class':[],'campus':[],'province':[],'country':[]}
};
export default function seller(state = initialState, action = {}) {
    const data = action.data;

    switch (action.type) {
        case 'fetch-article-list':
            console.log(state)
            state[data.params.type].params=data.params
            state.isFetching=true
            return Object.assign({}, state, {});
        case 'fetch-article-list-success':
            console.log(data.data)
            if(state[data.listType].params.pageNum==1){
                state[data.listType].data=[].concat(data.data)
            }else{
                state[data.listType].data = state[data.listType].data.concat(data.data)
            }
            state.isFetching =data.isFetching
            console.log(state)
            return Object.assign({}, state,{});
        default:
            return state;
    }
}
