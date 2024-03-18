import { Head } from "minista"
import GlobalNavigation from "../components/GlobalNavigation"
import FixedConversionButton from "../components/FixedConversionButton"

export default function () {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/assets/style.css" media="screen" />
      </Head>
      <GlobalNavigation />
      <FixedConversionButton />
      <main>
        <Lead />
      </main>
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
