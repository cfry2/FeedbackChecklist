// Remove click delay
import fastclick from 'fastclick';
import App from 'core/app';
import style from 'styles/style';
//import auth from 'native/auth';


if(document && document.body) {
    fastclick.attach(document.body);
}
new App();