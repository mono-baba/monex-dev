import { Head } from "minista"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function () {
  return (
    <>
      <Header />
      <main>
        <div className="section-area">
          <div className="inner">
            <h1 className="title-with-speech-bubble">
              <span className="title">Feature一覧</span>
            </h1>
            <div className="contents">
              <section className="border-box">
                <h2 className="heading-normal">利用可能なFeatureページ</h2>
                <ul style={{ padding: "20px" }}>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/feature/docomo-cooperation/" style={{ color: "#0066cc", textDecoration: "underline" }}>
                      ドコモとマネックスの機能連携について
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <a href="/feature/example-feature/" style={{ color: "#0066cc", textDecoration: "underline" }}>
                      Example Feature（サンプル）
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}