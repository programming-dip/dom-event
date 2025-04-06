console.log('handler connected ....');

document.getElementById('btn-update-title')
    .addEventListener('click', function () {
        const pageTitleElement = document.getElementById('page-title');
        pageTitleElement.innerText = 'Updated page title text';
    })



document.getElementById('btn-login')
    .addEventListener('click', function () {
        const userInfoElement = document.getElementById('user-info');
        userInfoElement.innerText = 'user logged in successfully';
    })


// event listener
document.getElementById('btn-update-name')
    .addEventListener('click', function(){
        const inputText = document.getElementById('name-input').value;
        const nameP = document.getElementById('name');
        nameP.innerText = inputText;
    })