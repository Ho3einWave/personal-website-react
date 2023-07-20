import formattedReturn from "../utils/formattedReturn";

export const handler = async (event, context) => {
    const body = JSON.parse(event.body);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const captcha_res = await (
        await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${body.captcha}`
        )
    ).json();
    if (captcha_res.success) {
        await fetch(process.env.DISCORD_WEBHOOK, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                username: "Content Report",
                content: null,
                embeds: [
                    {
                        title: "**Contact Message**",
                        description: `${body.message}`,
                        color: 5814783,
                        fields: [
                            {
                                name: "Name",
                                value: `> ${body.name}`,
                                inline: true,
                            },
                            {
                                name: "EMAIL",
                                value: `> ${body.email}`,
                                inline: true,
                            },
                        ],
                    },
                ],
                attachments: [],
            }),
        });
        return formattedReturn({
            success: true,
            message: "Successfuly reported",
        });
    } else {
        return formattedReturn(
            { success: false, message: "Captcha Invalid" },
            400
        );
    }
};
