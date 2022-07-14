document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const button = document.querySelector('button')
  const quote = document.querySelector('blockquote p')
  const cite = document.querySelector('blockquote cite')
  const tweetMe = document.getElementById('tweetMe')

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content
      cite.textContent = data.author
    } else {
      quote.textContent = 'An error occured'
      console.log(data)
    }
  }

  const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quote.textContent} ${cite.textContent}`
    window.open(tweetPost)
  }

  document.getElementById('social_media').onclick = function () {
    location.href = 'https://www.instagram.com/one_motivational_quote/'
  }

  // Attach an event listener to the `button`
  button.addEventListener('click', updateQuote)
  tweetMe.addEventListener('click', tweetNow)

  // call updateQuote once when page loads
  updateQuote()
})
