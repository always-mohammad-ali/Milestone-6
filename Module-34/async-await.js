function fetchLoad(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

async function asyncLoad(){
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    console.log(data)

}

const arrowAsync = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json()
    console.log(data)
}

const arrowAsyncTryCatch = async() => {
    try{
         const res = await fetch('https://jsonplaceholder.typicode.com/comments')
         const data = await res.json()
         console.log(data)
    }
    catch(err){
        console.log(err)
    }
    
}