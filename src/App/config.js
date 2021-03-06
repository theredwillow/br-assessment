const config = {
    appName: "Lunch Tyme",
    jsonURL: 'https://s3.amazonaws.com/br-codingexams/restaurants.json',
    defaultRestaurant: {
        name: "Restaurant Name",
        category: "Category Type",
        addressOne: "5100 Belt Line Road, STE 502",
        addressTwo: "Dallas, TX 75206",
        phone: "(972) 387-2337",
        twitter: "twitterhandle"
    },
    googleMapsAPIKey: "AIzaSyBRNzOgoMN5tNR14MT9dDzjuIMPbUwvxnQ"
        // DEV NOTE: Keys need to be moved to env var's
};
export default config;