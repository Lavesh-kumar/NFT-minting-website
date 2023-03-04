import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { config } from '../dapp.config'

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full flex flex-col bg-brand-light overflow-hidden">



      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div style={{
  
  backgroundImage: 'url("/images/blur.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}>
      <header className="min-w-full text-gray-800 py-14 px-4 md:px-0">

        <div className="flex items-center container mx-auto max-w-5xl justify-between h-full">
          {/* Logo */}


          
          <Link href="https://www.nftcupgames.com/mint">
            <a className="font-coiny text-xl md:text-3xl font-bold">
              <span className="bg-gradient-to-br from-brand-pink to-brand-purple pr-2 bg-clip-text text-transparent ">
              TheSpot Money 
              </span>
              Cup Game
            </a>
          </Link>

          {/* Opensea Twitter Discord Links */}
          <nav aria-label="Contact Menu">
            <ul className="flex items-center space-x-4 md:space-x-6">
              <li style={{backgroundColor:'white',borderRadius:'9px'}} className="cursor-pointer">
                <a href="https://www.tiktok.com/@thespot.money" target="_blank" rel="noreferrer">
            
                <img
              src="/images/tiktok.png"
              className="w-10 h-10 rounded-md object-cover"
            />
            
                </a>
              </li>

              <li style={{backgroundColor:'white',borderRadius:'9px'}} className="cursor-pointer">
                <a
                  href="https://twitter.com/TheSpotDotMoney"
                  target="_blank"
                  rel="noreferrer"
                >
             <img
              src="/images/twitter.png"
              className="w-10 h-10 rounded-md object-cover"
            />
                </a>
              </li>

              <li style={{backgroundColor:'white',borderRadius:'9px'}} className="cursor-pointer">
                <a
                  href="https://t.me/TheSpotDotMoney"
                  target="_blank"
                  rel="noreferrer"
                >
             <img
              src="/images/telegram.png"
              className="w-10 h-10 rounded-md object-cover"
            />



                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="h-full w-full container max-w-5xl mx-auto flex flex-col items-center pt-4">
        <div className="flex flex-col items-center max-w-4xl w-full">
          <Link href="/mint" passHref>
            <a style={{backgroundColor:'black'}} className="mt-16 font-coiny uppercase inline-flex items-center px-6 oy-2 text-sm sm:text-2xl md:text-3xl font-medium text-center rounded text-rose-500 hover:bg-rose-600 hover:text-white">
              Go to minting page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentcolor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </Link>

          <div className="flex flex-col md:flex-row md:space-x-16 space-y-10 items-center mt-20 w-full">
            {/* BoredApe Image */}
            <img
              src="/images/9.jpg"
              className="w-64 h-64 rounded-md object-cover"
            />

            <div className="flex flex-col md:items-start items-center justify-center text-center font-coiny text-gray-800 px-4 md:px-0 py-10 mt-14">
              <h2 style={{float:'left',color:'black',fontSize:'50px'}} className="font-bold text-2xl md:text-4xl uppercase">
                About 
              </h2>
              <p style={{color:'red',fontSize:'40px',backgroundColor:'white',borderRadius:'4px'}}>TheSpot Money Cup Game</p>

              <p style={{color:'white',backgroundColor:'black',opacity:'0.7'}} className="mt-6 text-lg">
                {`NFT Mint Fee's go into our Blockchain Game Development & Giveaways On our Social Media TikTok & IG

500 Mints Per Round 1 Cup is worth 100X
60 Cup Winners total from 2X to 40X`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}
