"use strict";

module.exports.getIncome = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "income= $100"
    })
  };

  callback(null, response);
};

module.exports.calculateIncome = (event, context, callback) => {
    console.log('test:',event);
    if (!event.body) {
        const response = {
            statusCode: 400,
            body: "Please post a name in the body"
        };

        callback(null, response);
    }

    const requestBody = JSON.parse(event.body);

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Salary is equal to   ${requestBody.salary}!!!`
        })
    };

    callback(null, response);
};
