export interface CommonHeaderProps {
  number?: React.ReactNode
  title: React.ReactNode
  img: string
  description?: React.ReactNode
}

const CommonHeader = (props: CommonHeaderProps) => {
  const { number, title, img, description } = props
  return (
    <div className="common-header">
      <div className="bg">
        <h2 className="title">
          {number && <span>
            NISAのおさらい<span className="number">{number}</span>
          </span>}
          <strong>{title}</strong>
        </h2>
          {description && <p className="description">{description}</p>}
      </div>
      <img
        src={img}
        alt="小判猫"
        className="img"
        width={334}
        height={460}
        decoding="async"
        loading="lazy"
      />
    </div>
  )
}

export default CommonHeader;
