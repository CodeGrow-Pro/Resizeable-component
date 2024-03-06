import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './resizeableLayout.css'

const ResizeableLayout = () => {
    const [layout, setLayout] = useState([
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 1, h: 2 },
        { i: 'c', x: 2, y: 0, w: 1, h: 2 },
    //     { i: 'd', x: 0, y: 0, w: 1, h: 2 },
    //     { i: 'e', x: 1, y: 0, w: 1, h: 2 },
    //     { i: 'f', x: 2, y: 0, w: 1, h: 2 }
    ]);

    const imagesLink = [
        'https://www.shutterstock.com/shutterstock/photos/2192591559/display_1500/stock-photo-gurgaon-haryana-india-cyber-city-in-gurgaon-2192591559.jpg',
        'https://www.shutterstock.com/shutterstock/photos/1788275579/display_1500/stock-photo-gurugram-haryana-india-april-cyber-city-during-day-time-with-traffic-1788275579.jpg',
        'https://www.shutterstock.com/shutterstock/photos/2192591559/display_1500/stock-photo-gurgaon-haryana-india-cyber-city-in-gurgaon-2192591559.jpg',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAj98achlhpp31OaqChCooA5l9FRvctDkdElK7Ff8QVMvk9XfEee4ZrMWE9gipqHX35JQ&usqp=CAU',
    //     'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     'https://images.pexels.com/photos/798116/pexels-photo-798116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]

    const onLayoutChange = (newLayout) => {
        setLayout(newLayout);
    };

    return (
        <GridLayout
            className="layout"
            layout={layout}
            cols={3}
            rowHeight={100}
            width={window.innerWidth}
            onLayoutChange={onLayoutChange}
            style={{ display: 'flex' }}
            autoSize={true}
            resizeHandles={['se', 'nw', 'ne', 'sw', 's', 'w', 'e', 'n']}
        >
            {layout.map((item, index) => (
                <div key={item.i} className="component" data-grid={item}>
                    <img src={imagesLink[index]} alt='images' className='resizable-image' />
                </div>
            ))}
        </GridLayout>
    );
};

export default ResizeableLayout;

