import './index.css'

const BannerCard = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <div className="cont2">
      <li className={className}>
        <h1 className="head">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="btn {className}" type="button">
          Show More
        </button>
      </li>
    </div>
  )
}
export default BannerCard
