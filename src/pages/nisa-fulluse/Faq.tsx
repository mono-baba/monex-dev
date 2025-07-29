const Faq = () => {
  return (
    <>
      <section className="faq">
        <div className="inner">
          <h2 id="slider-title" className="title">
            <img
              src="/image/feature/nisa-fulluse/img_title_faq.svg"
              alt="よくある質問"
              className="img"
              width={366}
              height={66}
              decoding="async"
              loading="lazy"
              />
          </h2>
          <ul className="faq-list">
            {faqData.map((item, index) => (
              <li key={index}>
                <details>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Faq;

type FaqItem = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

const faqData: FaqItem[] = [
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer: "回答：投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？"
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer: "回答：投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？"
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer: "回答：投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？"
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer: "回答：投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？"
  },
  {
    question: "投信つみたて設定の変更はどこからできますか？",
    answer: "回答：投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？投信つみたて設定の変更はどこからできますか？"
  },
];