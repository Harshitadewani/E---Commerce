import React from 'react'
import '../pages/base.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import { SplitText } from "gsap/all";
import { ScrollSmoother } from "gsap/all";
import imagesLoaded from "imagesloaded";
import { initAnimation } from '../pages/js/index'
import { useEffect } from 'react';

// Plugin register
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, SplitText);
const Products = () => {
    useEffect(() => {
    initAnimation();
  }, []);
  return (
    <>
    <main id="smooth-content">
    <h1 className='font-extrabold text-7xl text-center mb-40'>Our Products</h1>
      <div className="scene-wrapper">

        <div className="scene">
          <h2 className="scene__title" data-speed="0.7">
            <a href="#preview-1"><span>Haute Couture Nights — Paris</span></a>
          </h2>
          <div className="carousel">
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img1.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img2.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img3.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img4.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          </div>
        </div>        


        <div className="scene">
          <h2 className="scene__title" data-speed="0.7">
            <a href="#preview-2"><span>Vogue Evolution — New York City</span></a>
          </h2>
          <div className="carousel">
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img13.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img14.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img15.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img16.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          </div>          
        </div>



        <div className="scene">
          <h2 className="scene__title" data-speed="0.7">
            <a href="#preview-3"><span>Glamour in the Desert — Dubai</span></a>
          </h2>
          <div className="carousel">
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img25.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img26.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img27.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img28.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          </div>          
        </div>



        <div className="scene">
          <h2 className="scene__title" data-speed="0.7">
            <a href="#preview-4"><span>Chic Couture Runway — Milan</span></a>
          </h2>
          <div className="carousel">
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img37.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img38.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img39.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img40.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          </div>          
        </div>


        <div className="scene" data-radius="650">
          <h2 className="scene__title" data-speed="0.7">
            <a href="#preview-5"><span>Style Showcase — London</span></a>
          </h2>
          <div className="carousel">
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img49.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img50.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img51.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img52.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img53.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img54.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          </div>          
        </div>


        <div className="scene">
          <h2 className="scene__title" data-speed="0.7">
            <a href="#preview-6"><span>Future Fashion Forward — Tokyo</span></a>
          </h2>
          <div className="carousel">
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img61.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img62.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img63.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
            <div className="carousel__cell">
              <div className="card" style={{"--img" : "url('/assets/img64.webp')"}}>
                <div className="card__face card__face--front"></div>
                <div className="card__face card__face--back"></div>
              </div>
            </div>
          </div>          
      </div>
      </div>
</main>

    <div className="preview-wrapper">
      <div className="preview" id="preview-1">
        <header className="preview__header">
          <h2 className="preview__title"><span>Haute Couture Nights — Paris</span></h2>
          <button className="preview__close">Close ×</button>
        </header>
        <div className="grid">
          <figure aria-labelledby="caption1" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img1.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption1">
              <h3>Kai Vega</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption2" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img2.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption2">
              <h3>Riven Juno</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption3" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img3.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption3">
              <h3>Lex Orion</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption4" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img4.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption4">
              <h3>Ash Kairos</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption5" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img5.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption5">
              <h3>Juno Sol</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption6" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img6.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption6">
              <h3>Soren Nyx</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption7" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img7.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption7">
              <h3>Quinn Axon</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption8" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img8.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption8">
              <h3>Zara Voss</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption9" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img9.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption9">
              <h3>Hale B.</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption10" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img10.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption10">
              <h3>Gundra Wex</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption61" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img11.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption61">
              <h3>Extra One</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption62" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img12.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption62">
              <h3>Extra Two</h3>
            </figcaption>
          </figure>
        </div>
      </div>


      <div className="preview" id="preview-2">
        <header className="preview__header">
          <h2 className="preview__title"><span>Vogue Evolution — New York City</span></h2>
          <button className="preview__close">Close ×</button>
        </header>
        <div className="grid">
          <figure aria-labelledby="caption11" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img13.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption11">
              <h3>Arlo Quinn</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption12" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img14.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption12">
              <h3>Vera Kline</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption13" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img15.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption13">
              <h3>Juno Vale</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption14" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img16.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption14">
              <h3>Ember Dash</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption15" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img17.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption15">
              <h3>Rylee Voss</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption16" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img18.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption16">
              <h3>Harlow Nova</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption17" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img19.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption17">
              <h3>Blake Lune</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption18" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img22.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption18">
              <h3>Zephyr Kade</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption19" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img21.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption19">
              <h3>Indigo Rae</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption20" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img22.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption20">
              <h3>Kairo Jett</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption63" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img23.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption63">
              <h3>Extra One</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption64" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img24.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption64">
              <h3>Extra Two</h3>
            </figcaption>
          </figure>
        </div>
      </div>



      <div className="preview" id="preview-3">
        <header className="preview__header">
          <h2 className="preview__title"><span>Glamour in the Desert — Dubai</span></h2>
          <button className="preview__close">Close ×</button>
        </header>
        <div className="grid">
          <figure aria-labelledby="caption21" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img25.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption21">
              <h3>Luca Raine</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption22" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img26.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption22">
              <h3>Rory Vale</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption23" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img27.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption23">
              <h3>Sable Zev</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption24" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img28.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption24">
              <h3>Ellis Nova</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption25" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img29.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption25">
              <h3>Wren Asher</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption26" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img30.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption26">
              <h3>Zane Sky</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption27" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img31.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption27">
              <h3>Rowan Juno</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption28" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img32.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption28">
              <h3>Fenix Blade</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption29" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img33.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption29">
              <h3>Alix Storm</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption30" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img34.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption30">
              <h3>Nova Ray</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption65" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img35.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption65">
              <h3>Extra One</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption66" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img36.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption66">
              <h3>Extra Two</h3>
            </figcaption>
          </figure>
        </div>
      </div>


      <div className="preview" id="preview-4">
        <header className="preview__header">
          <h2 className="preview__title"><span>Chic Couture Runway — Milan</span></h2>
          <button className="preview__close">Close ×</button>
        </header>
        <div className="grid">
          <figure aria-labelledby="caption31" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img37.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption31">
              <h3>Aeris Flint</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption32" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img38.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption32">
              <h3>Jett Voss</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption33" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img39.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption33">
              <h3>Caius Storm</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption34" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img40.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption34">
              <h3>Mira Celeste</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption35" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img41.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption35">
              <h3>Liam Ashford</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption36" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img42.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption36">
              <h3>Vega Dawn</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption37" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img43.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption37">
              <h3>Orion Phoenix</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption38" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img44.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption38">
              <h3>Rex Solara</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption39" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img45.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption39">
              <h3>Elara Finch</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption40" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img46.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption40">
              <h3>Zoe Star</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption67" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img47.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption67">
              <h3>Extra One</h3>
            </figcaption>
          </figure>
          <figure aria-labelledby="caption68" className="grid__item" role="img">
            <div className="grid__item-image" style={{backgroundImage: "url(assets/img48.webp')"}}></div>
            <figcaption className="grid__item-caption" id="caption68">
              <h3>Extra Two</h3>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products
