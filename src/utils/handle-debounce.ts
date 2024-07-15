// create handle debounce
export const handleDebounce = (fun: Function) => {
    let id: number;
    return (e: any) => {
        e.preventDefault()
        
        if (!id) {
            id = setTimeout(() => fun(e), 1000)
        } else {
            clearTimeout(id)
            id = setTimeout(() => fun(e), 1000)
        }
    }

}