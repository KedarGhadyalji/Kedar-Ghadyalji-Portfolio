/**
 * What: barrel export for the handful of assets imported by name across the
 * app (most images are instead imported directly by path from the data
 * files that use them).
 * Data from: static files in this folder (src/assets).
 * Used by: src/App.jsx (kirbyfloating, rocks, grass, caveBG) and
 * src/components/Navbar.jsx (menu, close) and Footer.jsx (email).
 */
import menu from "./menu.svg";
import close from "./close.svg";
import email from './email.png';
import kirbyfloating from './kirby.gif';
import rocks from './rocks.png';
import grass from './grass3.png';
import japanese_town from "./japanese_town.gif"

export {
  menu,
  close,
  email,
  kirbyfloating,
  rocks,
  grass,
  japanese_town,
};
