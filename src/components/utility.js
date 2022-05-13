export const List_View='List'
export const Chart_View='Chart'

export const padLeft=(n)=>{
    return n<10?'0'+n:n
}

export const range=(size,start)=>{
    const arr=[]
    for(let i=0;i<size;i++){
        arr.push(start+i)
    }
    return arr
}