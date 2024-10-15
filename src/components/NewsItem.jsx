import newsDefault from '../assets/NewsDefault.png'
const NewsItem = ({title,description,src,url}) => {
  return (
    <div>
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px", height:"600px"}}>
  <img src={src ? src : newsDefault} style={{height:"200px", width:"100%"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{height:"90px"}}>{title ? title.slice(0,100) : "Breaking News"}</h5>
    <p className="card-text" style={{height:"180px"}}>{description ? description.slice(0,300) : "What is going on today, check out by clicking the below Read More Button."}</p>
    <a href={url} target="__blank" className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}

export default NewsItem