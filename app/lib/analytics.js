import { client } from "@/sanity/lib/client";
import { v4 as uuidv4 } from "uuid";

export const logEvent = async (event, metadata = {}, userId = " - ") => {
    const timestamp = new Date().toISOString();

    const eventData = {
        _key: uuidv4(),
        event,
        timestamp,
        userId,
        metadata,
    };

    console.log("Logging event:", eventData);

    try {
        // Fetch an existing open batch document
        const existingBatch = await client.fetch(
            `*[_type == "analyticsBatch" && !defined(closed)][0]`
        );

        if (existingBatch) {
            // Append the event to the existing batch
            await client
                .patch(existingBatch._id)
                .setIfMissing({ events: [] })
                .append("events", [eventData])
                .commit();
            console.log("Event added to existing batch:", existingBatch._id);
        } else {
            // Create a new batch document with the event
            await client.create({
                _type: "analyticsBatch",
                date: new Date().toISOString(),
                events: [eventData],
            });
            console.log("New analytics batch created with event.");
        }
    } catch (error) {
        console.error("Error logging event:", error);

        // Optional retry logic
        setTimeout(() => logEvent(event, metadata, userId), 5000); // Retry after 5 seconds
    }
};
