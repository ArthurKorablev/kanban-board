// import { useEffect, useState } from "react";
// import { setIssues, setUrl, setRepo } from "../../redux/actions";
// import { connect } from "react-redux";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

// const Main = ({ setRepo, setUrl, repoRedux, urlRedux, isLoadedRedux }) => {
  
//   useEffect(() => {
//     if (!isLoadedRedux) {
//       getRepo();
//     }
//   }, [isLoadedRedux]);

//   const getRepo = async () => {
//     const response = await fetch("https://api.github.com/repos/facebook/react");
//     const data = await response.json();
//     setRepo(data);
//   };

//   return (
//     <div>
//       <Form className="m-4">
//         <Row>
//           <Col xs={11}>
//             <Form.Control placeholder="Enter repo URL" />
//             <Form.Text muted>
//               Your password must be 8-20 characters long
//             </Form.Text>
//           </Col>

//           <Col xs="auto">
//             <Button type="submit" className="mb-2">
//               Submit
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   );
// };

// const mapStateToProps = (state) => ({
//   repoRedux: state.repo.repo,
//   isLoadedRedux: state.repo.isLoaded,
//   // urlRedux: state.url.url
// });
// // const mapStateToProps = (state) => {
// //   console.log(state);
// // };
// export default connect(mapStateToProps, { setRepo })(Main);

import { useEffect, useState } from "react";
import { setIssues, setUrl, setRepo } from "../../redux/actions";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Main = ({ setRepo, setUrl, repoRedux, urlRedux, isLoadedRedux }) => {

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (!isLoad && urlRedux != "") {
      getRepo(urlRedux);
    }
  }, [isLoad]);

  const getRepo = async (url) => {
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    setRepo(data);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoad(false);
  }

  return (
    <div>
      <Form className="m-4" onSubmit={(event) => onSubmit(event)}>
        <Row>
          <Col xs={11}>
            <Form.Control placeholder="Enter repo URL" value={urlRedux} onChange={(e)=>{setUrl(e.target.value)}}/>
            <Form.Text muted>
              Your password must be 8-20 characters long
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
  repoRedux: state.repo.repo,
  isLoadedRedux: state.repo.isLoaded,
  
});
// const mapStateToProps = (state) => {
//   console.log(state);
// };
export default connect(mapStateToProps, { setRepo, setUrl })(Main);
