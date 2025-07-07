import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className='bg-stone-900 min-h-screen flex flex-col items-center justify-center py-4 px-2 sm:px-0'>
      <Todo />

      <footer className="mt-8 flex flex-col items-center">
        <p className='text-white text-sm sm:text-base flex items-center gap-1'>
          Made with
          <span className="inline-flex items-center mx-1">
            <lord-icon
              src="https://cdn.lordicon.com/gbkitytd.json"
              trigger="hover"
              colors="primary:#ff0000,secondary:#ff0000,tertiary:#ff0000"
              style={{ width: '22px', height: '22px', verticalAlign: 'middle' }}
            >
            </lord-icon>
          </span>
          by <a href="" className="ml-1">Sayan</a>
        </p>
      </footer>
    </div>
  )
}

export default App
