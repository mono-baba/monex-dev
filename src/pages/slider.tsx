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
        <Slider />
      </main>
      <GlobalNavigationFooter />
      <Disclaimer />
    </>
  )
}

const Slider = () => {
  return (
    <>
      <section>
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
        <br />
        でもでもでもでもでもでもでもでもでもでもでもでもでも
      </section>
      <section className="new-function section-area" id="new-function">
        <div className="inner">
          <h2 className="title-with-speech-bubble">
            <span className="speech-bubble">さらにお手軽に！</span>
            <span className="title">3つの新機能</span>
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
            <div className="test-vertical-slider">
              <input
                type="radio"
                name="slideshow"
                className="test-burette-button"
                id="slide01"
                checked
              />
              <input
                type="radio"
                name="slideshow"
                className="test-burette-button"
                id="slide02"
              />
              <input
                type="radio"
                name="slideshow"
                className="test-burette-button"
                id="slide03"
              />
              <div className="test-vertical-slider-panels">
                <label htmlFor="slide01" className="test-vertical-slider-panel">
                  <div className="title-block">
                    <img
                      src="/image/feature/test/number_01.svg"
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
                  <div className="image-block poinco-area-mini">
                    <div className="test-shadow-box">
                      <img
                        src="/image/feature/test/img_function_01_monex-card.png"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_01_graph.svg"
                        alt=""
                      />
                      <div>
                        <img
                          src="/image/feature/test/img_function_01_point-01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-block">
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
                </label>
                <label htmlFor="slide02" className="test-vertical-slider-panel">
                  <div className="title-block">
                    <img
                      src="/image/feature/test/number_02.svg"
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
                  <div className="image-block poinco-area-mini">
                    <div className="test-shadow-box">
                      <img
                        src="/image/feature/test/img_function_02_read.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_02_dpoint.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_02_arrow01.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_02_yen.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_02_arrow02.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_02_graph.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-block">
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
                </label>
                <label htmlFor="slide03" className="test-vertical-slider-panel">
                  <div className="title-block">
                    <img
                      src="/image/feature/test/number_03.svg"
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
                  <div className="image-block poinco-area-mini">
                    <div className="test-shadow-box">
                      <img
                        src="/image/feature/test/img_function_03_man.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_z01.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_z02.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_z03.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_sparkling01.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_sparkling02.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_sparkling03.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_sparkling04.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_coin01.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_coin02.svg"
                        alt=""
                      />
                      <img
                        src="/image/feature/test/img_function_03_coin03.svg"
                        alt=""
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
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
