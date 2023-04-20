import { connect } from "react-redux";
import { setIssues } from "../../redux/actions";
import { useEffect } from "react";
import { getDataFromApi, getUrlIssuesApi } from "../../modules";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IssueCard from "../IssueCard";


const Layout = ({ repoRedux, repoIsLoadedRedux, setIssues, issuesRedux }) => {
    
    const taskStatuses = ['Todo', 'Progres', 'Done'];
    const {issues_url} = repoRedux;

    useEffect(() => {
        if(repoIsLoadedRedux){
            getDataFromApi(getUrlIssuesApi(issues_url), setIssues);
        }
    }, [repoIsLoadedRedux]);


    return(
        <div>
            <Container>
                <Row className="p-1">
                    {taskStatuses.map(status => (
                        <IssueCard key={status} status={status}/>
                    ))}
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