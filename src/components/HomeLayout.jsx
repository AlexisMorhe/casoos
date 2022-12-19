import Head from "next/head";
import Header from "./Header";
import Footer from './Footer';

export default function HomeLayout({title, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}/>
        <link rel='icon' href='public/favicon.ico' />
      </Head>
      <main>
        <Header/>
        <div>{children}</div>
        <Footer/>
      </main>
    </div>
  )
}