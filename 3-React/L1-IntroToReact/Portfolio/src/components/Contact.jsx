import Card from './Card';

export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="links">
        <Card>
          <h5>Email:</h5>
          <h6>Donnahue@George.io</h6>
        </Card>
        <Card>
          <h5>Github:</h5>
          <h6>latinobull</h6>
        </Card>
      </div>
    </div>
  );
}
