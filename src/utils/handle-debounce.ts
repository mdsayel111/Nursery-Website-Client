// create handle debounce
export const handleDebounce = (fun: Function) => {
    let id: number;
    return (e: any) => {
        e.preventDefault()
        console.log(id)
        if (!id) {
            console.log("this1")
            id = setTimeout(() => fun(e),1000)
        } else {
            console.log("this 2")
            clearTimeout(id)
            id = setTimeout(() => fun(e),1000)
        }
    }

}