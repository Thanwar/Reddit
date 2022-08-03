// import './style.css';
import './test.css';

import Logo from './logo.png'
import Trending from './imgages/trending.PNG'
import Post from './imgages/posts.PNG'




function App() {
  return (
    <div>
        <div id="nav">
          <img id="navimg" src={Logo} height="40"/>
          <h2 id="navtext">Reddit</h2>
          <input id="navsearch" type="text" placeholder="Search" />
          <button className="navbtn">Log In</button>
          <button className="navbtn">Sign UP</button>
        </div>
        <div>
          <h3 id="trendtxt">Trending today</h3>
          <img id="trendimg" src={Trending} height="200"/>
        </div>
        <div>
          <h3 id="trendtxt">Popular posts</h3>
          <img id="trendimg" src={Post} height="500"/>
        </div>
    </div>
  );
}

export default App;
