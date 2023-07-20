import formattedReturn from "../utils/formattedReturn";

export const handler = async (event, context) => {
    return formattedReturn({ message: "Hello World" });
};
