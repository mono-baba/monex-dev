import { Head } from "minista"
import Disclaimer from "../../components/Disclaimer"
import MainVisual from "./MainVisual";
import Contents from "./Contents"

export default function () {
  return (
    <>
      <main>
        <MainVisual />
        <Contents />
      </main>
      {/* <Disclaimer /> */}
    </>
  )
}
