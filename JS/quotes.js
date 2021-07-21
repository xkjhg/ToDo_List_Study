const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const quotes = [
  {
    quote:
      "A good compromise, a good piece of legislation, is like a good sentence; or a good piece of music. Everybody can recognize it. They say, 'Huh. It works. It makes sense.",
    author: "Barack Obama"
  },
  {
    quote:
      "It is a paradoxical but profoundly true and important principle of life that the most likely way to reach a goal is to be aiming not at that goal itself but at some more ambitious goal beyond it.",
    author: "Arnold Toynbee"
  },
  {
    quote:
      "Those who create are rare; those who cannot are numerous. Therefore, the latter are stronger.",
    author: "Gabriel Coco Chanel"
  },
  {
    quote: "In the field of observation, chance favors only the prepared mind.",
    author: "Louis Pasteur"
  },
  {
    quote:
      "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
    author: "Dr. David M. Burns"
  },
  {
    quote:
      "Getting ahead in a difficult profession requires avid faith in yourself. That is why some people with mediocre talent, but with great inner drive, go much further than people with vastly superior talent.",
    author: "Sophia Loren"
  },
  {
    quote:
      "If you want to build a ship, don't drum up the men to gather wood, divide the work and give orders. Instead, teach them to yearn for the vast and endless sea.",
    author: "Antoine de Saint-Exupery"
  },
  {
    quote: "I am not afraid of storms for I am learning how to sail my ship.",
    author: "Helen Keller"
  },
  {
    quote: "The greatest lesson in life is to know that even fools are right sometimes.",
    author: "Sir Winston Churchill"
  },
  {
    quote:
      "To know a man, observe how he wins his object, rather than how he loses it; for when we fail our pride supports us; when we succeed, it betrays us.",
    author: "Charles Caleb Colton"
  }
]

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerHTML = todaysQuote.quote
author.innerHTML = todaysQuote.author
