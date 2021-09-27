'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v2.0! <br/>Your function executed successfully! <br/><b>Hello Master</b>',
	input: event,
      },
      null,
      2
    ),
  };
};
