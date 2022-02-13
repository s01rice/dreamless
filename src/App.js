import React, { useEffect, useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import './css/style.scss';

// import './charts/ChartjsConfig';

// Import pages
import Home from './pages/Home';
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
  const [navToggle, setNavToggle] = useState(false);
  function handleClick(isOpen) {
    setNavToggle(!navToggle);
  }

  return (
    <>
      <Header handleClick={handleClick} />
      <MobileNav nav={navToggle} />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
