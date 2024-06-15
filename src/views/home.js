import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar31 from '../components/navbar31'
import Hero171 from '../components/hero171'
import Features1 from '../components/features1'
import Features4 from '../components/features4'
import Contact3 from '../components/contact3'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Aftrmatch</title>
        <meta property="og:title" content="Aftrmatch" />
      </Helmet>
      <Navbar31></Navbar31>
      <Hero171
        image1Src="https://images.unsplash.com/photo-1717436069474-6adff04ae113?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxNzgxOTU0NXw&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1616276510392-f51f2b1b3837?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxkYXRpbmd8ZW58MHx8fHwxNzE3ODE5NjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image3Src="https://images.unsplash.com/photo-1571771826307-98d0d0999028?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGRhdGluZ3xlbnwwfHx8fDE3MTc4MTk2NjB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image4Src="https://images.unsplash.com/photo-1611620005823-85f11dc95a77?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM4fHxkYXRpbmd8ZW58MHx8fHwxNzE3ODE5NjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image5Src="https://images.unsplash.com/photo-1564858625447-278284a4d574?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM5fHxkYXRpbmd8ZW58MHx8fHwxNzE3ODE5NjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image6Src="https://images.unsplash.com/photo-1601375453000-6079f07bba93?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI3fHxkYXRpbmd8ZW58MHx8fHwxNzE3ODE5NjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image8Src="https://images.unsplash.com/photo-1608044573980-3db2e1edfadc?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYzfHxkYXRpbmd8ZW58MHx8fHwxNzE3ODE5NzE4fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1617788472008-1e524a74cf25?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fGRhdGluZ3xlbnwwfHx8fDE3MTc4MTk2NjB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image10Src="https://images.unsplash.com/photo-1717436069474-6adff04ae113?ixid=M3w5MTMyMXwwfDF8YWxsfDEzfHx8fHx8Mnx8MTcxNzgxOTU0NXw&amp;ixlib=rb-4.0.3&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1627630737366-fbd46d8c11f5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxkYXRpbmd8ZW58MHx8fHwxNzE3ODE5NjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image12Src="https://images.unsplash.com/photo-1577392467649-b79d77b149b5?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxkYXRpbmd8ZW58MHx8fHwxNzE3ODE5NjYwfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        rootClassName="hero171-root-class-name"
      ></Hero171>
      <Features1 feature2ImageSrc="https://images.unsplash.com/photo-1587377838789-968194a7cc88?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3MHx8b25saW5lJTIwY2hhdCUyMGdhbWVzfGVufDB8fHx8MTcxNzg2MTMxMHww&amp;ixlib=rb-4.0.3&amp;h=300"></Features1>
      <Features4
        feature1ImageSrc="https://images.unsplash.com/photo-1643639779899-ccf867c18af2?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxkYXRpbmclMjBhcHBzJTIwfGVufDB8fHx8MTcxNzg2MTg0NXww&amp;ixlib=rb-4.0.3&amp;w=600"
        feature2ImageSrc="https://images.unsplash.com/photo-1648499510197-9c9b5e062c83?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI1fHxzb3N8ZW58MHx8fHwxNzE3ODYxMDQzfDA&amp;ixlib=rb-4.0.3&amp;w=600"
        feature3ImageSrc="https://images.unsplash.com/photo-1638561186238-3227892dbc18?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxjaGF0JTIwZ2FtaW5nfGVufDB8fHx8MTcxNzg2MzI1MXww&amp;ixlib=rb-4.0.3&amp;w=600"
        feature4ImageSrc="https://images.unsplash.com/photo-1615827690357-1f4db574486b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGdlbnVpbmV8ZW58MHx8fHwxNzE3ODYzNDAzfDA&amp;ixlib=rb-4.0.3&amp;w=600"
      ></Features4>
      <Contact3></Contact3>
      <Footer1></Footer1>
    </div>
  )
}

export default Home
