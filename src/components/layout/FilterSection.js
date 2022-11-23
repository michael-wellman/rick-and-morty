import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function FilterSection() {
    return(
        <section>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Status</Accordion.Header>
                    <Accordion.Body>
                        Check on one of the status buttons below:<br/>
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary">Alive</Button>{''}
                            <Button variant="outline-primary">Dead</Button>{' '}
                            <Button variant="outline-primary">Unknown</Button>{' '}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Species</Accordion.Header>
                    <Accordion.Body>
                        Check on one of the species buttons below:
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary">Human</Button>{' '}
                            <Button variant="outline-primary">Alien</Button>{' '}
                            <Button variant="outline-primary">Humanoid</Button>{' '}
                            <Button variant="outline-primary">Poopybutthole</Button>{' '}
                            <Button variant="outline-primary">Mythological</Button>{' '}
                            <Button variant="outline-primary">Unknown</Button>{' '}
                            <Button variant="outline-primary">Animal</Button>{' '}
                            <Button variant="outline-primary">Disease</Button>{' '}
                            <Button variant="outline-primary">Robot</Button>{' '}
                            <Button variant="outline-primary">Cronenbert</Button>{' '}
                            <Button variant="outline-primary">Planet</Button>{' '}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Gender</Accordion.Header>
                    <Accordion.Body>
                        Check on one of the gender buttons below:
                        <div className="d-grid gap-2">
                            <Button variant="outline-primary">female</Button>{' '}
                            <Button variant="outline-primary">male</Button>{' '}
                            <Button variant="outline-primary">genderless</Button>{' '}
                            <Button variant="outline-primary">Unknown</Button>{' '}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
        </section>
    )
}

export default FilterSection;