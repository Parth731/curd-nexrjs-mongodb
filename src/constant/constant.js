export const userData = {
    profilePicture: "https://example.com/profile-picture.jpg",
    username: "john_doe",
    // fullName: {
    //     firstName: "John",
    //     lastName: "Doe",
    // },
    email: "john.doe@example.com",
    bio: "Passionate about technology and coding!",
    location: "City, Country",
    contactInformation: "+1 123-456-7890",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    occupation: "Software Developer",
    education: "Bachelor's in Computer Science",
    // socialMediaLinks: {
    //     linkedIn: "https://www.linkedin.com/in/johndoe",
    //     twitter: "https://twitter.com/johndoe",
    // },
    website: "https://www.johndoe.com",
    interests: ["Programming", "Reading", "Traveling"],
    // privacySettings: {
    //     profileVisibility: "Public",
    //     activityFeedVisibility: "Friends Only",
    // },
    // activityFeed: [
    //     {
    //         timestamp: "2023-01-01T12:00:00Z",
    //         activity: "Posted a new status.",
    //     },
    //     {
    //         timestamp: "2023-02-01T14:30:00Z",
    //         activity: "Liked a post from userXYZ.",
    //     },
    // ],
    // badges: ["Top Contributor", "Early Adopter"],
    // settings: {
    //     passwordChange: "https://example.com/change-password",
    //     notificationPreferences: "https://example.com/notification-preferences",
    // },
    joinedDate: "2022-12-01",
    followersCount: 500,
    followingCount: 200,
};

export const userFields = Object.entries(userData).map(([key, value]) => ({ key, value }));