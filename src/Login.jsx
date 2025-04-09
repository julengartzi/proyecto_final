import { Link } from 'react-router-dom'
import { Mail, Lock, ArrowRight } from 'lucide-react'
import './App.css'
import pesa from './assets/pesa.png';


function Login() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Left Panel - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-sky-500/20 backdrop-blur-sm z-10" />
        <img
          src="https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="object-cover object-bottom w-full h-screen"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
        <div className="absolute bottom-10 left-10 text-white z-30 max-w-lg">
          <h2 className="text-5xl font-bold mb-4 leading-tight">Zure osasun-bidaia hemen hasten da</h2>
          <p className="text-lg opacity-90">
            Mila erabiltzailek baino gehiagok osasun hobe baterako bidea aukeratu dute. Zure txanda da!
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-1 text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">

              <img
                src={pesa}
                alt="pesa"
                className="w-14 h-14"
              />
            </div>
            <h1 className="text-2xl font-bold">Sortu zure kontua</h1>
            <p className="text-gray-600">Sartu zure informazioa hasteko</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              {/* La etiqueta 'htmlFor' se utiliza para que al hacer click en el label el focus te lleve a en input*/}
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email-a
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
                <input
                  id="email"
                  type="email"
                  placeholder="Sartu zure emaila"
                  className="w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                  required
                />
              </div>
            </div>


            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Pasahitza
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
                <input
                  id="password"
                  name="password"
                  type="text"
                  placeholder="Sartu zure pasahitza"
                  className="w-full pl-10 pr-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 flex items-center justify-center"
            >
              Sartu
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <div className="text-center text-sm text-gray-600">
                            Don't have an account?{' '}{/* La etiqueta de la izquierda se usa para añadir un espacion en jsx*/}
                        </div>

          </form>


        </div>
      </div>


    </div>
  )
}

export default Login
