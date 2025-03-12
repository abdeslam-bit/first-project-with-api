function getPosts(id){
    fetch("https://jsonplaceholder.typicode.com/posts?userId="+id)
    .then(response=>{
        if(response.ok){
           return response.json()
        }
    })
    .then(requests=>{
        document.getElementById('allInside').innerHTML = ""
            for( let req of requests){
                let content = `
                    <div class="element">
                         <h3>${req.title}</h3>
                         <p>${req.body}</p>
                    </div>
                `
    
                document.getElementById('allInside').innerHTML += content
            }
    })
}


function getUsers(){
    return new Promise((resolve)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            if(response.ok){
               return response.json()
            }
        })
        .then(users =>{
            document.getElementById('usersOutside').innerHTML = ''
                for(let user of users){
                    let content = `
                        <div id="user" onclick ="any(${user.id}, this)">
                            <h3>${user.name}</h3>
                            <p>${user.email}</p>
                        </div>
                    `
                    document.getElementById('usersOutside').innerHTML += content
                    resolve()
                }
        })  
    })

  
}
getUsers()
.then(()=>{
    getPosts(1)
})
function any(id, element){
    getPosts(id)
    let elementId = document.querySelectorAll('#user')
    for(let e of elementId){
        e.classList.remove("user")
    }
    element.classList.add("user")
}
