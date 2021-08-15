import React from 'react'
import WantToWatch from '../components/WantToWatch'
import Watched from '../components/Watched'
import Watching from '../components/Watching'
import SearchPage from './SearchPage'


function Home() {
    return (
        <div>
            <Watching/>
            <WantToWatch/>
            <Watched/>
            <SearchPage/>
        </div>
    )
}

export default Home
