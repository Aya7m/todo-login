
let user=[]
let sigEmail=document.getElementById('sigEmail')
let sigPassword=document.getElementById('sigPassword')
 user=JSON.parse(localStorage.getItem('userInfo'))

function signIn(){
   if(sigEmail.value==''||sigPassword.value==''){
    document.getElementById('message').innerHTML=`<p class="text-center">all inputs is required</p>`
   }else{

    check()

   }
}

function check(){
    for(let i=0;i<user.length;i++){
        if(sigEmail.value==user[i].email&&sigPassword.value==user[i].password){
            let y=user[i].name;
            localStorage.setItem('userName',y)
            console.log(y);
            location.assign('../todo/todo.html')
            break;
        }
    }
}


// function checkUser() {
//     for (var i = 0; i < user.length; i++) {
//         if (singInEmail.value == user[i].email && signInPassword.value == user[i].password) {
//             var y = user[i].name;
//             localStorage.setItem('userName', y);
//             location.href = '../../home/index.html';
//             break;
//         }
//     }
// }