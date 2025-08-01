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
            <div role="tabpanel" id="slide1" aria-labelledby="tab1">
              <h3>つみたて投資枠をもっと使いたい場合</h3>
              <p>
                つみたて投資枠は長期の積立・分散投資に適した投資信託が対象のため、投資初心者の方にもおすすめです。
                <br />
                積立金額や買付方法に条件があるため、計画的に使い切りましょう。
              </p>
            </div>
            <div role="tabpanel" id="slide2" aria-labelledby="tab2" hidden>
              スライド2の内容
            </div>
            <div role="tabpanel" id="slide3" aria-labelledby="tab3" hidden>
              スライド3の内容
            </div>
            <div role="tabpanel" id="slide4" aria-labelledby="tab4" hidden>
              スライド4の内容
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tips
