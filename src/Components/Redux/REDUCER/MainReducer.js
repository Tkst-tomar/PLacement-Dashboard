const initialData = {
    auth:false,
    userData:{},
    jobData:{}
}

const UserInfoData = (state = initialData, action)=>{
    const user = action.payload
    switch (action.type) {
        case 'USERLOGIN':
            return{
                ...state,
                auth:true,
                userData:user
            }
        case 'LOGOUT' :
            return{
                ...state,
                auth:false,
                userData:{}
            }
        case 'JOBINFO' :
            return{
                ...state,
                jobData:user
            }
        default: return state
    }
}

export default UserInfoData