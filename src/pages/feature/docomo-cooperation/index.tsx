import GlobalNavigation from "../../../components/GlobalNavigation"
import GlobalNavigationFooter from "../../../components/GlobalNavigationFooter"
import FixedConversionButton from "../../../components/docomo-cooperation/FixedConversionButton"
import Disclaimer from "../../../components/Disclaimer"
import FeatureHead from "../../../components/FeatureHead"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function () {
  return (
    <>
      <FeatureHead featureName="docomo-cooperation" />
      <Header />
      <GlobalNavigation />
      <FixedConversionButton />
      <main>
        <MainVisual />
        <Lead />
        <NewFunction />
        <FeaturesOfMonex />
        <Campaign />
        <Step />
        <Conversion />
      </main>
      <GlobalNavigationFooter />
      <Disclaimer />
      <Footer />
      <div className="l-overlay"></div>
    </>
  )
}

const MainVisual = () => {
  return (
    <div className="mv">
      <h1 className="title">
        <img
          src="/image/feature/docomo-cooperation/img_title.svg"
          alt="今後のドコモとマネックスの機能連携について"
          width={532}
          height={341}
        />
      </h1>
      <span className="mv-image"></span>
      <span className="mv-image"></span>
      <span className="mv-image"></span>
      <span className="mv-image"></span>
      <span className="mv-image"></span>
      <span className="mv-image"></span>
    </div>
  )
}

const Lead = () => {
  return (
    <div className="lead-area">
      <img
        src="/image/feature/docomo-cooperation/logo_docomo-monex.svg"
        alt="docomo &#215; monex"
        className="logo"
        width={370}
        height={50}
        decoding="async"
        loading="lazy"
      />
      <p className="lead">
        2024年1月4日（木）より、
        <br className="only-sp" />
        マネックス証券はNTTドコモとの業務提携を開始し、
        <br className="only-pc" />
        今後お客様に最も選ばれる次世代の資産形成サービスを、
        <br className="only-tb only-pc" />
        NTTドコモと共同で創出・提供をしていく予定です。
      </p>
      <p className="lead">
        新NISAの開始に伴ってお客様から多数のご要望をいただいている
        <br className="only-tb only-pc" />
        dカード&reg;でのクレカ積立サービスをはじめとした
        <br className="only-pc" />
        主なドコモサービスとの機能連携の概要や提供予定時期についてご案内いたします。
      </p>
    </div>
  )
}

const NewFunction = () => {
  return (
    <section className="new-function section-area" id="js-slider">
        <div className="inner" id="new-function" data-slider-in>
          <div className="vertical-slider-wrapper">
            <h2 className="title-with-speech-bubble">
              <span className="speech-bubble">さらにお手軽に！</span>
              <span className="title">3つの新機能</span>
            </h2>
            <div className="vertical-slider" id="js-poinco">
              <input
                type="radio"
                name="slideshow"
                className="burette-button"
                id="slide01"
              />
              <input
                type="radio"
                name="slideshow"
                className="burette-button"
                id="slide02"
              />
              <input
                type="radio"
                name="slideshow"
                className="burette-button"
                id="slide03"
              />
              <label className="read-only" htmlFor="slide01">
                セクション01を表示する
              </label>
              <label className="read-only" htmlFor="slide02">
                セクション02を表示する
              </label>
              <label className="read-only" htmlFor="slide03">
                セクション03を表示する
              </label>
              <div className="vertical-slider-panel" data-slider-panel>
                <div className="title-block">
                  <img
                    src="/image/feature/docomo-cooperation/number_01.svg"
                    alt="01"
                    width={159}
                    height={117}
                    decoding="async"
                    loading="lazy"
                    className="function-number"
                  />
                  <p className="label">2024年夏頃 提供開始予定</p>
                  <h3 className="title heading-normal">
                    dカード&reg;のクレカ積立で
                    <br />
                    dポイントがたまる！
                  </h3>
                </div>
                <div className="image-block poinco-area-mini" data-sp-poinco>
                  <div className="shadow-box" data-sp-show>
                    <img
                      src="/image/feature/docomo-cooperation/img_function_01_monex-card.webp"
                      alt=""
                      width={436}
                      height={288}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_01_graph.svg"
                      alt=""
                      width={167}
                      height={130}
                    />
                    <div>
                      <img
                        src="/image/feature/docomo-cooperation/img_function_01_point-01.svg"
                        alt=""
                        width={512}
                        height={382}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-block">
                  <p>
                    dカードでの投資信託のクレカ積立が可能になり、
                    <br className="only-laptop" />
                    投信つみたてのカード決済ご利用金額に応じてdポイントがたまります。
                    <br />
                    ためたdポイントは、ショッピングはもちろん、
                    <br className="only-laptop" />
                    今後投資信託の購入にもつかえるようになります。
                  </p>
                  <p className="note-list">
                    ※dカード、dカード
                    GOLD&reg;のクレジットカード番号の冒頭4桁が、
                    <br className="only-desktop" />
                    [4363]、[5344]、[5365]のいずれかから始まるお客様が対象。
                  </p>
                </div>
              </div>
              <div className="vertical-slider-panel" data-slider-panel>
                <div className="title-block">
                  <img
                    src="/image/feature/docomo-cooperation/number_02.svg"
                    alt="02"
                    width={159}
                    height={117}
                    decoding="async"
                    loading="lazy"
                    className="function-number"
                  />
                  <p className="label">2024年秋頃 提供開始予定</p>
                  <h3 className="title heading-normal">
                    dポイントで投資信託が
                    <br />
                    購入できるように！
                  </h3>
                </div>
                <div className="image-block poinco-area-mini" data-sp-poinco>
                  <div className="shadow-box" data-sp-show>
                    <img
                      src="/image/feature/docomo-cooperation/img_function_02_read.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_02_dpoint.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_02_arrow01.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_02_yen.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_02_arrow02.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_02_graph.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                  </div>
                </div>
                <div className="text-block">
                  <p>
                    dポイント1ポイントを投資信託の買付代金1円として
                    <br className="only-desktop" />
                    ご利用いただけるようになります。
                    <br />
                    ご自身で貯めたdポイントさえあれば投資信託が購入できるので
                    <br className="only-desktop" />
                    気軽に投資を始められます。
                  </p>
                  <ul>
                    <li className="note-list">
                      ※金額指定のみが対象です。口数指定はご利用いただけません。
                    </li>
                    <li className="note-list">
                      ※積立、投資一任口座、iDeCo、コールセンター経由などは対象外です。
                    </li>
                  </ul>
                </div>
              </div>
              <div className="vertical-slider-panel" data-slider-panel>
                <div className="title-block">
                  <img
                    src="/image/feature/docomo-cooperation/number_03.svg"
                    alt="03"
                    width={159}
                    height={117}
                    decoding="async"
                    loading="lazy"
                    className="function-number"
                  />
                  <p className="label">2024年秋頃 提供開始予定</p>
                  <h3 className="title heading-normal">
                    投信保有で
                    <br />
                    dポイントがたまる！
                  </h3>
                </div>
                <div className="image-block poinco-area-mini" data-sp-poinco>
                  <div className="shadow-box" data-sp-show>
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_man.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_sparkling01.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_sparkling02.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_sparkling03.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_sparkling04.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_coin01.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_coin02.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_coin03.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                    <img
                      src="/image/feature/docomo-cooperation/img_function_03_coin04.svg"
                      alt=""
                      width={512}
                      height={382}
                    />
                  </div>
                </div>
                <div className="text-block">
                  <p>
                    マネックスポイントの代わりに、dポイントを貯められるようになります。
                    <br />
                    投資信託を持っているだけで、毎月、dポイントが貯まります。
                    <br />
                    さらにNISA口座でも貯まります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

const FeaturesOfMonex = () => {
  return (
    <section
      className="section-area features-of-monex"
      id="features-of-monex-securities"
    >
        <div className="inner">
          <h2 className="title-with-speech-bubble">
            <span className="speech-bubble">
              マネックス証券の
              <br className="only-sp" />
              ココがおトク！
            </span>
            <span className="title">
              マネックス証券の
              <br className="only-sp" />
              特長
            </span>
          </h2>
          <div className="contents">
            <section className="border-box">
              <div className="two-columns">
                <h3 className="heading-normal">
                  NISA口座の取引手数料
                  <br className="only-sp" />は<br className="only-pc" />
                  すべて無料！※
                </h3>
                <img
                  src="/image/feature/docomo-cooperation/img_feature_01.webp"
                  alt="外国株式売買手数料、国内株式売買手数料、投資信託売買手数料、0円"
                  width={860}
                  height={692}
                />
                <div className="details">
                  <p className="note-list">
                    ※マネックス証券のNISA口座ならすべての売買手数料が無料、またはキャッシュバックにより実質無料！
                    <br />
                    だから、低コストでNISAデビューができます！
                  </p>
                  <a
                    className="button-primary -details"
                    href="https://info.monex.co.jp/nisa/feefree.html"
                    target="_blank"
                  >
                    詳細はこちら
                  </a>
                </div>
              </div>
            </section>
            <section className="border-box">
              <div className="two-columns">
                <h3 className="heading-normal">
                  クレカ積立で
                  <br />
                  ポイントがたまる！
                </h3>
                <img
                  src="/image/feature/docomo-cooperation/img_feature_02.webp"
                  alt="貯まったポイントの使い道は色々！dポイントに交換、投資信託購入など"
                  width={860}
                  height={844}
                />
                <div className="details">
                  <p>
                    マネックスのクレジットカード積立はポイント還元率が最大1.1%！※1
                    <br className="only-pc" />
                    だからポイントがザクザクたまる！
                  </p>
                  <a
                    className="button-primary -details"
                    href="https://info.monex.co.jp/news/2023/20230928_02.html"
                    target="_blank"
                  >
                    詳細はこちら
                  </a>
                </div>
              </div>
              <div className="band-area">
                <p className="circle">さらに！</p>
                <p className="text">
                  <span>
                    NISA口座を新規（2023年10月以降）に開設された方は、
                  </span>
                  <strong>
                    NISA口座でのクレカ積立のポイント還元率が
                    <span className="image">
                      <picture>
                        <source
                          srcSet="/image/feature/docomo-cooperation/img_feature_max-point_sp.webp"
                          media="(max-width: 767px)"
                          width={485}
                          height={167}
                        />
                        <img
                          src="/image/feature/docomo-cooperation/img_feature_max-point.webp"
                          alt="最大2.2％！"
                          width={659}
                          height={229}
                        />
                      </picture>
                      <sub>※2</sub>
                      <span>（2024年9月30日まで）</span>
                      <img
                        className="credit-limit"
                        src="/image/feature/docomo-cooperation/text_credit-limit.svg"
                        alt="10万円まで"
                        width={74}
                        height={74}
                      />
                    </span>
                  </strong>
                </p>
              </div>
              <div className="conversion-button">
                <h2 className="title">NISAをはじめるなら</h2>
                <a
                  className="button-primary -account"
                  href="https://open.monex.co.jp/open/servlet/ITS/account/AcOpenInfo2"
                  target="_blank"
                >
                  まずは総合口座を開設
                  <wbr />
                  （無料）
                </a>
                <h2 className="title">すでに総合口座をお持ちの方</h2>
                <a
                  className="button-primary -nisa"
                  href="https://info.monex.co.jp/nisa/apply.html"
                  target="_blank"
                >
                  NISA口座を開設する
                  <wbr />
                  （無料）
                </a>
              </div>
            </section>
            <ol>
              <li className="note-list -multiple">
                <span>※1</span>
                ポイント還元率は、積立金額5万円以下の部分について1.1％、5万円超過～7万円以下の部分について0.6％、7万円超過～10万円以下の部分について0.2％です。
                <br />
                なお、1.1%分については、ご利用100円につき1ポイントのほか、1,000円につき1ポイントが加算されて貯まります。
                <br />
                0.6%分については1,000円につき6ポイント、0.2%分については1,000円につき2ポイントが加算されて貯まります。（申込みは原則1,000円以上1円単位。毎月100,000円まで）。
              </li>
              <li className="note-list -multiple">
                <span>※2</span>
                積立金額によらず、マネックス証券のNISA口座を2023年10月以降に開設された方は2023年10月2日以降のポイント還元率が2.2％に、
                <br />
                2023年9月までに開設された方は2024年1月4日以降のポイント還元率が1.5％になります。適用期間は2024年9月30日までです。
              </li>
            </ol>
            <section className="border-box">
              <div className="two-columns">
                <h3 className="heading-normal">
                  100円から、1株から、
                  <br />
                  気軽にスタートできる！
                </h3>
                <img
                  src="/image/feature/docomo-cooperation/img_feature_03.svg"
                  alt=""
                  width={430}
                  height={320}
                />
                <div className="details">
                  <p>
                    投信つみたてなら100円から新NISAを始められます！
                    <br />
                    さらに1株から株式を購入できるワン株（単元未満株）サービスもご用意。まとまった資金がなくても投資ができて、初心者の方でも始めやすい！
                  </p>
                  <a
                    className="button-primary -details"
                    href="https://info.monex.co.jp/wankabu/index.html"
                    target="_blank"
                  >
                    ワン株の
                    <br className="only-sp" />
                    詳細はこちら
                  </a>
                  <a
                    className="button-primary -details"
                    href="https://info.monex.co.jp/fund/tsumitate/merit.html"
                    target="_blank"
                  >
                    投信つみたての
                    <br className="only-sp" />
                    詳細はこちら
                  </a>
                </div>
              </div>
            </section>
            <section className="border-box">
              <div className="two-columns">
                <h3 className="heading-normal">
                  初心者に使いやすい
                  <br />
                  アプリの利用も可能！
                </h3>
                <img
                  src="/image/feature/docomo-cooperation/img_feature_04.svg"
                  alt=""
                  width={430}
                  height={332}
                />
                <div className="details">
                  <p>
                    アプリならではの便利機能を追加した、マネックス証券のサービスをスマートフォンで快適に利用・閲覧できる総合アプリ。
                    <br />
                    初心者でも使いやすくApp Storeで4.3の高評価！
                  </p>
                  <p className="note-list">※2024年4月現在</p>
                  <a
                    className="button-primary -details"
                    href="https://info.monex.co.jp/tradetool/monex-app/index.html"
                    target="_blank"
                  >
                    詳細はこちら
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
    </section>
  )
}

const Campaign = () => {
  return (
    <section className="section-area campaign" id="campaign">
        <div className="inner">
          <h2 className="title-with-speech-bubble">
            <span className="speech-bubble">
              キャンペーンで
              <br className="only-sp" />
              更におトクに！
            </span>
            <span className="title">
              dポイントがもらえる！
              <br />
              キャンペーン実施中！
            </span>
          </h2>
          <div className="contents">
            <section className="campaign-section">
              <h3 className="heading-band">キャンペーン</h3>
              <div className="two-columns">
                <h3 className="heading-normal">
                  【ドコモ提携記念】
                  <br />
                  マネックスで新NISAスタートキャンペーン
                </h3>
                <div className="campaign-images">
                  <a
                    href="https://info.monex.co.jp/lp/2404cp_dpoint_1.html?popup=n"
                    target="_blank"
                  >
                    <img
                      src="https://info.monex.co.jp/news/image/2024/20240401_01/dc_4campaing.png"
                      alt="マネックスで新NISAスタートドコモ提携記念dポイント最大4,200ptプレゼント！"
                      width={792}
                      height={444}
                    />
                  </a>
                </div>
                <div className="details">
                  <p>
                    クイズに正解＆新規口座開設等でもれなくdポイント4,200ptをプレゼント！
                  </p>
                  <p className="period-area">
                    キャンペーン期間：2024年<span>6</span>月<span>30</span>
                    日まで
                  </p>
                  <a
                    className="button-primary -campaign"
                    href="https://info.monex.co.jp/lp/2404cp_dpoint_1.html?popup=n"
                    target="_blank"
                  >
                    キャンペーン詳細はこちら
                  </a>
                </div>
              </div>
            </section>
            {/* <section className="campaign-section">
              <h3 className="heading-band">キャンペーン</h3>
              <div className="two-columns">
                <h3 className="heading-normal">
                  キャンペーンタイトル
                  <br />
                  テキストテキストテキスト
                </h3>
                <div className="campaign-images">
                  <img
                    src=""
                    alt="キャンペーンバナー設置予定"
                    width={524}
                    height={295}
                  />
                </div>
                <div className="details">
                  <p>
                    概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト概要文テキスト
                  </p>
                  <p className="period-area">
                    キャンペーン期間：YYYY年<span>MM</span>月<span>DD</span>
                    日（月）まで
                  </p>
                  <a
                    className="button-primary -campaign"
                    href="#dummy"
                    target="_blank"
                  >
                    キャンペーン詳細はこちら
                  </a>
                </div>
              </div>
            </section> */}
            <p className="note-list">
              ※キャンペーンの内容は、予告なく変更または中止となる場合がございますのであらかじめご了承ください。
            </p>
          </div>
        </div>
    </section>
  )
}

const Step = () => {
  return (
    <section className="section-area step" id="steps-to-opening-an-account">
        <div className="inner">
          <h2 className="title-with-speech-bubble">
            <span className="speech-bubble">
              カンタン<span>3</span>ステップ
            </span>
            <span className="title">口座開設までの流れ</span>
          </h2>
          <div className="contents">
            <ol className="step-area">
              <li>
                <div>
                  <span className="number">1</span>
                  <h3 className="title">メール登録</h3>
                  <img
                    src="/image/feature/docomo-cooperation/img_step_01.svg"
                    alt=""
                    width={129}
                    height={129}
                  />
                  <p>
                    メールアドレスを登録し、
                    <br />
                    案内メールを受け取る
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span className="number">2</span>
                  <h3 className="title">申込みフォーム入力</h3>
                  <img
                    src="/image/feature/docomo-cooperation/img_step_02.svg"
                    alt=""
                    width={129}
                    height={129}
                  />
                  <p>
                    案内に従って、
                    <br />
                    お客様情報を入力
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <span className="number">3</span>
                  <h3 className="title">本人確認</h3>
                  <img
                    src="/image/feature/docomo-cooperation/img_step_03.svg"
                    alt=""
                    width={129}
                    height={129}
                  />
                  <p>
                    本人確認書類の撮影、
                    <br />
                    本人認証を行う
                  </p>
                </div>
              </li>
            </ol>
            <section className="cautionary-section">
              <h3 className="title">書類の転送は不要です</h3>
              <p className="note">
                ※オンラインでお申込みできるのは、個人番号カードまたは運転免許証
                +
                マイナンバー通知カードをお持ちの方、日本国籍の成人で日本に納税をされている方です。
                <br />
                ※上記に該当しない方は
                <a
                  href="https://open.monex.co.jp/open/servlet/ITS/account/AcOpenInfo2#post-area"
                  target="_blank"
                >
                  郵送での口座開設
                </a>
                でお申込みください。※NISA口座の開設にはお時間がかかる場合があります。
              </p>
            </section>
          </div>
          <div className="conversion-area">
            <h3 className="title">
              最短で申込みの
              <br className="only-sp" />
              翌営業日に開設完了！
            </h3>
            <div className="conversion-button">
              <h2 className="title">NISAをはじめるなら</h2>
              <a
                className="button-primary -account"
                href="https://open.monex.co.jp/open/servlet/ITS/account/AcOpenInfo2"
                target="_blank"
              >
                まずは総合口座を開設（無料）
              </a>
              <h2 className="title">すでに総合口座をお持ちの方</h2>
              <a
                className="button-primary -nisa"
                href="https://info.monex.co.jp/nisa/apply.html"
                target="_blank"
              >
                NISA口座を開設する（無料）
              </a>
            </div>
          </div>
        </div>
    </section>
  )
}

const Conversion = () => {
  return (
    <aside
      className="conversion-button-area is-hidden"
      id="js-scrollFixButton"
    >
        <a
          className="button-primary -account-small"
          href="https://open.monex.co.jp/open/servlet/ITS/account/AcOpenInfo2"
          target="_blank"
        >
          総合口座を開設する
        </a>
        <a
          className="button-primary -nisa-small"
          href="https://info.monex.co.jp/nisa/apply.html"
          target="_blank"
        >
          NISA口座を開設する
        </a>
    </aside>
  )
}
