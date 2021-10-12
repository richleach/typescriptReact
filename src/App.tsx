import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet'
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person'
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Input } from './components/Input'
import { Container } from './components/Container';
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'



function App() {
  const personName = {
    first: 'Jordan',
    last: 'Lendwist'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]
  return (
    <div className="App">
      <h2>React Typescript</h2><br /><br />
      <Greet name='Sam' messageCount={23} isLoggedIn={true}/>
      <br />
      <Status status='success' />
      <Heading>Placeholder text here</Heading>

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>  


      <Oscar>
        <Heading>This is the heading text, with children props!</Heading>
      </Oscar>
      <Container styles={{border: 'thin solid black', padding: '1rem'}} />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Button handleClick={(event, id) => {console.log('Button clicked', event, id)}} />
      <PersonList names={nameList} />
      
    </div>
  );
}

export default App;