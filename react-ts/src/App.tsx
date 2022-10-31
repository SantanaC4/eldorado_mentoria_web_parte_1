import { useState, useEffect } from 'react';
import GetUserInformation from './components/GetUserInformation';
import { useAxiosFetch } from './fetchers/useAxiosFetch';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import { Repository} from './models/types'

function App() {
  const [reposList, setReposList] = useState<Repository[]>([]);
  const [userName, setUserName] = useState<string>('');

  const [ data, error, loading, fetchData] = useAxiosFetch();

  const userNameHandler = (userName: string) => {
    setUserName(userName);  
  };
  
  useEffect(() => {
    console.log(data);
      if (data) {
          setReposList(data);
      } else {
          setReposList([]);
      }
  }, [data]);

  useEffect(() => {
      if (error) {
          console.log(error);
      }
  }, [error]);

  useEffect(() => {
      if (loading) {
          console.log("Retrieving data");
      }
  }, [loading]);

  useEffect(() => {
    if (userName) {
      fetchData(`${userName}/repos`);
    }
  }, [userName]);

  return (
      <>      
        <Header userNameHandler={userNameHandler}/>
        <Container className="mt-5">
          <Row>
              <Col>
                  {userName.length ? <GetUserInformation userName={userName}/> : <p className="mt-5">Found no User</p>}
              </Col>
              <Col>
                  <RepositoryList repositories={reposList}/>
              </Col>
          </Row>
        </Container>
      </>
  );
}

export default App;