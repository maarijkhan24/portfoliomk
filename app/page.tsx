import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Skills from '../components/Skills';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My portfolio website showcasing skills, projects, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav/>
    <Hero/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  );
}
