import React from 'react';
import Clock from "./clock";

export const Header = () =>
  <React.Fragment>
    <header>
      <h2>News App</h2>
      <Clock/>
      {/*<form className="" autocomplete="on" onSubmit="findNews(); return false">*/}
        {/*<input type="text" name="q" className="search" placeholder="Tramp" value=""/>*/}
        {/*<input type="submit" name="" value="submit" className="submit-button"/>*/}
      {/*</form>*/}
    </header>
  </React.Fragment>;