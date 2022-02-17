import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './css/style.scss';

// import './charts/ChartjsConfig';

// Import pages
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';
import PageNotFound from './pages/utility/PageNotFound';

import Header from './pages/components/Header.js';
import MobileNav from './pages/components/MobileNav.js';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  // mobile hamburger menu
  // const [navToggle, setNavToggle] = useState(false);
  // function handleClick(isOpen) {
  //   setNavToggle(!navToggle);
  // }

  return (
    <>
      <Header />
      <MobileNav />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300} unmountOnExit>
          <Switch location={location}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
