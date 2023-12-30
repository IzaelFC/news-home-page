import logo from './assets/images/logo.svg'
import web3 from './assets/images/image-web-3-desktop.jpg'
import retro from './assets/images/image-retro-pcs.jpg'
import laptops from './assets/images/image-top-laptops.jpg'
import gaming from './assets/images/image-gaming-growth.jpg'

export default function App() {
  return (
    <div className="flex flex-col gap-10 px-[10%] py-20">
      <header className="flex justify-between">
        <div>
          <img src={ logo } alt="" />
        </div>

        <div className="flex gap-10 my-auto text-[--dark-grayish-blue]">
          <a href="">Home</a>
          <a href="">New</a>
          <a href="">Popular</a>
          <a href="">Trending</a>
          <a href="">Categories</a>
        </div>
      </header>

      <main className="flex gap-7">
        <section className="flex flex-col gap-5">
          <img src={ web3 } alt="" />

          <div className="flex gap-9 mt-auto">
            <h1 className="text-6xl w-[50%]">The Bright Future of Web 3.0?</h1>
            
            <div className="flex flex-col w-[50%] justify-between">
              <p className="text-[--dark-grayish-blue]">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>

              <button className="bg-[--soft-red] text-[--off-white] font-semibold uppercase py-3 px-10 w-fit">Read more</button>
            </div>
          </div>
        </section>

        <section className="bg-[--very-dark-blue] text-[--off-white] p-7 w-[80%]">
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

      <footer className="flex">
        <section className="flex">
          <img className="h-[50%] my-auto" src={ retro } alt="" />
          <div className="my-auto">
            <span>01</span>
            <h2>Reviving Retro PCs</h2>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </section>

        <section className="flex">
          <img className="w-auto h-[50%] my-auto" src={ laptops } alt="" />
          <div className="my-auto">
            <span>02</span>
            <h2>Top 10 Laptops of 2022</h2>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </section>

        <section className="flex">
          <img className="w-auto h-[50%] my-auto" src={ gaming } alt="" />
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