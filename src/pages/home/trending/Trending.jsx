import React, {useState} from 'react';
import ContentWrapper from '../../../components/conterWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';


const Trending = () => {
    const [endpoint, setEndpoint] = useState('day')
    const {data, loading} = useFetch(`/trending/all/${endpoint}`)

    const onChangeTab = (tab) => {
        setEndpoint(tab=== "Day" ? "day" : "week")
    }
  return (
    <div className="carouselSection">
        <ContentWrapper>
            <span className="carouselTitle">Trending</span>
            <SwitchTabs data={['day','week']} onChangeTab={onChangeTab}/>
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending