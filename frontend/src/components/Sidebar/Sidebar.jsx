import React from 'react'
import './sidebar.scss';
import Tag from '../General/Tag/Tag';
import { MdOutlineMenuOpen  } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaAnglesRight } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { RiListSettingsLine } from "react-icons/ri";
import LinkButton from '../General/LinkButton/LinkButton';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        {/* Header */}
        <div className="sidebar-header">
            <h3>Menu</h3>
            <MdOutlineMenuOpen />
        </div>
        {/* Seacr */}
        <div className="search">
            <FiSearch />
            <input type="text" placeholder='Search'/>
        </div>
        <div className="sidebar-scroll-container">
            {/* Tasks */}
            <div className="category">
                <p className='label'>Tasks</p>
                <div className='category-options'>
                    <LinkButton path='/' title={'Upcoming'} count={'12'} icon={<FaAnglesRight />}/>
                    <LinkButton path='todo' title={'Today'} count={'5'} icon={<FaListCheck />}/>
                    <LinkButton path={'dd'} title={'Calender'} icon={<FaCalendarAlt />}/>
                    <LinkButton path={'sticky'} title={'Sticky Wall'} icon={<FaStickyNote />}/>
                </div>
            </div>
            <hr className='divider'></hr>
            <div className="category">
                <p className='label'>LISTS</p>
                <div className='category-options'>
                    <LinkButton path={'p'} title={'Personal'} count={'3'} icon={<div className='category-color' style={{backgroundColor : '#FF6B6B'}}></div>}/>
                    <LinkButton path={'c'} title={'Work'} count={'7'} icon={<div className='category-color' style={{backgroundColor : '#66D9E8'}}></div>}/>
                    <LinkButton path={'d'} title={'Gym'} count={'2'} icon={<div className='category-color' style={{backgroundColor : '#FFD43B'}}></div>}/>
                    <LinkButton path={'e'} title={'Add New List'} icon={<FiPlus />}/>
                </div>
            </div>
            <hr className='divider'></hr>
            <div className="tags-category">
                <p className='label'>TAGS</p>
                <div className="tags">
                    <Tag color={'#D1EAED'} name={'Word'}/>
                    <Tag color={'#FFDADA'} name={'Gym'}/>
                    <Tag color={'#FFDADA'} name={'Frelancer'}/>
                    <Tag color={'#D1EAED'} name={'Family'}/>
                </div>
                <div className='add-tag'>
                    <FiPlus />
                    <span className='title'> Add Tag</span>
                </div>
            </div>
        </div>
        <div className='setting-signout'>
            <div className='setting'>
                <LinkButton path={'p'} title={'Setting'} icon={<RiListSettingsLine />}/>
            </div>
            <hr className='divider'></hr>
            <button className='sign-out'>Sign out</button>
        </div>
    </div>
  )
}

export default Sidebar