import { Head } from "minista"
import Disclaimer from "../../components/Disclaimer"
import MainVisual from "./MainVisual";
import Contents from "./Contents"
import Tips from "./Tips"

export default function () {
  return (
    <>
      <main>
        <MainVisual />
        <Contents />
        <Tips />
      </main>
      {/* <Disclaimer /> */}
    </>
  )
}
