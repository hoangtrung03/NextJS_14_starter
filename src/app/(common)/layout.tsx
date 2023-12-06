import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <TopBar />
      <Navbar />
      {children}
    </main>
  )
}
