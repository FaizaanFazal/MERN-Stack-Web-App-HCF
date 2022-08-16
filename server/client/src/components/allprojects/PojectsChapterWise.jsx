import React from 'react'
import Header from '../common/header/Header'
import './allprojects.css'
import BahawalpurChapter from './BahawalpurChapter'
import PeshawarChapter from './PeshawarChapter'
import RawalpindiChapter from './RawalpindiChapter'
import Footer from '../common/footer/Footer'

export default function PojectsChapterWise() {
  return (
    <>
    <div className="apwrapper">
    <div className="apbkcover">
      <Header />
      <section className='allporjects'>
        <h5 className='text-center m-3'>All Time Projects</h5>
        <div className='container'>
            <RawalpindiChapter/>
            <PeshawarChapter/>
            <BahawalpurChapter/>

            </div>
            <br/>
      <br/>
      </section>
     </div>
     </div>
     <Footer/>
    </>
  )
}
