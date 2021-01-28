import React, { useState } from "react";
import { Button, Modal , Form} from "react-bootstrap";
export const AddMovie = ({ addMovie }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Poster, setPoster] = useState("");
  const [Date, setDate] = useState("");
  const [Rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  const submitMovie = () => {
    let newMovie = {
      title: Title,
      description: Description,
      Poster: Poster,
      date: Date,
      rating: Rating,
      trailer: trailer,
    };
    addMovie(newMovie);
    handleClose();
  };

  return (
    <>
      <button type="button" className="btn btn-danger" onClick={handleShow}>ADD</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie Name "
                onChange={(e) => setTitle(e.target.value)} required
              />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie Description "
                onChange={(e) => setDescription(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formBasicDate">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie year"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Poster</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Poster"
                onChange={(e) => setPoster(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Lien</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter lien"
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setRating(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitMovie}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
