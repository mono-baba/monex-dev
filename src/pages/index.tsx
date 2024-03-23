import { Head } from "minista"
import GlobalNavigation from "../components/GlobalNavigation"
import GlobalNavigationFooter from "../components/GlobalNavigationFooter"
import FixedConversionButton from "../components/FixedConversionButton"
import Disclaimer from "../components/Disclaimer"

export default function () {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/assets/style.css" media="screen" />
      </Head>
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
    </>
  )
}

const MainVisual = () => {
  return (
    <>
      <div className="mv">
        <h1 className="title">
          <img
            src="/image/feature/test/img_title.svg"
            alt="今後のドコモとマネックスの機能連携について"
          />
        </h1>
        <span className="mv-image"></span>
        <span className="mv-image"></span>
        <span className="mv-image"></span>
        <span className="mv-image"></span>
        <span className="mv-image"></span>
        <span className="mv-image"></span>
      </div>
    </>
  )
}

const Lead = () => {
  return (
    <>
      <div className="lead-area">
        <img
          src="/image/feature/test/logo_docomo-monex.svg"
          alt="docomo ✕ monex"
          className="logo"
          width={370}
          height={50}
          decoding="async"
          loading="lazy"
        />
        <p className="lead">
          マネックス証券株式会社（以下、マネックス証券）は、
          <br className="only-pc" />
          2024年1月4日（木）より、
          <br className="only-sp" />
          株式会社 NTTドコモ（以下、NTTドコモ）との業務提携を開始し、
          <br className="only-pc" />
          今後お客様に最も選ばれる次世代の資産形成サービスを、NTTドコモと共同で創出・提供をしていく予定です。
        </p>
        <p className="lead">
          新NISAの開始に伴ってお客様から多数のご要望をいただいているdカード&reg;でのクレカ積立サービスをはじめとした
          <br className="only-pc" />
          主なドコモサービスとの機能連携の概要や提供予定時期についてご案内いたします。
        </p>
      </div>
    </>
  )
}

const NewFunction = () => {
  return (
    <>
      <section className="new-function section-area" id="js-vertical-slider">
        <div className="inner">
          <h2 className="title-with-speech-bubble">
            <span className="speech-bubble">さらにお手軽に！</span>
            <span className="title">4つの新機能</span>
          </h2>
          <div className="poinco">
            <img
              src="/image/feature/test/poinco-young.png"
              alt="ポインコ弟"
              className="poinco-young"
              id="js-poinco-young"
            />
            <img
              src="/image/feature/test/poinco-old.png"
              alt="ポインコ兄"
              className="poinco-old"
              id="js-poinco-old"
            />
            <ul className="vertical-slider contents">
              <li data-slider className="is-show">
                <div className="details">
                  <img
                    src="/image/feature/test/number_01.svg"
                    alt="01"
                    width={159}
                    height={117}
                    decoding="async"
                    loading="lazy"
                  />
                  <p className="label">2024年夏頃 提供開始予定</p>
                  <h3 className="title heading-normal">
                    dカード&reg;のクレカ積立で
                    <br />
                    dポイントがたまる！
                  </h3>
                  <div className="poinco-area-mini">
                    <div className="shadow-box"></div>
                  </div>
                  <div className="text">
                    <p>
                      dカードでの投資信託のクレカ積立が可能になり、
                      <br className="only-pc" />
                      投資つみたてのカード決済ご利用金額に応じてdポイントがたまります。
                      <br />
                      ためたdポイントは、ショッピングはもちろん、
                      <br className="only-pc" />
                      今後投資信託の購入にもつかえるようになります。
                    </p>
                    <p className="note-list">
                      ※dカード、dカード
                      GOLD&reg;のクレジットカード番号の冒頭4桁が、
                      <br className="only-pc" />
                      [4363]、[5344]、[5365]のいずれかから始まるお客様が対象。
                    </p>
                  </div>
                </div>
                <div className="poinco-area-mini">
                  <div className="shadow-box"></div>
                </div>
              </li>
              <li data-slider>
                <div className="details">
                  <img
                    src="/image/feature/test/number_02.svg"
                    alt="02"
                    width={159}
                    height={117}
                    decoding="async"
                    loading="lazy"
                  />
                  <p className="label">2024年秋頃 提供開始予定</p>
                  <h3 className="title heading-normal">
                    dポイントで投資信託が
                    <br />
                    購入できるように！
                  </h3>
                  <div className="poinco-area-mini">
                    <div className="shadow-box"></div>
                  </div>
                  <div className="text">
                    <p>
                      dポイント1ポイントを投資信託の買付代金1円として
                      <br />
                      ご利用いただけるようになります。
                      <br />
                      ご自身で貯めたdポイントさえあれば投資信託が購入できるので
                      <br />
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
                <div className="poinco-area-mini">
                  <div className="shadow-box"></div>
                </div>
              </li>
              <li data-slider>
                <div className="details">
                  <img
                    src="/image/feature/test/number_03.svg"
                    alt="03"
                    width={159}
                    height={117}
                    decoding="async"
                    loading="lazy"
                  />
                  <p className="label">2024年秋頃 提供開始予定</p>
                  <h3 className="title heading-normal">
                    投信保有で
                    <br />
                    dポイントがたまる！
                  </h3>
                  <div className="poinco-area-mini">
                    <div className="shadow-box"></div>
                  </div>
                  <div className="text">
                    <p>
                      マネックスポイントの代わりに、dポイントを貯められるようになります。
                      <br />
                      投資信託を持っているだけで、毎月、dポイントが貯まります。
                      <br />
                      さらにNISA口座でも貯まります。
                    </p>
                  </div>
                </div>
                <div className="poinco-area-mini">
                  <div className="shadow-box"></div>
                </div>
              </li>
            </ul>
            <div className="burette">
              <button
                type="button"
                className="is-active"
                data-burette="1"
              ></button>
              <button type="button" data-burette="2"></button>
              <button type="button" data-burette="3"></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const FeaturesOfMonex = () => {
  return (
    <>
      <section className="section-area features-of-monex">
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
                  すべて無料！
                </h3>
                <img
                  src="/image/feature/test/img_feature_01.png"
                  alt="外国株式売買手数料、国内株式売買手数料、投資信託売買手数料、0円"
                />
                <div className="details">
                  <p>
                    マネックス証券のNISA口座ならすべての売買手数料が無料！※
                    <br />
                    だから、低コストでNISAデビューができます！
                  </p>
                  <p className="note-list">
                    ※一部キャッシュバックによる実質無料も含みます。
                  </p>
                  <a
                    className="button-primary -details"
                    href="#"
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
                  src="/image/feature/test/img_feature_02.png"
                  alt="貯まったポイントの使い道は色々！他のポイントに交換、投資信託購入など"
                />
                <div className="details">
                  <p>
                    マネックスは主要ネット証券における
                    <br className="only-pc" />
                    クレジットカード積立の還元率は主要ネット証券No.1！※
                    <br />
                    だからポイントがザクザクたまる！
                  </p>
                  <a
                    className="button-primary -details"
                    href="#"
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
                      <img
                        src="/image/feature/test/img_feature_max-point.png"
                        alt="最大2.2％！"
                      />
                      <span>（2024年9月30日まで）</span>
                    </span>
                  </strong>
                </p>
              </div>
              <div className="conversion-button">
                <h2 className="title">NISAをはじめるなら</h2>
                <a className="button-primary -account" href="#" target="_blank">
                  まずは総合口座を開設
                  <wbr />
                  （無料）
                </a>
                <h2 className="title">すでに総合口座をお持ちの方</h2>
                <a className="button-primary -nisa" href="#" target="_blank">
                  NISA口座を開設する
                  <wbr />
                  （無料）
                </a>
              </div>
            </section>
            <section className="border-box">
              <div className="two-columns">
                <h3 className="heading-normal">
                  100円から、1株から、
                  <br />
                  気軽にスタートできる！
                </h3>
                <img src="/image/feature/test/img_feature_03.svg" alt="" />
                <div className="details">
                  <p>
                    投資信託なら100円から新NISAを始められます！
                    <br />
                    さらに1株から株式を購入できるワン株（単元未満株）サービスもご用意。まとまった資金がなくても投資ができて、初心者の方でも始めやすい！
                  </p>
                  <a
                    className="button-primary -details"
                    href="#"
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
                  初心者に使いやすい
                  <br />
                  アプリの利用も可能！
                </h3>
                <img src="/image/feature/test/img_feature_04.svg" alt="" />
                <div className="details">
                  <p>
                    アプリならではの便利機能を追加した、マネックス証券サービスをスマートフォンで快適に利用・閲覧できる総合アプリ。
                    <br />
                    初心者でも使いやすくAppStoreで4.3の高評価！
                  </p>
                  <a
                    className="button-primary -details"
                    href="#"
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
    </>
  )
}

const Campaign = () => {
  return (
    <>
      <section className="section-area campaign">
        <div className="inner">
          <h2 className="title-with-speech-bubble">
            <span className="speech-bubble">
              今ならキャンペーンで
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
              <h3 className="heading-band">キャンペーンその1</h3>
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
                    href="#"
                    target="_blank"
                  >
                    キャンペーン詳細はこちら
                  </a>
                </div>
              </div>
            </section>
            <section className="campaign-section">
              <h3 className="heading-band">キャンペーンその1</h3>
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
                    href="#"
                    target="_blank"
                  >
                    キャンペーン詳細はこちら
                  </a>
                </div>
              </div>
            </section>
            <p className="note-list">
              ※キャンペーンの内容は、予告なく変更または中止となる場合がございますのであらかじめご了承ください。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

const Step = () => {
  return (
    <>
      <section className="section-area step">
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
                  <img src="/image/feature/test/img_step_01.svg" alt="" />
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
                  <img src="/image/feature/test/img_step_02.svg" alt="" />
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
                  <img src="/image/feature/test/img_step_03.svg" alt="" />
                  <p>
                    本人確認書類の撮影、
                    <br />
                    本人認証を行う
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="conversion-area">
            <h3 className="title">
              最短で申込みの
              <br className="only-sp" />
              翌営業日に開設完了！
            </h3>
            <div className="conversion-button">
              <h2 className="title">NISAをはじめるなら</h2>
              <a className="button-primary -account" href="#" target="_blank">
                まずは総合口座を開設（無料）
              </a>
              <h2 className="title">すでに総合口座をお持ちの方</h2>
              <a className="button-primary -nisa" href="#" target="_blank">
                NISA口座を開設する（無料）
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const Conversion = () => {
  return (
    <>
      <aside className="conversion-button-area">
        <a className="button-primary -account-small" href="#" target="_blank">
          総合口座を開設する
        </a>
        <a className="button-primary -nisa-small" href="#" target="_blank">
          NISA口座を開設する
        </a>
      </aside>
    </>
  )
}
