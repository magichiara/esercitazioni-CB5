import "./header.scss";

export const Header = () => {
  const menuData = [
    { label: "HOME", href: "#home", id: 1 },
    { label: "MAGAZINE", href: "#magazine", id: 2 },
    { label: "COMMUNITY", href: "#community", id: 3 },
  ];

  return (
    <header className="Header">
      <div className="header-container">
        <div className="logo">🐼</div>
        <nav className="navbar">
          <ul role="menu">
            {menuData.map(function (data) {
              return (
                <li key={data.id} role="menuvoice">
                  <a href={data.href}>{data.label}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
