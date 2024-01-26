import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from "../../../components/lazyLoadImage/img"
import ContentWrapper from "../../../components/conterWrapper/ContentWrapper"
import "./style.scss"
const HeroBanner = () => {
  const navigate = useNavigate()
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const {url} = useSelector(state=>state.home)

  const {data, loading} = useFetch("/movie/upcoming");

  useEffect(() => {
      const bg = url?.backdrop + data?.results[Math.floor(Math.random() * 20)]
      .backdrop_path
      console.log(url.backdrop,bg)
      setBackground(bg)
  },[data,url])
 
  const searchQueryHandler = (e) => {
    if(e.key === "Enter" && query.length > 0){
      navigate(`/search/${query}`)
    }
  }
  return (
    <div className="heroBanner">
      { !loading && <div className="backdrop-img">
        <Img src={background}/>
      </div>}
      <div className="opacity-layer">
      <ContentWrapper>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover.
              Explore now.
            </span>
            <div className="searchInput">
              <input
               type="text"
               placeholder='Search for a movie or tv show...'
               onChange={(e)=> setQuery(e.target.value)}
               onKeyUp={searchQueryHandler}
               />
               <button>Search</button>
            </div>
        
        </div>
      </div>
      </ContentWrapper>
      </div>
    </div>
  )
}

export default HeroBanner