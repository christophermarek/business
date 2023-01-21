import { randomInt } from 'crypto';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';


function getRandomInt(min: number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.round(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export default function Home() {
  const imageClass = 'glitchAndJerk p-1 outline outline-2 outline-black';
  const cubeWidth = 500;
  const [imageAnimationFrames, setImageAnimationFrames] = useState<number>(1);
  const counter = useRef(0);

  const [randomPic1, setRandomPic1] = useState<number>(1);


  const loop = (randomInt: number) => {
      setRandomPic1(randomInt);
      setImageAnimationFrames((imageAnimationFrames) => imageAnimationFrames + 1)
  }
  
  useEffect(() => {
    if (imageAnimationFrames === -1) {
      return;
    } else {
      if (imageAnimationFrames < 14) {
      const randomInt = getRandomInt(1,14)
      const randomInt2 = getRandomInt(1,14)

        counter.current += 1;
        const id = setInterval(() => {loop(randomInt)
        loop(randomInt2)}
        , 300);

        return () => clearTimeout(id);
      } else {
        setImageAnimationFrames(1);
      }
    }
  }, [imageAnimationFrames]);

  return (
    <>
      <Head>
        <title>Christopher Marek</title>
        <meta name="description" content="Christopher Marek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black p-10'>
        <div className='text-white font-sans text-5xl'>
          <div className='flex flex-col gap-5 items-center'>
          <div className='glitchText'>Christopher Marek</div>
            <Image className={imageClass} src={`/${randomPic1}.png`} alt="Chris Marek" width={cubeWidth} height={cubeWidth} />
            <Link className='text-3xl' target={"_blank"} href={'mailto:christopher.marek@christophermarek.ca'}
     >
  christopher.marek@christophermarek.ca
</Link>
            {/* {renderer(8)} */}
            {/* <audio
        src="/officeSound.mp3"
        loop
        autoPlay>
            Your browser does not support the
            <code>audio</code> element.
    </audio> */}

          </div>
        </div>
      </main>
    </>
  );
}
