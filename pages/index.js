import Navbar from '../components/main/Navbar';
import Header from '../components/main/Header';


export default function Home() {


  return (
    <div>
      <Navbar/>
      <section id="home"> <Header /></section>
      <section id="medical-card"> <hr/> <div className=' min-h-screen ' ></div></section>
      <section id="hibah"> <hr/> <div className=' min-h-screen ' ></div> </section>
      <section id="quotation"> <hr/> <div className=' min-h-screen ' ></div> </section>
      <section id="contact"> <hr/> <div className=' min-h-screen ' ></div> </section>
      <section id="gallery"> <Header /><Header /><Header /></section>
      <hr/>
    </div>
  )
}
