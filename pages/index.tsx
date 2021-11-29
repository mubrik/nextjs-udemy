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
          pathname: '/events',
          query: { name: 'test' },
        }}
      >
        events
      </Button><Button
        variant={"outlined"}
        component={NextLinkComposed}
        to={{
          pathname: '/events/7747',
          query: { name: 'test' },
        }}
      >
        events id
      </Button>
      <Button
        variant={"outlined"}
        component={NextLinkComposed}
        to={{
          pathname: '/events/7373/3838',
          query: { name: 'test' },
        }}
      >
        events slug
      </Button>
    </div>
  );
};

export default Home;