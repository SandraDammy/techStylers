import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Common/Navbar.jsx'
import Footer from './Components/Common/Footer.jsx'
import AboutUs from './Components/Page/AboutUs.jsx'
import Blog from './Components/Page/Blog.jsx'
import Contact from './Components/Page/Contact.jsx'
import Event from './Components/Page/Event.jsx'
import Gallery from './Components/Page/Event.jsx'
import Resources from './Components/Page/Resources.jsx'
import Home from './Components/Page/Home.jsx'


function App() {
  return (
    <div>
      <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/event" component={Event} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/resources" component={Resources} />

        </Switch>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
