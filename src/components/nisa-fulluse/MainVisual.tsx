const MainVisual = () => {
  return (
    <>
      <section className="mv">
        <div className="inner">
          {/* <h1 className="title">あなたはどう使う？<br />NISA枠<br />使い切り活用術</h1> */}
          <div className="mv-character">
            {/* <p className="speech-bubble">NISAは<br />「早く」「多く」が<br />断然おトク！</p> */}
            <img
              src="/image/feature/nisa-fulluse/img_kobanneko_mv.gif"
              alt="招き猫"
              className="img"
              width={1440}
              height={810}
              decoding="async"
              loading="eager"
            />
            <span className="scroll-label">scroll</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default MainVisual;
