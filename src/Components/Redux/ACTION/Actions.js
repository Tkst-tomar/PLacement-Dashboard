export const USerInfo = (data)=>{
    return{
        type:'USERLOGIN',
        payload:data
    }
}

export const SelectedJobInfo = (data)=>{
    return{
        type:'JOBINFO',
        payload:data
    }
}

export const LogOut = ()=>{
    return{
        type:'LOGOUT'
    }
}

export const Scroll = (scrollPosition)=>{
    return{
        type:'SCROLL_DOWN',
        payload:scrollPosition
    }
}