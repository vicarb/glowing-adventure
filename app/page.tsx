// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Digital Business</title>
        <meta name="description" content="Digital business specializing in web and app development and ad management." />
      </Head>

      {/* Header Section */}
      <header className="bg-white shadow">
       <Navbar/>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="text-center p-16 bg-cover bg-hero-pattern">
          <h1 className="text-4xl font-bold mb-4">Crafting Digital Experiences That Drive Results</h1>
          <p className="text-xl mb-8">Bespoke Website and App Development with Integrated Ad Management to Elevate Your Business.</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="container mx-auto py-20">
        <div className="flex flex-wrap -mx-4 justify-center">
          {/* Website Development Service */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="mb-4">
              <Image src="/websitedev.png" alt="Website Development" width={300} height={200} layout="responsive" className="rounded-lg"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Website Development</h3>
            <p className="text-gray-600 text-center mb-5">Custom designs, e-commerce solutions, and responsive websites tailored to your business needs.</p>
          </div>

          {/* App Development Service */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="mb-4">
              <Image src="/appdev.png" alt="App Development" width={300} height={200} layout="responsive" className="rounded-lg"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">App Development</h3>
            <p className="text-gray-600 text-center mb-5">Creating high-performance iOS and Android apps to engage your customers on the go.</p>
          </div>

          {/* Ad Management Service */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="mb-4">
              <Image src="/admgm.png" alt="Ad Management" width={300} height={200} layout="responsive" className="rounded-lg"/>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Ad Management</h3>
            <p className="text-gray-600 text-center mb-5">Strategic ad campaigns that convert viewers into customers and drive business growth.</p>
          </div>
        </div>
      </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Work</h2>
            {/* Include images and links to your past work */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto py-20">
          <form className="w-full max-w-lg mx-auto mt-8">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane Doe" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="email@example.com" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-white">
        <div className="container mx-auto py-8">
          <div className="flex -mx-4">
            <div className="px-4">
              <p className="text-gray-600 text-sm text-center sm:text-left">© YourDigitalBusiness 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
