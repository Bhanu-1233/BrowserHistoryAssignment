import {Component} from 'react'
import OrderHistory from '../OrderHistory'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class OrderHistoryPage extends Component {
  state = {
    inputText: '',
    initialHistoryArray: initialHistoryList,
  }

  handleInput = event => {
    this.setState({inputText: event.target.value})
  }

  onDelete = id => {
    const {initialHistoryArray} = this.state
    const updatedList = initialHistoryArray.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({initialHistoryArray: updatedList})
  }

  render() {
    const {inputText, initialHistoryArray} = this.state
    const filteredList = initialHistoryArray.filter(eachItem =>
      eachItem.title.toLowerCase().includes(inputText.toLowerCase()),
    )

    const isListEmpty = filteredList.length === 0 ? 'true' : 'false'

    return (
      <div className="bg-container">
        <div className="history-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo-img"
            alt="app logo"
          />
          <div className="input-El-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-img"
              alt="search"
            />
            <input
              type="search"
              className="input-El"
              placeholder="SearchHistory"
              value={inputText}
              onChange={this.handleInput}
            />
          </div>
        </div>
        {isListEmpty === 'false' ? (
          <ul className="card-list-container">
            {filteredList.map(eachHistory => (
              <OrderHistory
                key={eachHistory.id}
                eachHistoryDetails={eachHistory}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        ) : (
          <div className="history-con">
            <p className="history-con">There is no history to show</p>
          </div>
        )}
      </div>
    )
  }
}
export default OrderHistoryPage
