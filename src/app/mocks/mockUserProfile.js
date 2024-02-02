const mockUserProfile = {
    "id": 1,
    "name": "John Doe",
    "email": "mockUser@gmail.com",
    "bio": "Travel, Adventure, Nature, Photography",
    "profileImage": "",
    "hasProfileImage": false,
    trips : [
        {
            "id": 1,
            "name": "Trip to the beach",
            "description": "A trip to the beach with my friends",
            "displayDate": "August 1st - 3rd, 2020",
            "startDate": "2020-08-01",
            "endDate": "2020-08-03",
            "location": "Miami, Florida",
            "tripImage": "",
            "hasTripImage": false,
            "tripType": "Beach",
            "tripStatus": "Past",
            "tripBudget": 2000,
            "tripCurrency": "USD",
            "tripActivities": [
                {
                    "id": 1,
                    "name": "Beach",
                    "description": "Beach activities",
                    "activityImage": "",
                    "hasActivityImage": false
                },
                {
                    "id": 2,
                    "name": "Hiking",
                    "description": "Hiking activities",
                    "activityImage": "",
                    "hasActivityImage": false
                }
            ],
        },
        {
          "id": 2,
            "name": "Trip to France",
            "description": "A trip to France with my family",
            "displayDate": "August 1st - 3rd, 2022",
            "startDate": "2022-08-01",
            "endDate": "2022-08-03",
            "location": "Paris, France",
            "tripImage": "",
            "hasTripImage": false,
            "tripType": "City",
            "tripStatus": "Future",
            "tripBudget": 10000,
            "tripCurrency": "EUR",
            "tripActivities": [
                {
                    "id": 1,
                    "name": "Shopping",
                    "description": "Shopping activities",
                    "activityImage": "",
                    "hasActivityImage": false
                },
                {
                    "id": 2,
                    "name": "Sightseeing",
                    "description": "Sightseeing activities",
                    "activityImage": "",
                    "hasActivityImage": false
                }
            ],
        },
        {
            "id": 3,
                "name": "Trip to the mountains",
                "description": "A trip to the mountains with my family",
                "displayDate": "August 1st - 3rd, 2021",
                "startDate": "2021-08-01",
                "endDate": "2021-08-03",
                "location": "Asheville, North Carolina",
                "tripImage": "",
                "hasTripImage": false,
                "tripType": "Mountains",
                "tripStatus": "Future",
                "tripBudget": 5000,
                "tripCurrency": "USD",
                "tripActivities": [
                    {
                        "id": 1,
                        "name": "Hiking",
                        "description": "Hiking activities",
                        "activityImage": "",
                        "hasActivityImage": false
                    },
                    {
                        "id": 2,
                        "name": "Sightseeing",
                        "description": "Sightseeing activities",
                        "activityImage": "",
                        "hasActivityImage": false
                    }
                ],
        }
    ]
}

export default mockUserProfile;