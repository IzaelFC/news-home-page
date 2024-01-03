import { useState } from 'react'

import open_menu from './assets/images/icon-menu.svg'
import close_menu from './assets/images/icon-menu-close.svg'
import logo from './assets/images/logo.svg'
import web3 from './assets/images/image-web-3-desktop.jpg'
import retro from './assets/images/image-retro-pcs.jpg'
import laptops from './assets/images/image-top-laptops.jpg'
import gaming from './assets/images/image-gaming-growth.jpg'


export default function App() {
  const [open, setOpen] = useState(false)

  const menu = () => {
    setOpen(!open)
  }

  return (
    <div className={ `flex flex-col gap-10 sm:px-[5%] px-5 sm:py-20 pt-5 pb-20 ${open ? 'h-screen overflow-y-hidden' : ''}`}>
      <header className="relative flex justify-between">
        <div>
          <img src={ logo } alt="" />
        </div>

        <div className='absolute sm:relative sm:h-auto h-screen flex sm:flex-row flex-col sm:mt-0 mt-3 right-0 sm:p-0'>
          <input id='botao' className='peer hidden' type="checkbox" />
          <label htmlFor="botao" className='sm:hidden flex peer w-fit cursor-pointer ml-auto justify-end peer-checked:z-10'><img className='my-auto' onClick={ menu } src={open ? close_menu : open_menu} alt='' /></label>
          
          <div className="gap-10 peer-checked:gap-5 peer hidden sm:flex sm:my-auto peer-checked:fixed peer-checked:flex peer-checked:flex-col peer-checked:h-screen peer-checked:bg-white peer-checked:w-[30vh] peer-checked:top-0 peer-checked:right-0 peer-checked:pl-5 peer-checked:pb-40 peer-checked:shadow-[0px_0px_10px_800px_rgba(0,0,0,0.5)] justify-center">
            <a href="">Home</a>
            <a href="">New</a>
            <a href="">Popular</a>
            <a href="">Trending</a>
            <a href="">Categories</a>
          </div>
        </div>
      </header>

      <main className="flex sm:flex-row flex-col gap-7">
        <section className="flex flex-col gap-5">
          <img src={ web3 } alt="" />

          <div className="sm:flex gap-9 mt-auto">
            <h1 className="lg:text-6xl sm:text-5xl text-6xl sm:w-[50%]">The Bright Future of Web 3.0?</h1>
            
            <div className="flex flex-col sm:w-[50%] gap-5 justify-between">
              <p className="text-[--dark-grayish-blue] sm:text-sm lg:text-base text-base">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <button>Read more</button>
            </div>
          </div>
        </section>

        <section className="bg-[--very-dark-blue] text-[--off-white] sm:my-0 my-10 p-7 lg:w-[100vh] sm:w-[200vh]">
          <span className="text-[--soft-orange] text-4xl font-bold">New</span>

          <h2 className="mt-5">Hydrogen VS Electric Cars</h2>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>

          <hr />

          <h2>The Downsides of AI Artistry</h2>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
          
          <hr />

          <h2>Is VC Funding Drying Up?</h2>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </section>
      </main>

      <footer className="flex sm:flex-row flex-col sm:gap-0 gap-10">
        <section className="flex">
          <img src={ retro } alt="" />
          <div className="my-auto">
            <span>01</span>
            <h2>Reviving Retro PCs</h2>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </section>

        <section className="flex">
          <img src={ laptops } alt="" />
          <div className="my-auto">
            <span>02</span>
            <h2>Top 10 Laptops of 2022</h2>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </section>

        <section className="flex">
          <img src={ gaming } alt="" />
          <div className="my-auto">
            <span>03</span>
            <h2>The Growth of Gaming</h2>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </section>
      </footer>
    </div>
  )
}