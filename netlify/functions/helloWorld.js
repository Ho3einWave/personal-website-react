const formattedReturn = (body, statusCode) => {
    return {
        statusCode: statusCode ? statusCode : 200,
        body: JSON.stringify(body),
    };
};

export const handler = async (event, context) => {
    return formattedReturn({ message: "Hello World" });
};
