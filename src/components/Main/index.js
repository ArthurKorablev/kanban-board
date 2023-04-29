import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import {
  setUrl,
  setRepo,
  setUrlIsLoaded,
  setIssues,
  setBoards,
  setBoardsIsLoaded,
} from "../../redux/actions";
import {
  getUrlApi,
  getDataFromApi,
  onSubmit,
  getUrlIssuesApi,
  issueWithCurrentStatus,
  setBoardsAndIssues,
} from "../../modules";

import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
// import IssueCard from "../IssueCard";
import IssueCardComponent from "../IssueCardComponent";

const Main = ({
  setRepo,
  setUrl,
  setUrlIsLoaded,
  setIssues,
  urlRedux,
  urlIsLoadedRedux,
  repoRedux,
  repoIsLoadedRedux,
  issuesRedux,
  setBoards,
  setBoardsIsLoaded,
}) => {
  const taskStatuses = ["Todo", "Progres", "Done"];

  const onSubmitHeandler = async (event, taskStatuses) => {
    event.preventDefault();

    console.log(urlRedux);
    await getDataFromApi(await getUrlApi(urlRedux), setRepo);
    const { issues_url } = await repoRedux;
    console.log(issues_url);
    await getDataFromApi(await getUrlIssuesApi(issues_url), setIssues);
    console.log(issuesRedux);
    const issuesCurrentStatus = await issueWithCurrentStatus(await issuesRedux);
    console.log(issuesCurrentStatus);
    await setBoards(taskStatuses, issuesCurrentStatus);
  };

  return (
    <div>
      <Form
        className="m-4"
        onSubmit={(event) => onSubmitHeandler(event, taskStatuses)}
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
      <div>
        <Container>
          <IssueCardComponent key={"issue"}/>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  urlRedux: state.url.url,
  urlIsLoadedRedux: state.urlIsLoaded.urlIsLoaded,
  repoRedux: state.repo.repo,
  repoIsLoadedRedux: state.repo.repoIsLoaded,
  issuesRedux: state.issues.issues,
  boardsRedux: state.boards.boards,
  boardIsLoadedRedux: state.boardsIsLoaded.boardsIsLoaded,
});

export default connect(mapStateToProps, {
  setRepo,
  setUrl,
  setUrlIsLoaded,
  setIssues,
  setBoards,
  setBoardsIsLoaded,
})(Main);

// const onSubmitHeandler = async (event, taskStatuses) => {
//   event.preventDefault();
//   await setUrlIsLoaded(true);

//   if (urlIsLoadedRedux) {
//     await getDataFromApi( getUrlApi(urlRedux), setRepo);

//     const { issues_url } = repoRedux;
//     await getDataFromApi(getUrlIssuesApi(issues_url), setIssues);

//     const issuesCurrentStatus = issueWithCurrentStatus(issuesRedux);
//     await setBoards(taskStatuses, issuesCurrentStatus);
//   }
// };
