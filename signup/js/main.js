

let inputName = document.getElementById('inputName')
let inputEmail = document.getElementById('inputEmail')
let inputPassword = document.getElementById('inputPassword')

let user = []
if(localStorage.getItem('userInfo')!=null){
    user=JSON.parse(localStorage.getItem('userInfo'))
}else{
    user=[]
}


function addUser() {
    if (inputName == '' || inputEmail == '' || inputPassword == '') {
        document.getElementById('message').innerHTML = `<p class="text-center">all inputs is required</p>`
    }
    else {
        let obj = {
            name: inputName.value,
            email: inputEmail.value,
            password: inputPassword.value
        }
        user.push(obj)
        console.log(user);
        location.href='../signIn/SignIn.html';
        localStorage.setItem('userInfo', JSON.stringify(user))
    }

}