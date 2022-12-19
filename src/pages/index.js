import Layout from "../components/HomeLayout";
import Hero from "@/components/Hero";
import {PrimaryFeatures} from "@/components/PrimaryFeatures";
import {SecondaryFeatures} from "@/components/SecondaryFeatures";

export default function Home() {
  return (
    <Layout>
      <Hero/>
      <PrimaryFeatures/>
      <SecondaryFeatures/>
    </Layout>
  )
}
