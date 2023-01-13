import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import tailwindConfig from '@/tailwind.config'
import { createClient } from "next-sanity";


const inter = Inter({ subsets: ['latin'] })

export default function Home({blogs}) {
  console.log(blogs[0])
  return (
    <>
    <h1>{blogs[0].title}</h1>
    <div className="home">
      <div className="nav bg-gray-400">
      {blogs[0].content}
      </div>
      <span> I am home page </span>
    </div>
    </>
  )
}

export async function getServerSideProps(context){
  const client = createClient({
    projectId: 'i82hibha',
    dataset: 'production',
    useCdn: true
  });
  const query =  `*[_type == "blog"]`;
  const blogs = await client.fetch(query);
  return{
    props: {
      blogs
    }
  }
}
