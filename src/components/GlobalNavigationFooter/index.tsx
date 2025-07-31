const navItems = [
  {
    name: "3つの新機能",
    url: "#new-function",
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

const GlobalNavigationFooter = () => {
  return (
    <div className="l-gnavi -migration">
      <nav className="container">
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
      <button className="pageTop js-pageTop">
        <img
          src="/image/feature/common/btn_pagetop_01.png"
          alt="トップへ戻る"
        />
      </button>
    </div>
  )
}

export default GlobalNavigationFooter
