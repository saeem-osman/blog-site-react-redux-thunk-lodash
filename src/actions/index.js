import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'


export const fetchPostsAndUsers = () => async (dispatch, getState) =>{
    
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(fetchUsers(id)));
    
    
}



export const fetchPosts = () => async dispatch =>{
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}

// export const fetchUsers = function(id) { 
//     return _.memoize(async function (dispatch){
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type : 'FETCH_USERS', payload: response.data})
// })
// }



// export const fetchUsers = (id) => dispatch =>{
//     _fetchUsers(id,dispatch)
// }

// const _fetchUsers = _.memoize(async (id,dispatch) =>{
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USERS', payload: response.data})
// })

export const fetchUsers = (id) => async dispatch =>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: 'FETCH_USERS', payload: response.data})
}