const navItems = [
  {
    name: "ホーム",
    url: "#",
    isActive: true,
    subItems: [],
  },
  {
    name: "子ページ(階層有り)",
    url: "#",
    isActive: false,
    subItems: [
      { name: "孫ページ", url: "#" },
      { name: "孫ページ", url: "#" },
      // 他の孫ページ...
    ],
  },
  {
    name: "子ページ",
    url: "#",
    isActive: false,
    subItems: [],
  },
  // 他のナビゲーションアイテム...
]

const GlobalNavigation = () => {
  return (
    <div className="l-gnavi">
      <nav className="container js-fixedMenu">
        <ul className="list">
          {/* liをnavItemsでmapする */}
          {navItems.map((navItem) => {
            return (
              <li className="item">
                <a
                  className={`link ${navItem.isActive ? "is-active" : ""}`}
                  href={navItem.url}
                >
                  {navItem.name}
                </a>
                {navItem.subItems.length > 0 && (
                  <div className="subBox">
                    <ul className="subList">
                      <li className="subItem -title">
                        <a className="subLink" href="#">
                          孫ページ
                        </a>
                      </li>
                      {navItem.subItems.map((subItem) => {
                        return (
                          <li className="subItem">
                            <a className="subLink" href={subItem.url}>
                              {subItem.name}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="buttons js-fixed-button">
        <div className="button">
          <a className="conversion" href="#" target="_blank">
            コンバージョン1
          </a>
        </div>
        <div className="button">
          <a className="conversion" href="#" target="_blank">
            コンバージョン2
          </a>
        </div>
        <div className="button">
          <a className="conversion -establishment" href="#" target="_blank">
            口座開設
          </a>
        </div>
      </div>
      <p className="close js-menuToggle">
        <span>CLOSE</span>
      </p>
      <div className="l-overlay"></div>
    </div>
  )
}

export default GlobalNavigation
