import type { NextPage } from 'next';
import { useRouter } from 'next/router';
// material
import Button from '@mui/material/Button';
import { NextLinkComposed } from '../utils/NextLink';



const Home: NextPage = () => {

  const {push, replace} = useRouter();

  // handler
  const handleRandom = (param: string): void => {

    switch (param) {
      case "push":
        // push route, can go back
        push({
          pathname: "/portfolio",
          query: {name: "i cam from home"}
        });
        break;
      
      case "replace":
        // replace route can go back
        replace({
          pathname: "/portfolio",
          query: {name: "i cam from home"}
        });
        break;
      
      default:
        break;
    }
  };


  return (
    <div>
     <div> Hello World </div>
     <Button
        variant={"outlined"}
        component={NextLinkComposed}
        to={{
          pathname: '/portfolio',
          query: { name: 'test' },
        }}
      >
        portfolio
      </Button>
      <Button
        variant={"outlined"}
        component={NextLinkComposed}
        to={{
          pathname: '/portfolio/54683',
          query: { name: 'test' },
        }}
      >
        portfolio with id
      </Button>
      <Button
        variant={"outlined"}
        component={NextLinkComposed}
        to={{
          pathname: '/clients/333/444',
          query: { name: 'test' },
        }}
      >
        client double id
      </Button>
      <Button
        variant={"contained"}
        onClick={() => handleRandom("push")}
      >
        using router push to route
      </Button>
      <Button
        variant={"contained"}
        onClick={() => handleRandom("replace")}
      >
        using router replace to route
      </Button>
    </div>
  );
};

export default Home;