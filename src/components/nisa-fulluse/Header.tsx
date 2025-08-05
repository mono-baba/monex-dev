import React from "react";

type NavigationItem = {
  id?: string;
  label: React.ReactNode;
  link?: string;
  targetBlank?: boolean;
  subNavigation?: {
    label: string;
    link: string;
    external?: boolean;
  }[];
};


const navigationItems: NavigationItem[] = [
  {
    label: "NISAのおさらい",
    subNavigation: [
      {
        label: "投資枠を使い切るメリット",
        link: "#feature01"
      },
      {
        label: "NISA取引の年内期限",
        link: "#feature02"
      },
      {
        label: "NISAの投資限度額",
        link: "#feature03"
      },
    ]
  },
  {
    label: "NISAの活用ヒント",
    subNavigation: [
      {
        label: "つみたて投信",
        link: "#tips01"
      },
      {
        label: "成長投信",
        link: "#tips02"
      },
      {
        label: "日本株",
        link: "#tips03"
      },
      {
        label: "外国株",
        link: "#tips04"
      },
    ]
  },
  {
    label: "よくある質問",
    link: "#faq",
  },
  {
    label: <>マネックス証券株式会社<br />コーポレートサイト</>,
    link: "#dummy-monex",
    id: "corporate",
    targetBlank: true,
  },
  {
    label: "現在のNISA投資額を確認",
    link: "#dummy-kakunin",
  },
]

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <div className="logo">
          <a className="link" href="/">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 325 100"
            >
              <g>
                <g>
                  <title>
                    <title>MONEX</title>
                  </title>
                  <path
                    className="st0"
                    d="M191.95,53.86c0,12.29-9.96,22.25-22.25,22.25s-22.25-9.96-22.25-22.25c0-12.29,9.96-22.25,22.25-22.25S191.95,41.57,191.95,53.86z M169.7,40.54c-7.36,0-13.32,5.96-13.32,13.32c0,7.36,5.96,13.32,13.32,13.32c7.36,0,13.32-5.96,13.32-13.32C183.02,46.5,177.06,40.54,169.7,40.54z"
                  />
                  <path
                    className="st0"
                    d="M140.64,32.6v42.52h-8.75V45.27h-0.12l-10.42,29.85h-7.21l-10.42-29.85h-0.12v29.85h-8.75V32.6h13.16l9.68,29.2h0.12l9.68-29.2H140.64z"
                  />
                  <polygon
                    className="st0"
                    points="324.51,75.12 309.69,53.01 323.29,32.6 312.52,32.6 304.27,46.05 296.02,32.6 285.25,32.6 298.85,53.01 284.04,75.12 294.95,75.12 304.27,60.29 313.59,75.12"
                  />
                  <path
                    className="st0"
                    d="M277.52,32.6v7.86h-22.36v9.2h20.66v7.26h-20.66v10.33h22.93v7.86h-32.28V32.6H277.52z"
                  />
                  <path
                    className="st0"
                    d="M208.04,32.6l19.26,28.06h0.12V32.6h8.75v42.52h-9.29l-19.26-28.06h-0.11v28.06h-8.75V32.6H208.04z"
                  />
                </g>
                <path
                  className="st0"
                  d="M72.17,33.55c0,17.76-9.66,24.26-16.49,28.28c-2.69,1.59-3.65,3.45-3.02,6.2c1.59,6.93,7.02,16.96,8.81,19.25c1.79,2.29,6.74,2.92,7.87,3.38c3.9,1.6,3.71,8.55-0.9,8.55c-2.24,0-20.01,0-21.17,0c-1.16,0-2.45-0.19-2.99-2.12c-0.32-1.16-6.11-23.98-6.32-24.79c-0.21-0.81-0.59-1.42-1.23-1.42c-1.32,0-2.01,2.22-2.92,4.4c-0.92,2.18-8.08,21.49-8.55,22.31c-0.47,0.82-1.16,1.62-2.44,1.62c-1.76,0-19.94,0-20.77,0c-2.47,0-2.19-2.17-0.76-3.05c1.29-0.79,4.11-1.42,5.95-2c3.04-0.97,7.32-3.73,9.71-8.85c2.39-5.12,3.67-10.16,4.05-12.54c0.57-3.54-1-6.38-3.41-7.52c-21.37-10.06-20.52-33.56-11-48.55C12.93,6.72,24.02,0,37.06,0C55.25,0,72.17,14.51,72.17,33.55z M36.63,8.27c-12.31,0-22.13,8.28-25.84,18.37C6.26,39,9.65,47.08,15.46,52.31c3.57,3.22,11.64,0.87,15.06-7.62c0.17-0.42,0.96-0.55,1.27-0.61c1.59-0.3,3.06-0.86,4.45-1.87c1.01-0.74,0.9-2.23-0.2-1.97c-0.9,0.21-2.99,1.18-4.05,1.49c-0.75,0.21-0.68-0.43-0.68-0.43s0.29-0.89,0.52-2.02c0.22-1.07-0.13-1.44-1.54-0.72c-0.64,0.33-1.76,0.88-2.23,0.88s-1.38-0.46-1.12-1.35c2.7-8.96,5.47-10.35,7.02-10.79c3.35-0.94,7.14,0.69,8.1,4.26c0.79,2.96,0.38,3.6,0.74,6.5c0.47,3.7-0.54,10.09,5.46,11.84c9.18,2.67,19.2-10.59,14.06-24.79C59.66,17.7,50.44,8.27,36.63,8.27z M33.45,34.64c0.73,0,1.32-0.59,1.32-1.32S34.18,32,33.45,32s-1.32,0.59-1.32,1.32S32.72,34.64,33.45,34.64z"
                />
              </g>
            </svg>
          </a>
        </div>
        <nav>
          <ul className="global-navigation">
            {navigationItems.map((item, i) => (
              <li key={i} className="item">
                {item.link ? (
                  <a
                    id={item.id}
                    href={item.link}
                    className="link"
                    {...(item.targetBlank
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                    {item.targetBlank && (
                      <img
                        src="/image/feature/nisa-fulluse/icon_new-window.svg"
                        width={16}
                        height={16}
                        decoding="async"
                        loading="eager"
                        alt="別タブで開く"
                      />
                    )}
                  </a>
                ) : (
                  <button type="button" id={item.id} className="label">
                    {item.label}
                  </button>
                )}

                {item.subNavigation && (
                  <ul className="sub-navigation">
                    {item.subNavigation.map((sub, j) => (
                      <li key={j} className="item">
                        <a
                          href={sub.link}
                          className="link"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
