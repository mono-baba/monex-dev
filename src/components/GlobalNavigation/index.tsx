const navItems = [
  {
    name: "3つの新機能",
    url: "#new-function",
    isActive: false,
    isScroll: false,
    subItems: [],
  },
  {
    name: "マネックス証券の特長",
    url: "#features-of-monex-securities",
    isActive: false,
    isScroll: true,
    subItems: [],
  },
  {
    name: "キャンペーン",
    url: "#campaign",
    isActive: false,
    isScroll: true,
    subItems: [],
  },
  {
    name: "口座開設までの流れ",
    url: "#steps-to-opening-an-account",
    isActive: false,
    isScroll: true,
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
          {navItems.map((navItem, index) => {
            return (
              <li key={index} className="item">
                <a
                  className={`link${navItem.isActive ? " is-active" : ""}${
                    navItem.isScroll ? " js-gnavi-link" : ""
                  }`}
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
                      {navItem.subItems.map((subItem, subIndex) => {
                        return (
                          <li key={subIndex} className="subItem">
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
        <div className="conversion-button">
          <h2 className="title">NISAをはじめるなら</h2>
          <a className="button-primary -account" href="https://open.monex.co.jp/open/servlet/ITS/account/AcOpenInfo2" target="_blank">
            まずは総合口座を開設（無料）
          </a>
          <h2 className="title">すでに総合口座をお持ちの方</h2>
          <a className="button-primary -nisa" href="https://info.monex.co.jp/nisa/apply.html" target="_blank">
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
