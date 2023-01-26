import React from "react";
import Spline from '@splinetool/react-spline';

export function HeroSection(){
    return(
        <div className="hero min-h-screen bg-base-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Spline scene="https://prod.spline.design/noZ3xpVPRV573fXn/scene.splinecode"/>
    {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" /> */}
    {/* <div>
      <h1 className="text-5xl font-bold">Una nuova App di messaggistica</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Inizia ora</button>
    </div> */}
  </div>
</div>
    )
}