import { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import { Toggle, NumberInput } from 'carbon-components-react'
import classnames from 'classnames'



export default function Home() {
  const lightsContainerRef = useRef(null)
  const numberInputRef = useRef(null)
  const [isLightsOn, setIsLightsOn] = useState(true)

  const green70 = classnames({
    'lights': true,
    'lights--green70': isLightsOn,
    'lights__animation--green70': isLightsOn
  })
  const blue60 = classnames({
    'lights': true,
    'lights--blue60': isLightsOn,
    'lights__animation--blue60': isLightsOn
  })
  const yellow30 = classnames({
    'lights': true,
    'lights--yellow30': isLightsOn,
    'lights__animation--yellow30': isLightsOn
  })


  function handleChangeLight() {
    setIsLightsOn(!isLightsOn)
  }

  function handleChangeLightSpeed(event) {
    const lightNodes = Array.from(lightsContainerRef.current.children)

    lightNodes.forEach((light) => {
      Array.from(light.children)[0].style.animationDuration = `${event.imaginaryTarget.value}s`
    })

  }
  useEffect(() => {
    numberInputRef.current.value = 1
    const lightNodes = Array.from(lightsContainerRef.current.children)

    lightNodes.forEach((light) => {
      Array.from(light.children)[0].removeAttribute('style')
    })

  }, [isLightsOn])



  return (
    <>
      <Head>
        <title>Christmas Lights</title>
      </Head>

      <main className="bx--grid">
        <ul className="bx--row" ref={lightsContainerRef}>

          <li className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"><span className={green70}></span></li>

          <li className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"><span className={blue60}></span></li>

          <li className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"><span className={green70}></span></li>

          <li className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"><span className={yellow30}></span></li>

          <li className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"><span className={blue60}></span></li>

          <li className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"><span className={yellow30}></span></li>

          <li className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"><span className={green70}></span></li>
        </ul>


        <section className="actions">
          <Toggle aria-label="Toggle lights state" defaultToggled={true} onToggle={handleChangeLight} id="toggle-lights-state" />

          <NumberInput
            ref={numberInputRef}
            id="change-light-speed"
            min={0.5}
            max={5}
            value={1}
            label="Increase or Decrease the light speed (s)"
            invalidText="Number is not valid - 5 is the max, 0.5 is the min"
            size="xl"
            onChange={handleChangeLightSpeed}
          />
        </section>



      </main>



    </>
  )
}
// {`lights ${isLightsOn && "lights__animation--blue80"}`}
// {`lights ${isLightsOn && "lights__animation--blue30"}`}
// {`lights  ${isLightsOn && "lights__animation--blue80"}`
// {`lights ${isLightsOn && "lights__animation--blue60"}`}
// {`lights ${isLightsOn && "lights__animation--blue30"}`}
// {`lights ${isLightsOn && "lights__animation--blue60"}`}
// {`lights  ${isLightsOn && "lights__animation--blue80"}`