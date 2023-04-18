import { connect } from "react-redux";
import { setIssues } from "../../redux/actions";
import { useEffect } from "react";
import { getDataFromApi } from "../../modules.js";

const Layout = ({ repoRedux, repoIsLoadedRedux, setIssues, issuesRedux }) => {

    const {issues_url} = repoRedux;
    // const urlIssuesApi = issues_url.replace('{/number}', '');

    // if(repoIsLoadedRedux){
    //     const urlIssuesApi = issues_url.replace('{/number}', '');
    // }

    const getUrlIssuesApi = (api) => {
        const urlIssuesApi = api.replace('{/number}', '');
        return urlIssuesApi;
    }

    useEffect(() => {
        getDataFromApi(getUrlIssuesApi(issues_url), setIssues);
    }, []);

    console.log(issues_url);
    console.log(getUrlIssuesApi(issues_url));

    return(
        <div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    repoRedux: state.repo.repo,
    repoIsLoadedRedux: state.repo.repoIsLoaded,
    issuesRedux: state.issues.issues
  });
  
  export default connect(mapStateToProps, { setIssues })(Layout);