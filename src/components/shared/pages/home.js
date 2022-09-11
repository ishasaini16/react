import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return <Form>
       <h1 className="text-center"> Contact Form</h1>
       <p>The FormControl component renders a form control with Bootstrap styling. 
        The FormGroup component wraps a form control with proper spacing, along with support for a label,
         help text, and validation state. To ensure accessibility, set controlId on FormGroup, and use FormLabel
          for the label.</p>
          <p>The FormControl component renders a form control with Bootstrap styling. 
        The FormGroup component wraps a form control with proper spacing, along with support for a label,
         help text, and validation state. To ensure accessibility, set controlId on FormGroup, and use FormLabel
          for the label.</p>
          <p>The FormControl component renders a form control with Bootstrap styling. 
        The FormGroup component wraps a form control with proper spacing, along with support for a label,
         help text, and validation state. To ensure accessibility, set controlId on FormGroup, and use FormLabel
          for the label.</p>
          <p>The FormControl component renders a form control with Bootstrap styling. 
        The FormGroup component wraps a form control with proper spacing, along with support for a label,
         help text, and validation state. To ensure accessibility, set controlId on FormGroup, and use FormLabel
          for the label.</p>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit" className="md">
      Submit
    </Button>
  </Form>;
  };
  
  export default Home;