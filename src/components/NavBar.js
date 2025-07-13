import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkItem = links.map((link, index) => {
    return (
      <a key={index} href={`#${link}`}>{link}</a>
    );
  })

  return <nav>{/* display an <a> tag for each link here */}
    {linkItem}
  </nav>;
}

export default NavBar;
