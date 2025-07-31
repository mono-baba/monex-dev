const FixedConversionButton = () => {
  return (
    <div className="fixed-conversion-button">
      <a
        className="button"
        href="https://open.monex.co.jp/open/servlet/ITS/account/AcOpenInfo2"
        target="_blank"
      >
        総合口座を開設する
      </a>
      <a
        className="button -nisa"
        href="https://info.monex.co.jp/nisa/apply.html"
        target="_blank"
      >
        NISA口座を開設する
      </a>
    </div>
  )
}

export default FixedConversionButton
