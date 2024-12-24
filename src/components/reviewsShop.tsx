const reviews = [
  {
    name: 'Samantha D.',
    date: 'August 14, 2023',
    review:
      'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.',
    rating: 5,
  },
  {
    name: 'Alex M.',
    date: 'August 15, 2023',
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    rating: 5,
  },
  {
    name: 'Ethan R.',
    date: 'August 16, 2023',
    review:
      'This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.',
    rating: 4,
  },
  {
    name: 'Olivia P.',
    date: 'August 17, 2023',
    review:
      'As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.',
    rating: 5,
  },
  {
    name: 'Liam K.',
    date: 'August 18, 2023',
    review:
      'This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.',
    rating: 4,
  },
  {
    name: 'Ava H.',
    date: 'August 19, 2023',
    review:
      "I'm not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    rating: 5,
  },
]

export default function Reviews_Shop(){
  return(
    <section id="reviews" className="bg-white rounded-lg shadow p-6">
<h2 className="text-4xl font-extrabold text-gray-800 mb-4">All Reviews</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {reviews.map((review, index) => (
    <div
      key={index}
      className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
    >
      <div className="flex items-center space-x-2 mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-yellow-500">&#9733;</span>
        ))}
        {[...Array(5 - review.rating)].map((_, i) => (
          <span key={i} className="text-gray-300">&#9733;</span>
        ))}
      </div>
      <h3 className="text-gray-700 font-semibold">{review.name}</h3>
      <p className="text-sm text-gray-500">Posted on {review.date}</p>
      <p className="text-gray-600 mt-2">{review.review}</p>
    </div>
  ))}
 </div> 
</section>
  )
}
