const Contents = () => {
  const getDataByNumber = (num: string) =>
    featureHeaderData.find((item) => item.number === num)
  const data01 = getDataByNumber("01")
  const data02 = getDataByNumber("02")
  const data03 = getDataByNumber("03")

  return (
    <>
      <section className="features">
        <div className="inner">
          <section className="feature">
            <FeatureHeader {...data01} />
            <div className="feature-body">
              <section>
                <p className="lead">
                  同じ値上がり率でも<br />早く・多くNISA枠を使うほど<br />利益や、利益に対する約20％の<br />非課税金額が大きくなります。
                </p>
                <div className="border-box">
                  <h3 className="heading">譲渡益<span>（株式や投資信託の売却益）</span>
                  </h3>
                  <div className="responsive-stack">
                    <figure>
                      <figcaption>
                        <span className="highlight-title">
                          5年間NISA枠を360万円ずつ使った場合の
                          <br />
                            評価益<span className="small">（年率5%）</span>
                        </span>
                      </figcaption>
                      <img
                        src="/image/feature/nisa-fulluse/img_feature-01_01.webp"
                        alt="5年間NISA枠を360万円ずつ使った場合の評価益（年率5%）の棒グラフ。NISA枠を早く・多く使っているため利益も非課税額も大きい。"
                        width={496}
                        height={203}
                        loading="lazy"
                        decoding="async"
                        className="h-w100"
                      />
                    </figure>
                    <figure>
                      <figcaption>
                        <span className="highlight-title">
                        10年間NISA枠を180万円ずつ使った場合の
                          <br />
                            評価益<span className="small">（年率5%）</span>
                        </span>
                      </figcaption>
                      <img
                        src="/image/feature/nisa-fulluse/img_feature-01_02.webp"
                        alt="10年間NISA枠を180万円ずつ使った場合の評価益（年率5%）の棒グラフ。NISA枠を遅く・少なく使っているため利益や非課税額は比較的小さい。"
                        width={496}
                        height={203}
                        loading="lazy"
                        decoding="async"
                        className="h-w100"
                      />
                    </figure>
                  </div>
                </div>
              </section>
              <section className="animation-spacing">
                <p className="lead">
                  同じ配当・分配利回りでも<br />早くに使い切りをしていれば、<br />配当所得や、利益に対する約20％の<br />非課税金額が大きくなります。
                </p>
                <div className="border-box">
                  <h3 className="heading">配当所得<span>（配当金や分配金）</span></h3>
                  <figure className="figure-responsive-stack">
                    <figcaption>
                      <span className="highlight-title">
                        5年間NISA枠を360万円ずつ使った場合（緑）と
                        <br />
                        10年間NISA枠を180万円ずつ使った場合（赤）の
                        <br />
                        配当金・分配金の累計額<span className="small">（利回り3%）</span>
                      </span>
                    </figcaption>
                    <img
                      src="/image/feature/nisa-fulluse/img_feature-01_03.webp"
                      alt="5年間NISA枠を360万円ずつ使った場合（緑）と10年間NISA枠を180万円ずつ使った場合（赤）の配当金・分配金の累計額（利回り3%）の棒グラフ"
                      width={640}
                      height={323}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </div>
              </section>
            </div>
          </section>
          <section className="feature">
            <FeatureHeader {...data02} />
            <div className="feature-body">
              <p className="lead-small">
                年内にNISA年間投資枠を利用するためには、受渡日が年内となるように買付注文する必要があります。
                <br />
                各商品の年内最終取引期限は次の通りです。
                <br />
                各商品の取引に注意事項は以下の「各商品の注意事項はこちら」をご確認ください。
              </p>
              <ul className="deadline-list">
                {feature02Data.map((item) => {
                  return (
                    <li>
                      <article className="deadline-article">
                        <span className="date">{item.date}</span>
                        <img
                          src={item.img.src}
                          alt={item.img.alt}
                          width={254}
                          height={150}
                          loading="lazy"
                          decoding="async"
                        />
                        <h3 className="title">{item.title}</h3>
                        <p>{item.text}</p>
                        {item.details && item.details}
                      </article>
                    </li>
                  )
                })}
              </ul>
              <a href="#dummy" className="h-mt80-pc">各商品の注意事項はこちら</a>
            </div>
          </section>
          <section className="feature">
            <FeatureHeader {...data03} />
            <div className="feature-body">
              <section>
                <p className="lead-small">
                  NISAでは、1年間の投資金額がつみたて投資枠、成長投資枠の2つの枠ごとに決まっていて、
                  <br />
                  さらに生涯の投資金額が決まっています。
                  <br />
                  この2つの枠は買付方法、投資対象商品によって分けられます。
                </p>
                <table>テーブル</table>
                <div className="animation-spacing responsive-stack">
                  <div>
                    <p>
                      年間投資枠はつみたて投資枠で120万円、成長投資枠で240万円の合計360万円です。
                    </p>
                    <p>
                      年間投資枠を上限まで使用することで、NISAの非課税で投資できるというメリットを最大限に享受できます。
                    </p>
                  </div>
                  <figure className="border-box">
                    <figcaption><span className="highlight-title">年間投資枠</span></figcaption>
                    <img
                      src="/image/feature/nisa-fulluse/img_feature-03_01.webp"
                      alt="年間360万円（つみたて投資枠年間120万円、成長投資枠年間240万円）"
                    />
                  </figure>
                </div>
                <section className="h-mt80-pc">
                  <p className="lead-small">
                    通常、株式や投資信託などの金融商品への投資で得られた利益には約20％の税金がかかりますが、
                    <br />
                    NISAを利用した投資では非課税となるメリットがあります。
                  </p>
                  <figure className="h-mt60-pc border-box">
                    <figcaption>
                      <span className="highlight-title">年間投資枠
                        資産運用で
                        <br />
                          10万円の利益が出た場合
                      </span>
                    </figcaption>
                    {/* TODO アニメーションだった場合は画像からテキスト＋svgなどへ修正 */}
                    <img
                      src="/image/feature/nisa-fulluse/img_feature-03_02.webp"
                      alt="例 投資をして10万円の収益が出た場合 NISAを利用しなかった場合：収益の約20%（※）が課税されるので受け取れるのは約8万円 NISAを利用していた場合：収益に課税されないので受け取れるのは約10万円（確定申告不要）"
                    />
                  </figure>
                </section>
              </section>
            </div>
          </section>
          <div className="feature-cta">
            <p className="lead">
              まずは
              <br />
              現在のNISA投資額を確認してみましょう。
            </p>
            <a href="#dummy">現在のNISA投資額を確認</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contents

interface FeatureHeaderProps {
  number: string
  title: React.ReactNode
  img: string
  description?: React.ReactNode
}
const FeatureHeader = (props: FeatureHeaderProps) => {
  const { number, title, img, description } = props
  return (
    <div className="feature-header">
      <div className="bg">
        <h2 className="title">
          <span>
            NISAのおさらい<span className="number">{number}</span>
          </span>
          <strong>{title}</strong>
        </h2>
          {description && <p className="description">{description}</p>}
      </div>
      <img
        src={img}
        alt="小判猫"
        className="img"
        width={334}
        height={460}
        decoding="async"
        loading="lazy"
      />
    </div>
  )
}
const featureHeaderData: FeatureHeaderProps[] = [
  {
    number: "01",
    title: (
      <>
        投資枠を使い切る
        <br />
        メリット
      </>
    ),
    description: (
      <>
        NISAの非課税の恩恵は、
        <br />
        “早く・多く”使った人ほど、
        <br />
        大きくなります。
      </>
    ),
    img: '/image/feature/nisa-fulluse/img_kobanneko_feature-01.svg',
  },
  {
    number: "02",
    title: (
      <>
        NISA取引の
        <br />
        年内期限
      </>
    ),
    img: '/image/feature/nisa-fulluse/img_kobanneko_feature-02.svg',
  },
  {
    number: "03",
    title: (
      <>
        NISAの
        <br />
        投資限度額
      </>
    ),
    img: '/image/feature/nisa-fulluse/img_kobanneko_feature-03.svg',
  },
]

const feature02Data = [
  {
    title: <>投資信託<sup>※1</sup></>,
    date: <>12月<br />中旬頃</>,
    img: {
      src: "/image/feature/nisa-fulluse/img_feature-02_01.webp",
      alt: "箱詰め猫",
    },
    text: <>銘柄によって申込期限が異なります！</>,
    details: <>
      <dl className="details">
        <dt>【クレカ積立設定】<sup>※2</sup></dt>
        <dd>
          dカード積立：
          <time dateTime="2025-11-07T23:59+09:00">11月7日23時59分まで</time>
        </dd>
        <dd>
          マネックスカード積立：
          <time dateTime="2025-12-05T23:59+09:00">12月5日23時59分まで</time>
        </dd>
      </dl>
    </>
  },
  {
    title: <>日本株<sup>※3</sup></>,
    date: <><time dateTime="2025-12-26T15:30+09:00">12/26<span className="weekday small offset-y">(金)</span><br /><span className="small offset-y">15時30分まで</span></time></>,
    img: {
      src: "/image/feature/nisa-fulluse/img_feature-02_01.webp",
      alt: "ちょんまげ",
    },
    text: <>1株から投資可能なワン株（単元未満株）も対応<br />→ワン株なら少額から投資できます！</>,
  },
  {
    title: <>米国株<sup>※4</sup></>,
    date: <><time dateTime="2025-12-25T03:00+09:00">12/25<span className="weekday small offset-y">(水)</span><br /><span className="small ">午前3時まで<br />（日本時間）</span></time></>,
    img: {
      src: "/image/feature/nisa-fulluse/img_feature-02_01.webp",
      alt: "ハンバーガー食べてる 旗立ってる",
    },
    text: <>事前に資金のご準備が必要です！<br />（資金振替、為替振替、NISA資金割当）</>,
  },
]
