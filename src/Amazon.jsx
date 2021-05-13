import React from 'react'
import Card from './Card'
import Sdata from './Sdata'

const Amazon = () => {
    return (
        <Card key={Sdata[3].id}
            imgsrc={Sdata[3].imgsrc}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            links={Sdata[3].links}
        />
    )
}

export default Amazon