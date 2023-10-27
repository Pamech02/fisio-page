import React from 'react'

const Header = () => {
  return (
    <header className="z-[999] relative">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl "><strong>Representaciones Sociales de la Calidad de Vida en Adultos Mayores</strong></h1>
        <nav className="bg-blue-400 rounded-lg">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 mr-4 space-x-8 text-xl">
                <li>
                  <a href="#inicio" className="text-gray-900 hover:underline">Inicio</a>
                </li>
                <li>
                  <a href="#obj" className="text-gray-900 hover:underline">Objetivo y antecedentes</a>
                </li>
                <li>
                  <a href="#entrevista" className="text-gray-900 hover:underline">Entrevista</a>
                </li>
                <li>
                  <a href="#coment" className="text-gray-900 hover:underline">Comentarios</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header