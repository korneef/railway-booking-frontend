import { LoadingBar } from 'entities/index';
import { About, HowItWorks, Reviews } from 'widgets/index'

export default function HomePage() {
  return (
    <main>
      <LoadingBar />
      <About />
      <HowItWorks />
      <Reviews />
    </main>
  )
}