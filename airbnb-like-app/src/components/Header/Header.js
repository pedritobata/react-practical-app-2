import React from "react";
import "./Header.css";
import { useHistory } from 'react-router-dom';
import { SearchOutlined , LanguageOutlined, ExpandMoreOutlined} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

const Header = () => {

 const history = useHistory();

  return (
    <header className="header">
      <img onClick={() => history.push("/")}
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        className="header__logo"
        alt="logo"
      />

      <div className="header__center">
        <input type="text" />
        <SearchOutlined  />
      </div>

      <div className="header__right">
        <p>Become a Host</p>
        <LanguageOutlined  />
        <ExpandMoreOutlined  />
        <Avatar  />
      </div>
    </header>
  );
};

export default Header;
