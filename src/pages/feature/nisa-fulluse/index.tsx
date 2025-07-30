import FeatureHead from "../../../components/FeatureHead"
import Disclaimer from "../../../components/Disclaimer"
import MainVisual from "../../../components/nisa-fulluse/MainVisual"
import Contents from "../../../components/nisa-fulluse/Contents"
import Tips from "../../../components/nisa-fulluse/Tips"
import Faq from "../../../components/nisa-fulluse/Faq"
import RelatedLinks from "../../../components/nisa-fulluse/RelatedLinks"

const pageTitle = "ダミー"
const pageDescription = "ダミー"
const pageKeywords = "ダミー"
const featureName = "nisa-fulluse"

export default function () {
  return (
    <>
      <FeatureHead
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
        featureName={featureName}
      />
      <main>
        <MainVisual />
        <Contents />
        <Tips />
        <Faq />
        <RelatedLinks />
      </main>
      {/* <Disclaimer /> */}
    </>
  )
}
