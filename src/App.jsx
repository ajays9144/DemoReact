import React from 'react'
import Amazon from './Amazon';
import Netflix from './Netflix';

const favSeries = 'am';

function App() {
    return (
        <>
            <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
            {favSeries === 'Netflix' ? <Netflix /> : <Amazon />}
            {/* {Sdata.map((val) => {
                return (<Card key={val.id} imgsrc={val.imgsrc} title={val.title}
                    sname={val.sname} link={val.links} />
                );
            })} */}
        </>
    );
}


export default App;