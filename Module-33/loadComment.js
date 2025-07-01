const loadComment = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happended', error))
}

const loadComment2 = async() =>{

   try{
     const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    console.log(data)
   }
   catch(error){
    console.error('data load error')
   }
}

loadComment();