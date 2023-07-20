export default formattedReturn = (body, statusCode) => {
    return {
        statusCode: statusCode ? statusCode : 200,
        body: JSON.stringify(body),
    };
};
