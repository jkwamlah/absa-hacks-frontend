import Image from 'next/image'
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between">
      <Landing/>
    </main>
  )
}
