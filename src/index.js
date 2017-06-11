// Remove click delay
import fastclick from 'fastclick';
import App from 'core/app';
import style from 'styles/style';


if(document && document.body) {
    fastclick.attach(document.body);
}
//console.log('hello 1');
new App();