import React from "react";
import { Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { CharacterList } from "./components/CharacterList";
import { Navigation } from "./components/Navigation";
import { WelcomePage } from "./components/WelcomePage";


export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <div>
      <Navigation/>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characterlist" component={CharacterList} />
      </div>
    </main>
  );
}
