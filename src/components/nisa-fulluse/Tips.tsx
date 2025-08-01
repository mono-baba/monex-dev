import CommonHeader from "./CommonHeader"

const Tips = () => {
  return (
    <>
      <section className="tips">
        <div className="inner">
          <CommonHeader
            // number={<>枠をどう使う？</>}
            title={<>NISAの<br />活用ヒント</>}
            img="/image/feature/nisa-fulluse/img_kobanneko_feature-01.svg"
          />
          <div
            className="h-mt80-pc slider-nav"
            role="tablist"
            aria-labelledby="slider-title"
          >
            <button
              role="tab"
              aria-selected="true"
              aria-controls="slide1"
              id="tab1"
            >
              つみたて投信
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="slide2"
              id="tab2"
            >
              成長投信
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="slide3"
              id="tab3"
            >
              日本株
            </button>
            <button
              role="tab"
              aria-selected="false"
              aria-controls="slide4"
              id="tab4"
            >
              外国株
            </button>
          </div>
          <div className="slider-content">
            <section role="tabpanel" id="slide1" aria-labelledby="tab1">
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
                <p>NISAをきっかけに投資を始めてみました！</p>
                <p>みんなやっているから始めてみたけれど、<br />何をしたらよいかわからない…</p>
              </section>
              <section>
                <h4>つみたて投資枠</h4>
                <p>
                  <span>月々<span className="number">10</span>万円</span>
                  <span>×</span>
                  <span><span className="number">12</span>ヶ月</span>
                  <span>=</span>
                  <span>年間<span className="number">120</span>万円</span>
                </p>
                <div>
                  <ul>
                    <li>月々の積立金額が10万円と決まっている</li>
                    <li>買付方法は積立のみ</li>
                  </ul>
                  <span>→</span>
                  <p>計画的に使い切ることが大切！</p>
                </div>
              </section>
              <section>
                <h4>
                  <span className="small">今からでも間に合う！</span><br />
                  つみたて投資枠の活用方法
                </h4>
                <div>
                  <figure>
                    <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_01.svg" alt="" width={120} height={120} decoding="async" loading="lazy" />
                    <figcaption>NISAを<br />年の途中で始めた方</figcaption>
                  </figure>
                  <figure>
                    <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_02.svg" alt="" width={120} height={120} decoding="async" loading="lazy" />
                    <figcaption>月々の積立金額が<br />10万円以下の方</figcaption>
                  </figure>
                </div>
                <div>
                  <figure>
                    <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_03.svg" alt="" width={120} height={120} decoding="async" loading="lazy" />
                    <figcaption>月々の積立金額を<br />10万円に変更する</figcaption>
                  </figure>
                  <figure>
                    <img src="/image/feature/nisa-fulluse/img_tips-tab-01_icon_04.svg" alt="" width={120} height={120} decoding="async" loading="lazy" />
                    <figcaption>ボーナス月設定を<br />利用する</figcaption>
                  </figure>
                </div>
              </section>
            </section>
            <section role="tabpanel" id="slide2" aria-labelledby="tab2" hidden>
              スライド2の内容
            </section>
            <section role="tabpanel" id="slide3" aria-labelledby="tab3" hidden>
              スライド3の内容
            </section>
            <section role="tabpanel" id="slide4" aria-labelledby="tab4" hidden>
              スライド4の内容
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tips
