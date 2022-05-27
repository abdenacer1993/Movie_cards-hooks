import {React,useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';
import "bootstrap/dist/css/bootstrap.min.css";

const Add = ({AddMovie}) => {
  const [name,setName]=useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [Poster,setPoster]=useState("");
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleSubmit = (e) => {e.preventDefault()
  AddMovie({Title:name,Genre:genre,Released:date,Rate:rating,Poster,Id:Math.random()})
   setName("");
   setGenre("");
   setDate("");
   setPoster("");
   setRating(0);
   handleClose() }

  return (
    <>
    <button  className='buttonadd' onClick={handleShow}>
      Add Movie
    </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Movie Name" onChange={(e)=> setName(e.target.value) }value={name} required='required' />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Poster Url</Form.Label>
    <Form.Control type="url" placeholder="Movie Name" onChange={(e)=> setPoster(e.target.value) } value={Poster} required='required' />
    
    
  </Form.Group>
  

  <Form.Group className="mb-3" >
    <Form.Label>Genre</Form.Label>
    <Form.Control type="text" placeholder="Genre"  onChange={(e)=> setGenre(e.target.value) } value={genre} required='required'/>
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Date</Form.Label>
    <Form.Control type="date" placeholder="Released date" onChange={(e)=> setDate(e.target.value) } value={date} required='required' />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Rate</Form.Label>
    <Rating onClick={handleRating} ratingValue={rating}  /* Available Props */ />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
  );
}

export default Add