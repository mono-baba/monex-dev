import { Head } from "minista"
import Header from "../../../components/Header"
import Footer from "../../../components/Footer"

export default function () {
  return (
    <>
      <main>
        <ExampleMainVisual />
        <ExampleContent />
      </main>
    </>
  )
}

const ExampleMainVisual = () => {
  return (
    <div className="mv">
      <h1 className="title">
        <span style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>
          Example Feature
        </span>
      </h1>
      <span className="mv-image"></span>
    </div>
  )
}

const ExampleContent = () => {
  return (
    <section className="section-area">
      <div className="inner">
        <h2 className="title-with-speech-bubble">
          <span className="speech-bubble">新機能！</span>
          <span className="title">サンプル機能ページ</span>
        </h2>
        <div className="lead-area">
          <p className="lead">
            これは新しいfeatureページのサンプルです。
            <br />
            環境変数FEATURE_NAMEを使用せずに、URLパスで直接アクセスできます。
          </p>
          <ul
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#f8f8f8",
            }}
          >
            <li>URL: /feature/example-feature/ でアクセス可能</li>
            <li>メタタグは自動的に切り替わります</li>
            <li>各featureごとに独自のコンテンツを作成できます</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
