import CommonHeader from "./CommonHeader";

const panels = [
  {
    id: "slide1",
    label: "つみたて投信",
    content: (
      <>
        <h3>つみたて投資枠を<br />もっと使いたい場合</h3>
        <p>
          つみたて投資枠は長期の積立・分散投資に適した投資信託が対象のため、
          <br />
          投資初心者の方にもおすすめです。
          <br />
          積立金額や買付方法に条件があるため、計画的に使い切りましょう。
        </p>

        <section>
          <h4>つみたて投資枠はこんな人におすすめ！</h4>
          <div className="responsive-stack">
            <p className="speech-bubble-surrounded">NISAをきっかけに投資を始めてみました！</p>
            <p className="speech-bubble-surrounded">
              みんなやっているから始めてみたけれど、<br />何をしたらよいかわからない…
            </p>
          </div>
        </section>

        <section className="tsumitate-overview">
          <h4>つみたて投資枠</h4>
          <p className="formula">
            <span>月々<span className="number">10</span>万円</span>
            <img src="/image/feature/nisa-fulluse/icon_plus.svg" alt="+" width={21} height={21} loading="lazy" />
            <span><span className="number">12</span>ヶ月</span>
            <img src="/image/feature/nisa-fulluse/icon_equal.svg" alt="=" width={20} height={7} loading="lazy" />
            <span>年間<span className="number">120</span>万円</span>
          </p>
          <div className="bg-rounded gray">
            <ul className="bullet-list">
              <li>月々の積立金額が10万円と決まっている</li>
              <li>買付方法は積立のみ</li>
            </ul>
            <img src="/image/feature/nisa-fulluse/icon_arrow-right_red.svg" alt="→" width={40} height={40} loading="lazy" />
            <p><strong>計画的に使い切ることが大切！</strong></p>
          </div>
        </section>

        <section className="tsumitate-usage">
          <h4>
            <span className="small">今からでも間に合う！</span><br />
            つみたて投資枠の活用方法
          </h4>
          <div className="responsive-stack">
            <div className="responsive-stack bg-rounded gray">
              <figure>
                <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_01.svg" alt="" width={120} height={120} loading="lazy" />
                <figcaption>NISAを<br />年の途中で始めた方</figcaption>
              </figure>
              <figure>
                <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_02.svg" alt="" width={120} height={120} loading="lazy" />
                <figcaption>月々の積立金額が<br />10万円以下の方</figcaption>
              </figure>
            </div>
            <img src="/image/feature/nisa-fulluse/icon_triangle-right_red.svg" alt="" width={12} height={40} loading="lazy" />
            <div className="responsive-stack bg-rounded light-yellow">
              <figure>
                <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_03.svg" alt="" width={120} height={120} loading="lazy" />
                <figcaption>月々の積立金額を<br />10万円に変更する</figcaption>
              </figure>
              <figure>
                <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_04.svg" alt="" width={120} height={120} loading="lazy" />
                <figcaption>ボーナス月設定を<br />利用する</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </>
    )
  },
  {
    id: "slide2",
    label: "成長投信",
    content: <>スライド2の内容</>
  },
  {
    id: "slide3",
    label: "日本株",
    content: <>スライド3の内容</>
  },
  {
    id: "slide4",
    label: "外国株",
    content: <>スライド4の内容</>
  }
];

const Tips = () => {
  const renderNav = (position: "top" | "bottom") => (
    <div className={`slider-nav ${position}${position === "top" ? " h-mt80-pc" : ""}`} role="tablist" aria-labelledby="slider-title">
      {panels.map((panel, index) => (
        <button
          key={`${position}-${panel.id}`}
          id={`${panel.id}-tab-${position}`}
          role="tab"
          aria-selected={index === 0 ? "true" : "false"}
          aria-controls={panel.id}
        >
          {panel.label}
        </button>
      ))}
    </div>
  );

  return (
    <section id="tips" className="tips">
      <div className="inner">
        <CommonHeader
          title={<>NISAの<br />活用ヒント</>}
          img="/image/feature/nisa-fulluse/img_kobanneko_feature-01.svg"
        />

        {/* 上ナビ */}
        {renderNav("top")}

        {/* スライダー */}
        <div className="slider-wrapper">
          <div className="slider-track">
            {panels.map((panel, index) => (
              <section
                key={panel.id}
                id={panel.id}
                className="slider-panel"
                role="tabpanel"
                aria-labelledby={`${panel.id}-tab-top`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {panel.content}
              </section>
            ))}
          </div>
        </div>

        {/* 下ナビ */}
        {renderNav("bottom")}
      </div>
    </section>
  );
};

export default Tips;
