import './bootstrap';
import 'animate.css';

const menu = document.querySelector('.burger-menu');
const mMenu = document.querySelector('.m-menu');
const mMenuClasses = mMenu.classList;

menu.addEventListener('click', () => {
    console.log('clicked');
    console.log(mMenuClasses);
    if(mMenuClasses.contains('animate__fadeIn')) {
        mMenuClasses.toggle('animate__fadeOut');
        mMenuClasses.toggle('animate__fadeIn');
    }
    else if(mMenuClasses.contains('animate__fadeOut')) {
        mMenuClasses.toggle('animate__fadeOut');
        mMenuClasses.toggle('animate__fadeIn');
    } else {
        mMenuClasses.toggle('animate__fadeIn');
    }

});