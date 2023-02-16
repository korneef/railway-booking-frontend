import About from 'widgets/about/about';
import HowItWorks from 'widgets/howItWorks/howItWorks';
import Reviews from 'widgets/reviews/reviews';
import LoadingBar from 'entities/loadingBar/loadingBar';

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