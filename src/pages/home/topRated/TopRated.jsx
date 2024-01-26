import React, {useState} from 'react';
import ContentWrapper from '../../../components/conterWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

 
const TopRated = () => {
    const [endpoint, setEndpoint] = useState('movie')
    const {data, loading} = useFetch(`/${endpoint}/top_rated`)

    const onChangeTab = (tab) => {
        setEndpoint(tab=== "Movies" ? "movie" : "tv")
    }
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Top Rated</span>
            <SwitchTabs data={['Movies','TV Shows']} onChangeTab={onChangeTab}/>
        </ContentWrapper>
        <Carousel endpoint={endpoint} data={data?.results} loading={loading}/>
    </div>
  )
}

export default TopRated