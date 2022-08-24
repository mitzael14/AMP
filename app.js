/* mobile toogle */

const toggleButton = document.getElementById('toggle-Button');
const naviList = document.getElementById('navi-list');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
})


/* splash page */

const spalsh = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(() => {
        spalsh.classList.add('display-none');
    }, 2000);
})

/* pop-up boxes */

function togglePopup(num){
    document.getElementById(`popup-${num}`).classList.toggle("active"); 
    }