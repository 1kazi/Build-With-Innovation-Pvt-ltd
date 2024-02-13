export const GetApiData=async(url)=>{
    try{
        const responce=await fetch(url);
        const data=responce.json()
        return data;
    }catch(erroe){
        alert(erroe)
       return erroe;
    }
    

}
export const postApiData=async(url,info)=>{
    try{
        const responce=await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(info)
          });
        const data=responce.json()
        return data;
    }catch(erroe){
        alert(erroe)
       return erroe;
    }
    

}