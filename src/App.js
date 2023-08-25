import ig from '../src/assets/insta.png'
import fb from '../src/assets/fb.jpg'
import logo from '../src/assets/logo.jpg'
import appcl from './App.module.css'

function App() {
  return (
    <div className={appcl.App}>
      <div> 
        <a href='' target='_blank'><img className={appcl.lg} src={logo} alt=""/></a>
        <p>This website in under maintenance. Meanwhile, you can still get in contact with us! </p>
        <a href='https://www.instagram.com/dossombrerosbrighton/?hl=en-gb' target='_blank'><img className={appcl.socMedia} src={ig} alt=""/></a>
        <a href='https://www.facebook.com/DosSombrerosMexicanRestaurant?fref=ts' target='_blank'><img className={appcl.socMedia} src={fb} alt=""/></a>
        <p>For bookings, please send an email to: contactdossombreros@gmail.com or call us on 01273 911 881</p>
      </div>
    </div>
  );
}

export default App;
