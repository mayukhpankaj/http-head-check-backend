import express from 'express';
import checkMyHeaders from 'check-my-headers';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:3000', // to be changed.
};


app.use(cors(corsOptions));

// Endpoint to fetch data
app.get('/api/v1/fetch_data', (req, res) => {
  const { target } = req.query;

    
  if (!target) {
    return res.status(400).json({ error: 'Target parameter is required' });
  }



  if(target){

    // let responseData = {};
    // let messages = {};
    // let headers = {};
    // let status = {};
    // let ip = {};
    // let sh = {};

      checkMyHeaders(target)
    .then((ans) => {

        // { messages: fetchedMessages, headers: fetchedHeaders, status: fetchedStatus,ip: fetchedip , sh: fetchedsh }
        //   messages = fetchedMessages;
        //   headers = fetchedHeaders;
        //   status = fetchedStatus;
        //   ip = fetchedip;
        //   sh = fetchedsh;
        

        //   responseData = {
        //     messages: messages,
        //     headers: headers,
        //     status: status,
        //     ip : ip,
        //     sh: sh
        //   };

        // console.log(`Status code: ${status}`)
        // console.log(`Messages:`)
        // console.log(messages)
        // console.log("Current headers:")
        // console.log(headers)


        res.status(200).json({ data: ans });

    }).catch(error => {
      console.error("An error occurred:", error);
      res.status(500).json({ error: 'Internal server error' });
    });



  }



  

});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});