let photos=[];
let page=1;
const getPhotos=async()=>{
    document.getElementById("loader").classList.remove("show");

const response =await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=12&client_id=PahAp0zXIKhw7TJVkW0LGSDpeZuaP2WqbPk3ZQvMmD4`);
const data= await response.json();
// const div=document.getElementById("photos");
for(let photo of data){
    let img=document.createElement('img');
    img.setAttribute("src",photo.urls.regular);
    // img.src=photo.urls.regular;
    document.querySelector(".photos").insertAdjacentElement("beforeend",img);
}

}
getPhotos();
const getScrolledData=async()=>{
    // const el=document.createElement("h3");
    // el.innerHTML="Loading..."
    // document.querySelector(".container").insertAdjacentElement("afterend",el)
    document.getElementById("loader").classList.add("show");
    setTimeout(()=>{
        page=page+1;
        getPhotos()
    },300)


}
window.addEventListener("scroll",()=>{
    const {scrollHeight,scrollTop,clientHeight}=document.documentElement;
    if(scrollTop+clientHeight>=scrollHeight){
        console.log("bottom");
        getScrolledData()
    }
})