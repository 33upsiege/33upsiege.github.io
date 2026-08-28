import './App.css'
import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'
import PrintButton from './components/PrintButton'
import Education from "./components/Education";

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
