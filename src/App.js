import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import Home from './pages/Home';
import Story from './pages/Story';
import Team from './pages/Team';
import Contact from './pages/Contact';

import MobileNav from './pages/components/MobileNav.js';
function App() {

  const [isFirstMount, setIsFirstMount] = useState(true);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      isFirstMount && setIsFirstMount(false);
    });

    return unlisten;
  }, [history, isFirstMount]);

  //   if (document.readyState === "complete") {
  //     onPageLoad();
  //   } else {
  //     window.addEventListener("load", onPageLoad);
  //     return () => window.removeEventListener("load", onPageLoad);
  //   }
  // }, []);

  return (
    <>
      <MobileNav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact path="/"
            component={(props) => (
              <Home isFirstMount={isFirstMount} {...props} />
            )} />
          {/* <Route path="/story" component={Story} /> */}
          <Route path="/team" component={Team} />
          <Route path="/contact" component={Contact} />
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>

    </>
  );
}

export default App;
