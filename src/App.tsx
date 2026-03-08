import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import PrintButton from './components/PrintButton'
import './App.css'

export default function App() {
  return (
    <div className="resume">
      <Header />
      <main className="resume-body">
        <Summary />
        <Skills />
        <Experience />
        <Education />
      </main>
      <PrintButton />
    </div>
  )
}
