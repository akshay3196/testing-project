
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import HeroImages from '../components/HeroImages'
import MaipageVideo from '../components/MainpageVideo'
import Mainbody from '../components/Mainbody'
import Variant from '../components/Variant'
import Footer from '../components/Footer'
import Specification from '../components/Specification'
import { useEffect, useRef } from 'react'

export async function getStaticProps() {

  //header routes
  const routeResponse = await fetch('http://localhost:1337/api/routes?populate=*')
  const headerRoutes = await routeResponse.json()

  //header drop down response
  const headerDropDownResponse = await fetch('http://localhost:1337/api/route-lists?populate=*')
  const headerDropDownRoutes = await headerDropDownResponse.json()

  //hero images
  const heroImageResponse = await fetch('http://localhost:1337/api/hero-images?populate=*')
  const heroImages = await heroImageResponse.json()

  //get body segment details
  const bodyResponse = await fetch('http://localhost:1337/api/bodies?populate=*')
  const bodyDetails = await bodyResponse.json()

  // logo and address

  const logoResponse = await fetch('http://localhost:1337/api/site-header?populate=*')
  const logoAddress = await logoResponse.json()

  //specification response 
  const specificationResponse = await fetch('http://localhost:1337/api/Specification-Parameters?populate=*')
  const specifications = await specificationResponse.json()


  //socials
  const socialResponse = await fetch('http://localhost:1337/api/socials?populate=*')
  const socials = await socialResponse.json()

  return {
    props: {
      headerRoutes:headerRoutes.data,
      headerDropDownRoutes:headerDropDownRoutes.data,
      heroImages:heroImages.data,
      bodyDetails:bodyDetails.data,
      logoAddress:logoAddress.data,
      specifications:specifications.data,
      socials:socials.data
    },
   
    revalidate: 10, // In seconds
  }
}

const Home= ({headerRoutes,headerDropDownRoutes,heroImages,bodyDetails,logoAddress,specifications,socials}) => {
 



  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div>
    <div className="">
      <Head>
      <title>Euler HiLoad - Electric Three Wheeler Vehicle | Euler Motors</title>
        <link rel="icon" href="https://www.eulermotors.com/images/fav.ico" />
      </Head>
      <Header downloadsToggle={true} routes={headerRoutes} headerDropDownRoutes={headerDropDownRoutes} logo={logoAddress.attributes.HeaderLogo} />
      <HeroImages heroImages={heroImages} />
      <MaipageVideo video={bodyDetails[0].attributes.image} headingOne={bodyDetails[0].attributes.heading}  launchevent={bodyDetails[0].attributes.subheading}  />
      <Mainbody  background='bg-black' textColor='text-white' image={bodyDetails[1].attributes.image} heading={bodyDetails[1].attributes.heading} features={bodyDetails[1].attributes.features} />
      <Mainbody image={bodyDetails[2].attributes.image} heading={bodyDetails[2].attributes.heading} features={bodyDetails[2].attributes.features} direction='flex-row-reverse' />
      <MaipageVideo video={bodyDetails[3].attributes.image} headingOne={bodyDetails[3].attributes.heading} headingTwo={bodyDetails[3].attributes.subheading} />
      <Mainbody image={bodyDetails[4].attributes.image} heading={bodyDetails[4].attributes.heading} features={bodyDetails[4].attributes.features} direction='flex-row-reverse'/>
      <Mainbody  background='bg-black' textColor='text-white' video={bodyDetails[5].attributes.image} heading={bodyDetails[5].attributes.heading} features={bodyDetails[5].attributes.features}  />
      <Mainbody image={bodyDetails[6].attributes.image} heading={bodyDetails[6].attributes.heading} features={bodyDetails[6].attributes.features} direction='flex-row-reverse'/>
      <div className='w-full flex justify-center'>
       <button className='p-3  bg-blue-400 font-bold rounded-lg hover:bg-black hover:text-white hover:transition-all duration-300'>Know more</button>
      </div>
      <Variant image={bodyDetails[7].attributes.image} heading={bodyDetails[7].attributes.heading} subeadingOne={bodyDetails[7].attributes.subheading} subheadingTwo={bodyDetails[7].attributes.suheadingTwo} />
      <Specification specifications={specifications} terms={logoAddress.attributes.specializationTerms} />
      <label htmlFor="my-modal-3" className="btn modal-button hidden">open modal</label>
      <Footer headerRoutes={headerRoutes} headerDropDownRoutes={headerDropDownRoutes}  logo={logoAddress.attributes.FooterLogo} address={logoAddress.attributes.Address} socials={socials}/>
          
    </div>
    </>
    
  )
}

export default Home
