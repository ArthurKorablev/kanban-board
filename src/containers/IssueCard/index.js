import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { connect } from "react-redux";
import { setBoards, setBoardsIsLoaded } from "../../redux/actions";

import {
  setBoardsAndIssues,
  calculateDate,
  dragOverHandler,
  dragLeavHandler,
  dragStartHandler,
  dragEndHandler,
  dropHaddler,
} from "../../modules";
import { useEffect, useState } from "react";

const IssueCard = ({ status, issuesCurrentStatus, taskStatuses, boardsRedux, boardIsLoadedRedux }) => {

  // const [boards, setBoards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentBord, setCurrentBord] = useState(null);
  const [currentIssue, setCurrentIssue] = useState(null);
  
  console.log(issuesCurrentStatus);
  useEffect(() => {
     if(!boardIsLoadedRedux){
      setBoards(taskStatuses, issuesCurrentStatus);
      setBoardsIsLoaded(true);
      setIsLoaded(true)
    }
    
  }, [boardIsLoadedRedux]);

  console.log(boardsRedux);
  console.log(boardIsLoadedRedux);
  console.log(isLoaded);
  return (
    <>
      <Row>
        {boardsRedux.map((board) => (
          <Col
            className="m-2 p-4"
            style={{
              background: "lightgray",
              border: "3px solid grey",
              borderRadius: "10px",
            }}
          >
            <h2>{board.title}</h2>
            {board.issues.map((issue) => (
              <Card
                style={{ width: "23rem" }}
                className="mb-3"
                border="dark"
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeavHandler(e)}
                onDragStart={(e) => dragStartHandler(e, status, issue)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHaddler(e, status, issue)}
                draggable={true}
              >
                <Card.Header>id: {issue.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{issue.title}</Card.Title>
                  <Card.Text>
                    # {issue.number} Opened {calculateDate(issue.created_at)}{" "}
                    Days ago
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state) => ({
  issuesRedux: state.issues.issues,
  urlRedux: state.url.url,
  boardsRedux: state.boards.boards,
  boardIsLoadedRedux: state.boardsIsLoaded.boardsIsLoaded
});

export default connect(mapStateToProps, { setBoards, setBoardsIsLoaded })(IssueCard);
