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
    </>
  )
}
