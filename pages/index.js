import Navbar from '../components/main/Navbar';
import Header from '../components/main/Header';
import Footer from './../components/main/Footer';


export default function Home() {


  return (
    <div>
      <Navbar/>
      <section id="home"> <Header /></section>
      <section id="medical-card">  <div className=' min-h-screen border-4 border-sky-500 text-center grid content-center' > <p className=' text-4xl font-bold ' >Medical Card Section</p> </div></section>
      <section id="hibah">   <div className=' min-h-screen border-4 border-sky-500 text-center grid content-center' > <p className=' text-4xl font-bold ' >Hibah Section</p> </div></section>
      <section id="quotation">  <div className=' min-h-screen border-4 border-sky-500 text-center grid content-center' > <p className=' text-4xl font-bold ' >Quotation Section</p> </div></section>
      <section id="contact">  <div className=' min-h-screen border-4 border-sky-500 text-center grid content-center' > <p className=' text-4xl font-bold ' >Contact Section</p> </div></section>
      <section id="gallery">  <div className=' min-h-screen border-4 border-sky-500 text-center grid content-center' > <p className=' text-4xl font-bold ' >Gallery Section</p> </div></section>
      <Footer/>
    </div>
  )
}
