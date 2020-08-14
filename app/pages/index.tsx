import { Head, Link } from "blitz"
import { Tree } from "@prisma/client"
import { useEffect } from "react"

const Home = () => {
  const enumTree = Tree
  console.log("1", enumTree)
  useEffect(() => {
    console.log("2", enumTree)
  }, [])
  return (
    <div className="container">
      <Head>
        <title>test-enum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>test enum: {enumTree.ARBORVITAE}</main>
    </div>
  )
}

export default Home
