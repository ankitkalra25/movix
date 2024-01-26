import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import "./style.scss"
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import { useSelector } from 'react-redux';
import TopRated from './topRated/TopRated'

const Home = () => {
  const {url} = useSelector(state=>state.home)

  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home