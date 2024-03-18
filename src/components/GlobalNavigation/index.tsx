const navItems = [
  {
    name: "4つの新機能",
    url: "#new-features",
    isActive: false,
    subItems: [],
  },
  {
    name: "マネックス証券の特長",
    url: "#features-of-monex-securities",
    isActive: false,
    subItems: [],
  },
  {
    name: "キャンペーン",
    url: "#campaign",
    isActive: false,
    subItems: [],
  },
  {
    name: "口座開設までの流れ",
    url: "#steps-to-opening-an-account",
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
        <div className="button conversion-button">
          <h2 className="title">NISAをはじめるなら</h2>
          <a className="button" href="#" target="_blank">
            まずは総合口座を開設（無料）
          </a>
        </div>
        <div className="button conversion-button">
          <h2 className="title">すでに総合口座をお持ちの方</h2>
          <a className="button -nisa" href="#" target="_blank">
            NISA口座を開設する（無料）
          </a>
        </div>
      </div>
      <p className="close js-menuToggle">
        <span>CLOSE</span>
      </p>
    </div>
  )
}

export default GlobalNavigation
