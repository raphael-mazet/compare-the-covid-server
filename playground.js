// query{
//   getUserbyId(id:1) {
//     id
//     username
//     email
//     password
//   }
// }

// query{
//   getUserbyUsernameAndPassword(username:"davidhardy", password:"admin") {
//       id
//     	username
//     	email
//     	password
//   }
// }

// mutation {
//   createUser (username: "davidhardy", password: "admin", email: "xxx") {
//     id
//     username
//     password
//     email
//   }
// }

// query {
//   getEventsbyAlertType(alertType:"confirmed") {
//     id
// 		alertType
//     alertDate
//     alertScore
//     location_id {
//     	id
//    		name
//     	country
//     	googlemap_URL
//     	location_type
//     	longitude
//     	latitude
//     }
//     created_at
//     expires_on
//   }
// }

// query {
//   getEventsbyLocation_Id(location_id:4) {
//     id
// 		alertType
//     alertDate
//     alertScore
//     created_at
//     expires_on
//   }
// }

// mutation {
//   createEvent (
//     alertType: "confirmed", 
//     alertDate: "2008-01-08 04:05:06", 
//     alertScore: 10,
//     location_id: 4,
//     created_at: "2011-01-08 04:05:06",
//     expires_on: "1921-01-08 04:05:06",
//   ) {
//     id
// 		alertType
//     alertDate
//     alertScore
//     location_id {
//     	id
//    		name
//     	country
//     	googlemap_URL
//     	location_type
//     	longitude
//     	latitude
//     }
//     created_at
//     expires_on
//   }
// }

// mutation {
//   createLocation (
//     name: "tes111t", 
//     country: "France",
//     googlemap_URL: "fakeURL",
//     location_type: "town"
//     longitude: 10000,
//     latitude: 20000,
//   ) {
//     id
//     name
//     country
//     googlemap_URL
//     location_type
//     longitude
//     latitude
//   }
// }

// query{
//   getLocationbyURL(googlemap_URL:"www.google.com") {
// 		id
//     name
//     country
//     googlemap_URL
//     location_type
//     longitude
//     latitude
//   }
// }

// query{
//   getLocationbyId(id:4) {
// 		id
//     name
//     country
//     googlemap_URL
//     location_type
//     longitude
//     latitude
//   }
// }

// mutation {
//   createSavedLocation (
//     user_id:2,
//     location_id:8,
//     selection_date:"2001-01-08 04:05:06",
//   ) {
//     user_id {
//       id
//       username
//     }
//     location_id {
//       id
//       googlemap_URL
//     }
//     selection_date
//   }
// }

// query{
//   getSavedLocationbyUser_Id(user_id:1) {
//   	user_id {
//      	id
//       username
//       password
//     }
//  		location_id {
//       id
//     	name
//     	country
//     	googlemap_URL
//     	location_type
//     	longitude
//     	latitude
//     }
//     selection_date
//   }
// }

// query{
//   getSavedLocationbyLocation_Id(location_id:8) {
//   	user_id {
//      	id
//       username
//       password
//     }
//  		location_id {
//       id
//     	name
//     	country
//     	googlemap_URL
//     	location_type
//     	longitude
//     	latitude
//     }
//     selection_date
//   }
// }

// mutation {
//   deleteSavedLocation (
//     user_id:1,
//     location_id:6,
//   ) 
//   {
//     count
//   }
// }

// mutation {
//   updateSavedLocationSelectionDate (
//     user_id:2,
//     location_id:4,
//     selection_date:"2011-01-08 04:05:06",
//   )   {
//     count
//   }
// }