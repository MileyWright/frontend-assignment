import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">

      <div className='navbar'>
        <div className='navbar_title-container'>
          <div className='navbar_title'> Travelize</div>
          <div className='navbar_subtitle'>My traveling experiences</div>
        </div>
        <div className='navbar_navlinks-container'>
          <div className='navbar_navlinks'>Home</div>
          <div className='navbar_navlinks'>Blog</div>
          <div className='navbar_navlinks'>About</div>
        </div>
      </div>
      <img className='heroBackground' src={heroBackground} alt='herobackground'/>
      <div className='about'>
        <img className='about_headshot' src={headshot} alt='headshot'/>
        <div className='about_description'>
          <div className='about_title'>A little about me</div>
          <div className='about_paragraph'>Aliquam sem fringilla ut morbi tincidunt augue. Diam in arcu cursus euismod quis viverra nibh cras. Pulvinar mattis nunc sed blandit libero volutpat sed. Quis hendrerit dolor magna eget est lorem ipsum. Venenatis tellus in metus vulputate. In hendrerit gravida rutrum quisque. </div>
          <div className='about_paragraph'>Nunc id cursus metus aliquam. Nunc lobortis mattis aliquam faucibus purus in. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Fusce ut placerat orci nulla pellentesque. At augue eget arcu dictum. Sit amet est placerat in egestas erat. Porttitor leo a diam sollicitudin tempor id eu nisl.</div>
          <div className='about_paragraph'>Euismod in pellentesque massa placerat duis. Sed nisi lacus sed viverra tellus in hac habitasse platea. Eros donec ac odio tempor. Pellentesque id nibh tortor id aliquet lectus.</div>
          <div className='about_paragraph'></div>
        </div>
      </div>
      <div className='footer'>
        <div className='footer_copyright'>© 2020 Travelize</div>
        <div className='footer_navlink-container'>
          <div className='footer_navlink'>Privacy Policy</div>
          <div className='footer_navlink'>Terms and Conditions</div>
        </div>
      </div>
    </div>
  );
}

export default App;
