import { useState, useEffect } from 'react';
import GetUserInformation from './components/GetUserInformation';
import { useAxiosFetch } from './hook/useAxiosFetch';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import RepositoryList from './components/RepositoryList';
import { Repository} from './models/types'

function App() {
  const [reposList, setReposList] = useState<Repository[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [data, error, loading, fetchData] = useAxiosFetch();

  const userNameHandler = (userName: string) => {
    setUserName(userName);  
  };

  const cleanButtonHandler = (cleanButton: boolean) => {
    if (cleanButton) {
      setReposList([]); 
      setUserName('');
    };
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
          setReposList([{id: 0, name: 'Error: Try another user' ,
            description: `${error}`, html_url: '', forks: 0, language: 'ERROR'
        }]);
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
  }, [userName, fetchData]);

  return (
      <>      
        <Header userNameHandler={userNameHandler} cleanButtonHandler={cleanButtonHandler} />
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