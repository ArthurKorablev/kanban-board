import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { setUrl, setRepo, setUrlIsLoaded } from "../../redux/actions";
import { getUrlApi, getDataFromApi, onSubmit } from "../../modules";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const InputComponent = ({
  setRepo,
  setUrl,
  setUrlIsLoaded,
  repoRedux,
  urlRedux,
  repoIsLoadedRedux,
  urlIsLoadedRedux,
}) => {
  useEffect(() => {
    if (urlIsLoadedRedux) {
      getDataFromApi(getUrlApi(urlRedux), setRepo);
    }
  }, [urlIsLoadedRedux]);

  return (
    <div>
      <Form
        className="m-4"
        onSubmit={(event) => onSubmit(event, setUrlIsLoaded)}
      >
        <Row>
          <Col xs={11}>
            <Form.Control
              placeholder="Enter repo URL"
              value={urlRedux}
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
            <Form.Text>
              {urlIsLoadedRedux ? (
                <Nav.Link href={urlRedux}>{urlRedux}</Nav.Link>
              ) : (
                ""
              )}
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

export default connect(mapStateToProps, { setRepo, setUrl, setUrlIsLoaded })(
  InputComponent
);
