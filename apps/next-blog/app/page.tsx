import { Inter, Source_Serif_Pro } from 'next/font/google'
import { ButtonMenu } from './components/buttons/button-menu';

const inter = Inter({ subsets: ['latin'] })
const sourceSerif = Source_Serif_Pro({
  weight: '600'
});

export default function Page() {
  return (
    <>
      <h1 className={inter.className}>Title goes here</h1>
      <p className={inter.className}>Your content here</p>
      <ButtonMenu />
    </>
  )
}
