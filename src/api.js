import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const getData = async (term) => {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${term}`,
      {
        params: {
          unitGroup: "metric",
          key: apiKey,
          contentType: "json",
        },
      }
    );

    /* 
    in order to activate the code follow the next steps:
        -download : npm install dotenv --save
        -create ".env" in the rot directory in WEATHER-APP
        -open https://weather.visualcrossing.com website and register your own account
        -get the free API key by click to pricing at the NAV bar
        -click  to the free version and make a request at  Query Builder input field
        -get the API key from the link
        -REACT_APP_API_KEY="your api key in here"
        -const apiKey = process.env.REACT_APP_API_KEY; >> write it to this component
        open .gitignore and copy the next line to :
        # misc
                .env
                .DS_Store
                .env.local
                .env.development.local
                .env.test.local
                .env.production.local
        
        -shut down and restart the server in order to run the enviromental variable
      */

    return response.data;
  } catch (error) {
    throw new Error("data query error");
  }
};

export default getData;
