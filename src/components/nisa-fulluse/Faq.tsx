import CommonHeader from "./CommonHeader"

const Faq = () => {
  return (
    <>
      <section id="faq" className="faq">
        <div className="inner">
          <CommonHeader
            title="よくある質問"
            img="/image/feature/nisa-fulluse/img_kobanneko_feature-01.svg"
          />
          <ul className="h-mt80-pc faq-list">
            {faqData.map((item, index) => (
              <li key={index}>
                <details>
                  <summary><span className="question">Q</span>{item.question}</summary>
                  <div className="answer">{item.answer}</div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Faq

type FaqItem = {
  question: React.ReactNode
  answer: React.ReactNode
}

const faqData: FaqItem[] = [
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer:
      <>
        <p>【既存の投信つみたて設定額を増額する場合】</p>
        <p>証券総合口座ログイン後、「投信・積立」から、「投信つみたて申込状況」に進むことで、投信つみたて設定の変更ができます。</p>
        <img src="/image/feature/nisa-fulluse/img_faq_01.webp" alt="スクリーンショット：証券総合口座ログイン後の画面" width={576} height={913} decoding="async" loading="lazy" />
      </>,
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer:
      <>
        <p>【既存の投信つみたて設定額を増額する場合】</p>
        <p>証券総合口座ログイン後、「投信・積立」から、「投信つみたて申込状況」に進むことで、投信つみたて設定の変更ができます。</p>
        <img src="/image/feature/nisa-fulluse/img_faq_01.webp" alt="スクリーンショット：証券総合口座ログイン後の画面" width={576} height={913} decoding="async" loading="lazy" />
      </>,
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer:
      <>
        <p>【既存の投信つみたて設定額を増額する場合】</p>
        <p>証券総合口座ログイン後、「投信・積立」から、「投信つみたて申込状況」に進むことで、投信つみたて設定の変更ができます。</p>
        <img src="/image/feature/nisa-fulluse/img_faq_01.webp" alt="スクリーンショット：証券総合口座ログイン後の画面" width={576} height={913} decoding="async" loading="lazy" />
      </>,
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer:
      <>
        <p>【既存の投信つみたて設定額を増額する場合】</p>
        <p>証券総合口座ログイン後、「投信・積立」から、「投信つみたて申込状況」に進むことで、投信つみたて設定の変更ができます。</p>
        <img src="/image/feature/nisa-fulluse/img_faq_01.webp" alt="スクリーンショット：証券総合口座ログイン後の画面" width={576} height={913} decoding="async" loading="lazy" />
      </>,
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer:
      <>
        <p>【既存の投信つみたて設定額を増額する場合】</p>
        <p>証券総合口座ログイン後、「投信・積立」から、「投信つみたて申込状況」に進むことで、投信つみたて設定の変更ができます。</p>
        <img src="/image/feature/nisa-fulluse/img_faq_01.webp" alt="スクリーンショット：証券総合口座ログイン後の画面" width={576} height={913} decoding="async" loading="lazy" />
      </>,
  },
]
