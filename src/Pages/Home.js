import React from 'react'
import WantToWatch from '../components/WantToWatch'
import Watched from '../components/Watched'
import Watching from '../components/Watching'


function Home() {
    return (
        <div>
            <Watching/>
            <WantToWatch/>
            <Watched/>
        </div>
    )
}

export default Home
