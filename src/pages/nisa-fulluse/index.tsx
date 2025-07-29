import { Head } from "minista"
import Disclaimer from "../../components/Disclaimer"
import MainVisual from "./MainVisual";
import Contents from "./Contents"
import Tips from "./Tips"
import Faq from "./Faq"
import RelatedLinks from "./RelatedLinks"

export default function () {
  return (
    <>
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
