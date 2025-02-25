import  {useEffect, useState} from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]); // initial value is an empty array
    const [errorMessage, setErrorMessage] = useState("");
  
    const searchApi = async (searchTerm) => { // async functions wait for the response before moving on to the next line
      try {
        const response = await yelp.get('/search', {
          params: {
            limit: 50,
            term: searchTerm,  //key and value are same so we can use term only
            location: 'san jose'
          }
        }); //await for the search to be completed
        setResults(response.data.businesses); //getting the required data (businesses) from the response
      } catch (errorMessage) {
        setErrorMessage("Something went wrong");
      }
    };
  
    useEffect(() => {
      searchApi('pasta');
    }, []); //empty array means that the function will only be called once
  
    return [searchApi, results, errorMessage]; //returning the function and the results need to be display on search screen
  };
