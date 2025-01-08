import React, { useState, useEffect } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header'
import { AnimatePresence } from 'framer-motion'
import Home from './components/Home'
import About from './components/About'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import Contact from './components/Contact'
import Loading from './components/Loading'
import Cursor from './components/Cursor'

const App: React.FC = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const totalDuration = 3000
    const updateInterval = 30

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 100 / (totalDuration / updateInterval)
      })
    }, updateInterval)

    const timer = setTimeout(() => {
      setIsLoading(false)
      clearInterval(progressInterval)
    }, totalDuration)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <>
      <GlobalStyles isLoading={isLoading} />
      <Cursor />
      {isLoading ? (
        <Loading progress={progress} />
      ) : (
        <>
          <Header />
          <main>
            <AnimatePresence mode="wait">
              <section id="home">
                <Home />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="project1">
                <Project1 />
              </section>

              <section id="project2">
                <Project2 />
              </section>

              <section id="project3">
                <Project3 />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </AnimatePresence>
          </main>
        </>
      )}
    </>
  )
}

export default App
