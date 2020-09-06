import React from "react";
import "./Header.css";
import { SearchOutlined , LanguageOutlined, ExpandMoreOutlined} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

const Header = () => {
  return (
    <header className="header">
      <img
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
