import PropTypes from "prop-types";

function Book({ name, picture, rating }) {
  //console.log(props);
  return (
    <div>
      <h2> 좋아하는 책: {name}</h2>
      <h4>{rating}/10.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const bookILike = [
  {
    id: 1,
    name: '용의자 X의 헌신',
    image: 'https://bookthumb-phinf.pstatic.net/cover/124/818/12481857.jpg?udate=20220125',
    rating: 8.93
  },
  {
    id: 2,
    name: '너의 췌장을 먹고 싶어',
    image: 'https://bookthumb-phinf.pstatic.net/cover/118/235/11823575.jpg?udate=20201014',
    rating: 8.17
  },
  {
    id: 3,
    name: '나미야 잡화점의 기적',
    image: 'https://bookthumb-phinf.pstatic.net/cover/071/027/07102772.jpg?udate=20220122',
    rating: 8.72
  },
  {
    id: 4,
    name: '지우개 같은 사람들이 나를 지우려 할 때',
    image: 'https://bookthumb-phinf.pstatic.net/cover/125/577/12557739.jpg?udate=20210106',
    rating: 9.43
  },
  {
    id: 5,
    name: '지금, 행복하고 싶어',
    image: 'https://bookthumb-phinf.pstatic.net/cover/164/075/16407596.jpg?udate=20201017',
    rating: 10.0
  },
];

function App() { 
  return (
    <div>
      {bookILike.map(book =>
        <Book key={book.id} name={book.name} picture={book.image} rating={book.rating}/>
      )}
    </div>
  );
}

Book.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;
