import React, { useEffect } from 'react'
import uuid from 'uuid'
import Card from './Card'
import { connect } from 'react-redux'
import { getQuotes } from './state/actionCreators'

function App({ quotes, getQuotes }) {
  useEffect(() => {
    getQuotes()
  }, [])
  return (
    <div className='App'>
      <h1>Quotes!</h1>
      {quotes.map(quote => {
        return <Card key={uuid()} text={quote.en} author={quote.author} />
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
  }
}

export default connect(mapStateToProps, { getQuotes })(App)
