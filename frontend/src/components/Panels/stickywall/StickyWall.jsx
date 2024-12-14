import React from 'react'
import './stickywall.css';
import Note from './Note/Note';
import { FaPlus } from "react-icons/fa";

const StickyWall = () => {
  return (
    <section className='sticky-wall'>
        <div className="sticky-wall-header">
            <h1>Sticky Wall</h1>
            <FaPlus />
        </div>
        <div className="notes">
            <Note bgcolor={'#FDF2B3'} title={'Social medial'} />
            <Note bgcolor={'#D1EAED'} title={'Programming'}/>
            <Note bgcolor={'#FFDADA'} title={'Diet'}/>
            <Note bgcolor={'#FFD4A9'} title={'Front-end'}/>
            <Note bgcolor={'#FFDADA'} title={'Problem Solving'}/>
            <Note bgcolor={'#D1EAED'} title={'Design'}/>
            <Note bgcolor={'#FDF2B3'} title={'Social medial'} />
            <Note bgcolor={'#D1EAED'} title={'Programming'}/>
            <Note bgcolor={'#FFDADA'} title={'Diet'}/>
            <Note bgcolor={'#FFD4A9'} title={'Front-end'}/>
            <Note bgcolor={'#FFDADA'} title={'Problem Solving'}/>
            <Note bgcolor={'#D1EAED'} title={'Design'}/>
            <Note bgcolor={'#FDF2B3'} title={'Social medial'} />
            <Note bgcolor={'#D1EAED'} title={'Programming'}/>
            <Note bgcolor={'#FFDADA'} title={'Diet'}/>
            <Note bgcolor={'#FFD4A9'} title={'Front-end'}/>
            <Note bgcolor={'#FFDADA'} title={'Problem Solving'}/>
        </div>
    </section>
  )
}

export default StickyWall;