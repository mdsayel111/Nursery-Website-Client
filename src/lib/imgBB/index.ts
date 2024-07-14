import axios from "axios"
import config from "../../config"

// create imgBB file uploader function
export const uploadSingleImg = async (img: File) => {
    // create image form data 
    const formData = new FormData()
    formData.append("image", img)
    const res = await axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${config.imgbbApiKey}`, formData)
    console.log(res)
    return (res.data as any).data.url
}

export const uploadMultipleImg = async (imgList: File[]) => {
    // img urls array
    const imgUrls = []
    for (let i = 0; i < imgList.length; i++) {
        const res = await uploadSingleImg(imgList[i])
        imgUrls.push(res)
    }
    return imgUrls
}