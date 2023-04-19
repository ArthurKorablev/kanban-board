import { connect } from "react-redux";
import { setIssues } from "../../redux/actions";
import { useEffect } from "react";
import { getDataFromApi, getUrlIssuesApi } from "../../modules";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IssueCard from "../IssueCard";


const Layout = ({ repoRedux, repoIsLoadedRedux, setIssues, issuesRedux }) => {

    const {issues_url} = repoRedux;

    useEffect(() => {
        if(repoIsLoadedRedux){
            getDataFromApi(getUrlIssuesApi(issues_url), setIssues);
        }
    }, [repoIsLoadedRedux]);

    console.log(issuesRedux)

    return(
        <div>
            <Container>
                <Row>
                 {/* {taskStatuses.map(status => (
                    <Col key={status} status={status}>
                        <h3>{status}</h3>
                        {issuesRedux.map((issue, index) => (
                            <IssueCard key={index} issue = {issue} status= {status}/>
                        ))}
                    </Col>
                 ))} */}
                </Row>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => ({
    repoRedux: state.repo.repo,
    repoIsLoadedRedux: state.repo.repoIsLoaded,
    issuesRedux: state.issues.issues
  });
  
  export default connect(mapStateToProps, { setIssues })(Layout);