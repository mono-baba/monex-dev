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
                <p>
                  同じ値上がり率でも早く・多くNISA枠を使うほど、
                  <wbr />
                  利益や、利益に対する約20％の非課税金額が大きくなります。
                </p>
                <h3>
                  <strong>譲渡益</strong>
                  <span>（株式や投資信託の売却益）</span>
                </h3>
                <div>
                  <figure>
                    <figcaption>
                      5年間NISA枠を360万円ずつ使った場合の
                      <wbr />
                      評価益<span>（年率5%）</span>
                    </figcaption>
                    <img
                      src="/image/feature/nisa-fulluse/img_feature-01_01.webp"
                      alt="5年間NISA枠を360万円ずつ使った場合の評価益（年率5%）の棒グラフ"
                      width={496}
                      height={203}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <figure>
                    <figcaption>
                      10年間NISA枠を180万円ずつ使った場合の
                      <wbr />
                      評価益<span>（年率5%）</span>
                    </figcaption>
                    <img
                      src="/image/feature/nisa-fulluse/img_feature-01_02.webp"
                      alt="10年間NISA枠を180万円ずつ使った場合の評価益（年率5%）の棒グラフ"
                      width={496}
                      height={203}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                </div>
              </section>
              <section>
                <p>
                  同じ配当・分配利回りでも早くに使い切りをしていれば、
                  <wbr />
                  配当所得や、利益に対する約20％の非課税金額が大きくなります。
                </p>
                <h3>
                  <strong>配当所得</strong>
                  <span>（配当金や分配金）</span>
                </h3>
                <figure>
                  <figcaption>
                    5年間NISA枠を360万円ずつ使った場合（緑）と
                    <wbr />
                    10年間NISA枠を180万円ずつ使った場合（赤）の
                    <wbr />
                    配当金・分配金の累計額<span>（利回り3%）</span>
                  </figcaption>
                  <img
                    src="/image/feature/nisa-fulluse/img_feature-01_03.webp"
                    alt="5年間NISA枠を360万円ずつ使った場合（緑）と10年間NISA枠を180万円ずつ使った場合（赤）の配当金・分配金の累計額（利回り3%）の棒グラフ"
                    width={496}
                    height={203}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              </section>
            </div>
          </section>
          <section className="feature">
            <FeatureHeader {...data02} />
            <div className="feature-body">
              <p className="lead">
                年内にNISA年間投資枠を利用するためには、受渡日が年内となるように買付注文する必要があります。
                <br />
                各商品の年内最終取引期限は次の通りです。
                <br />
                各商品の取引に注意事項は以下の「各商品の注意事項はこちら」をご確認ください。
              </p>
              <ul>
                <li>
                  <article className="topic-content">
                    <span className="topic-date">12月中旬</span>
                    <img
                      src="/image/feature/nisa-fulluse/img_feature-02_01.webp"
                      alt=""
                      width={254}
                      height={150}
                      loading="lazy"
                      decoding="async"
                      className="topic-thumb"
                    />
                    <h3 className="topic-title">投資信託</h3>
                    <p>銘柄によって申込期限が異なります！</p>
                    <dl className="topic-details">
                      <dt>【クレカ積立設定】</dt>
                      <dd>
                        dカード積立：
                        <time dateTime="2025-11-07T23:59">11月7日23時59分</time>
                        まで
                      </dd>
                      <dd>
                        マネックスカード積立：
                        <time dateTime="2025-12-05T23:59">12月5日23時59分</time>
                        まで
                      </dd>
                    </dl>
                  </article>
                </li>
              </ul>
              <a href="#dummy">各商品の注意事項はこちら</a>
            </div>
          </section>
          <section className="feature">
            <FeatureHeader {...data03} />
            <div className="feature-body">
              <section>
                <p className="lead">
                  NISAでは、1年間の投資金額がつみたて投資枠、成長投資枠の2つの枠ごとに決まっていて、
                  <br />
                  さらに生涯の投資金額が決まっています。
                  <br />
                  この2つの枠は買付方法、投資対象商品によって分けられます。
                </p>
                <table>テーブル</table>
                <div>
                  <figure>
                    <figcaption>年間投資枠</figcaption>
                    <img
                      src="/image/feature/nisa-fulluse/img_feature-03_01.webp"
                      alt="年間360万円（つみたて投資枠年間120万円、成長投資枠年間240万円）"
                    />
                  </figure>
                  <p>
                    年間投資枠はつみたて投資枠で120万円、成長投資枠で240万円の合計360万円です。
                  </p>
                  <p>
                    年間投資枠を上限まで使用することで、NISAの非課税で投資できるというメリットを最大限に享受できます。
                  </p>
                </div>
                <section>
                  <p className="lead">
                    通常、株式や投資信託などの金融商品への投資で得られた利益には約20％の税金がかかりますが、
                    <wbr />
                    NISAを利用した投資では非課税となるメリットがあります。
                  </p>
                  <figure>
                    <figcaption>
                      資産運用で
                      <br />
                      10万円の利益が出た場合
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
