import React, { useContext, useState } from 'react'
import { Context } from './index'
import { useCollectionData } from 'react-firebase-hooks/firestore'
// import firebase from 'firebase'
import 'firebase/firestore'

function App() {
  const { firestore } = useContext(Context)
  const [sends, loader] = useCollectionData(
    firestore.collection('sends').orderBy('data')
  )
  const [value, setValue] = useState('')
  const [name, setName] = useState('')

  /**
   * функция добавляет объект с именем пользователя, сообщением и датой в firestore коллекцию, после чего отчищает поля ввода. Поле date используется для сортировки коллекции по дате отправления сообщения
   *@param {string} name имя пользователя
   *@param {string} value текст сообщения
   *@param {number} data текст сообщения
   */
  const sendMessage = async (name, value, data) => {
    firestore.collection('sends').add({
      name,
      value,
      data,
    })
    setValue('')
    setName('')
  }

  if (loader) {
    return 'загрузка'
  }

  return (
    <>
      <div>
        <label htmlFor="youName">Ваше имя:</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          id="youName"
        />
      </div>
      <div>
        <label htmlFor="youMessage">Ваше сообщение:</label>
        <br />
        <textarea
          id="youMessage"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></textarea>
      </div>
      <button onClick={sendMessage.bind(this, name, value, +new Date())}>
        Отправить
      </button>

      <ul className="messanges">
        {sends.map((send, index) => {
          return (
            <li
              key={index}
              className="oneMessage"
            >{`${send.name}: ${send.value}`}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
