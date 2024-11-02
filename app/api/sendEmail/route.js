import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'datapulsetechnologies.org', // Replace with your SMTP host
    port: 465, // Or 465 for SSL
    auth: {
        user: 'hahmed@datapulsetechnologies.org', // Replace with your email
        pass: 'r{i-uyzxwU-y', // Replace with your password
    },
});

export async function POST(req) {
    try {
        const { type, userId, formData } = await req.json();
        const recipientEmail = formData.email;
        const adminEmail = 'ajamil@datapulsetechnologies.org';

        if (type === 'enroll') {
            // Admin email for enrollment
            await transporter.sendMail({
                from: 'hahmed@datapulsetechnologies.org',
                to: adminEmail,
                subject: 'New Enrollment Notification',
                text: `A new enrollment has been completed.\n\nUser ID: ${userId}\n\nUser Information:\n${JSON.stringify(formData, null, 2)}`,
            });

            // Recipient email for enrollment
            await transporter.sendMail({
                from: 'hahmed@datapulsetechnologies.org',
                to: recipientEmail,
                subject: 'Thank you for Enrolling!',
                text: `Thank you for enrolling!\n\nYour User ID for payments is: ${userId}\n\nHere is the information we received:\n${JSON.stringify(formData, null, 2)}`,
            });
        } else if (type === 'prospect') {
            // Admin email for prospecting
            await transporter.sendMail({
                from: 'hahmed@datapulsetechnologies.org',
                to: adminEmail,
                subject: 'Prospective Enrollment Notification',
                text: `Someone is considering enrollment.\n\nHere is their information:\n${JSON.stringify(formData, null, 2)}`,
            });

            // Recipient email for prospecting
            await transporter.sendMail({
                from: 'hahmed@datapulsetechnologies.org',
                to: recipientEmail,
                subject: 'Thank you for your Interest!',
                text: `Thank you for considering enrollment.\n\nWe have received the following information from you:\n${JSON.stringify(formData, null, 2)}\n\nPlease expect someone from our team to contact you soon.`,
            });
        }

        return new Response(JSON.stringify({ message: 'Emails sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error("Email send error:", error);
        return new Response(JSON.stringify({ message: 'Failed to send emails.' }), { status: 500 });
    }
}