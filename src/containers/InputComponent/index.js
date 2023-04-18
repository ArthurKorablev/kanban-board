import { useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import { setIssues, setUrl, setRepo, setUrlIsLoaded } from "../../redux/actions";
import { getUrlApi } from '../../modules.js';
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const InputComponent = ({ setRepo, setUrl, setUrlIsLoaded, repoRedux, urlRedux, repoIsLoadedRedux, urlIsLoadedRedux }) => {

  useEffect(() => {
    if (urlIsLoadedRedux) {
      getRepo(getUrlApi(urlRedux));
    }
  }, [urlIsLoadedRedux]);
  
  const getRepo = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setRepo(data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setUrlIsLoaded(true);
  }

  return (
    <div>
      <Form className="m-4" onSubmit={(event) => onSubmit(event)}>
        <Row>
          <Col xs={11}>
            <Form.Control placeholder="Enter repo URL" value={urlRedux} onChange={(e)=>{setUrl(e.target.value)}}/>
            <Form.Text>
              {urlIsLoadedRedux ? <Nav.Link to={urlRedux}>{urlRedux}</Nav.Link> : ''} 
            </Form.Text>
          </Col>

          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  urlRedux: state.url.url,
  urlIsLoadedRedux: state.urlIsLoaded.urlIsLoaded,
  repoRedux: state.repo.repo,
  repoIsLoadedRedux: state.repo.repoIsLoaded,  
});

export default connect(mapStateToProps, { setRepo, setUrl, setUrlIsLoaded })(InputComponent);
