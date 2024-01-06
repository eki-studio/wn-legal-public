interface LayputProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayputProps) {
  return <html lang="en">{children}</html>
}
