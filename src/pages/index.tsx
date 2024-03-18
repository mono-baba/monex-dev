import { Head } from "minista"
import GlobalNavigation from "../components/GlobalNavigation"

export default function () {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/src/assets/style.css" media="screen" />
      </Head>
      <GlobalNavigation />
      <h1>Hello!</h1>
    </>
  )
}
