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
          <a className='navbar_navlinks' href='#'>Home</a>
          <a className='navbar_navlinks' href='#'>Blog</a>
          <a className='navbar_navlinks navbar_navlinks--selected' href='#'>About</a>
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
          <div className='about_paragraph'>Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Pharetra massa massa ultricies mi quis hendrerit dolor. Non blandit massa enim nec. Varius vel pharetra vel turpis nunc eget.</div>
          <div className='about_paragraph'>Mauris in aliquam sem fringilla ut morbi. Phasellus egestas tellus rutrum tellus pellentesque eu. Etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Pulvinar mattis nunc sed blandit libero. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Vulputate dignissim suspendisse in est ante in nibh mauris. </div>
          <div className='about_paragraph'>Pellentesque habitant morbi tristique senectus et netus. Enim sed faucibus turpis in eu. Feugiat pretium nibh ipsum consequat. Mauris ultrices eros in cursus turpis massa. Et molestie ac feugiat sed lectus. Quis risus sed vulputate odio ut enim blandit. Placerat in egestas erat imperdiet sed euismod nisi porta.</div>
        </div>
      </div>
      <div className='footer'>
        {/* <div className='footer_container'> */}
        <div className='footer_copyright'>© 2020 Travelize</div>
        <div className='footer_navlink-container'>
          <div className='footer_navlink'>Privacy Policy</div>
          <div className='footer_navlink'>Terms and Conditions</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
