import Image from 'next/image'
import ResultsLayout from '@/app/components/ResultsLayout'
import ActionBanner from "@/app/components/ActionBanner";

export default function Home() {
  return (
    <main className=" ">
      <div className="bg-plain-white h-screen">
        <div className="bg-amber-300 flex h-48 ">
          <h1 className="font-salsa text-3xl font-semibold self-baseline justify-self-end"> Modern Pilgrims </h1>
        </div>
        {/*<div className=" flex flex-col flex-wrap w-full content-center justify-center">*/}
        <ActionBanner />
        <ResultsLayout/>
        {/*</div>*/}
      </div>
    </main>
  )
}
