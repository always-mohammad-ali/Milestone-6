const myLoader = () => {
    return new Promise((resolve, reject)=>{
       const success = Math.random();

       if(success <= 0.5){
        resolve(success)
       }
       else{
        reject(success)
       }
    })
}

myLoader()
.then(data => console.log('Resolved data is', data))
.catch(err => console.log('Reject data is', err))
