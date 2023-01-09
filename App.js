import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = React.createElement("h1", {className: "heading"}, "Namaste React")

// const heading2 = React.createElement("h2", {className: "heading"}, "Igniting our App")

// const container = React.createElement("div", {className: "container"}, [heading, heading2])

// Lecture - 04 - Talk is cheap, show me the code


const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
            alt="logo" />
    </a>
)

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Restaurant List,

const restaurantList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "649854",
          "name": "GCF The Chaap Hub",
          "uuid": "788f18e0-4c23-4625-a885-a3a26a1cc5a2",
          "city": "10335",
          "area": "North_Jalandhar",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "b139cc0e94645b50b1bca2bd8dced0cd",
          "cuisines": [
            "Snacks",
            "Chinese"
          ],
          "tags": [

          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 0.5,
          "slugs": {
            "restaurant": "gcf-the-chaap-hub-north_jalandhar-north_jalandhar",
            "city": "kapurthala"
          },
          "cityState": "10335",
          "address": "Opp Civil Hospital, Near HDFC bank, Kapurthala(M CI) Punjab -144601",
          "locality": "Kapurthala",
          "parentId": 86841,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5600016~p=1~eid=00000185-9657-d99b-1c80-574a00bb017d",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "0.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "649854",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "lastMileTravel": 0.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.4",
          "totalRatings": 20,
          "new": true
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "176516",
          "name": "Shahi Daawat Dhaba",
          "uuid": "bb4106c8-fc57-4733-a875-f084466657ce",
          "city": "47",
          "area": "Pacca Bagh",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "ytxglcbv0blbugivcb73",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Thalis"
          ],
          "tags": [

          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "slaString": "17 MINS",
          "lastMileTravel": 0.6000000238418579,
          "slugs": {
            "restaurant": "shahi-daawat-dhaba-shastri-nagar-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Shop 11, Opposite Govt School, Near Company Bagh, Shastri Nagar, Jalandhar",
          "locality": "Shastri Nagar",
          "parentId": 180670,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "0.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "176516",
            "deliveryTime": 17,
            "minDeliveryTime": 17,
            "maxDeliveryTime": 17,
            "lastMileTravel": 0.6000000238418579,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "284183",
          "name": "Food Bazar",
          "uuid": "f6a54cdb-165d-4681-866a-e7141b91542b",
          "city": "47",
          "area": "Central Town",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "krksmdiz1ggkiqvkpdcb",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Beverages",
            "Chinese",
            "Chaat",
            "Oriental"
          ],
          "tags": [

          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "slaString": "22 MINS",
          "lastMileTravel": 1.5,
          "slugs": {
            "restaurant": "food-bazar-jalandhar_central-jalandhar_central-2",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Madan Flour mill",
          "locality": "North_Jalandhar",
          "parentId": 80979,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "1.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "284183",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "lastMileTravel": 1.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "644570",
          "name": "Spicy Chaap Corner",
          "uuid": "6644f53b-e118-4ce1-a2c5-b3020712e2ed",
          "city": "47",
          "area": "North_Jalandhar",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "223a5b41e98fd64900590a8dd054d287",
          "cuisines": [
            "North Indian",
            "Snacks"
          ],
          "tags": [

          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "slaString": "31 MINS",
          "lastMileTravel": 2,
          "slugs": {
            "restaurant": "spicy-chaap-corner-north_jalandhar-north_jalandhar",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Opp. Parkash Ice Cream, Gopal Nagar, Police Station 2, Jalandhar, Punjab 144008",
          "locality": "Gopal Nagar",
          "parentId": 388954,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5600014~p=4~eid=00000185-9657-d99b-1c80-574b00bb0475",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "644570",
            "deliveryTime": 31,
            "minDeliveryTime": 31,
            "maxDeliveryTime": 31,
            "lastMileTravel": 2,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "--",
          "totalRatings": 0,
          "new": true
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "80981",
          "name": "Lovely Sweets",
          "uuid": "7bd29c52-5b0d-4b4c-bdf5-8be597fd3dc4",
          "city": "47",
          "area": "Nakodar Road",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "yhm5xgvrdiabdnbju6sc",
          "cuisines": [
            "Desserts",
            "Sweets"
          ],
          "tags": [

          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "slaString": "28 MINS",
          "lastMileTravel": 0.20000000298023224,
          "slugs": {
            "restaurant": "lovely-sweets-shastri-nagar-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Main Nakodar Road, Jalandhar, Shastri Nagar, Jalandhar",
          "locality": "Shastri Nagar",
          "parentId": 126340,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "0.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "80981",
            "deliveryTime": 28,
            "minDeliveryTime": 28,
            "maxDeliveryTime": 28,
            "lastMileTravel": 0.20000000298023224,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.5",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "456490",
          "name": "Al Kareem",
          "uuid": "24ca6669-99a2-46cd-be42-167830fc468b",
          "city": "47",
          "area": "Nakodar Road",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "cgjein3i1bvr02otpdog",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Kashmiri"
          ],
          "tags": [

          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "slaString": "20 MINS",
          "lastMileTravel": 0.5,
          "slugs": {
            "restaurant": "al-kareem-north_jalandhar-north_jalandhar",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Al kareem restaurant, opp dlf mall, nr lal rattan cinema, nakodar road jalandhar-144001",
          "locality": "North_Jalandhar",
          "parentId": 10086,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "0.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "456490",
            "deliveryTime": 20,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 20,
            "lastMileTravel": 0.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.1",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "648945",
          "name": "Chowpatty Junction",
          "uuid": "abef89c9-46f6-48fd-8b31-54a3c3d0095a",
          "city": "47",
          "area": "Poonamallee",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "63526d92b0b9e75db48bb64fd04e4071",
          "cuisines": [
            "Chinese",
            "Italian-American",
            "Fast Food"
          ],
          "tags": [

          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "slaString": "37 MINS",
          "lastMileTravel": 4.300000190734863,
          "slugs": {
            "restaurant": "chowpatty-junction-north_jalandhar-north_jalandhar",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "ANAND SAGAR FOODS, Tanda Rd, Opp. KMV College, Aman Nagar, Jalandhar, Punjab 144004",
          "locality": "Sanathi street",
          "parentId": 390809,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5600015~p=7~eid=00000185-9657-d99b-1c80-574c00bb0745",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "4.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "648945",
            "deliveryTime": 37,
            "minDeliveryTime": 37,
            "maxDeliveryTime": 37,
            "lastMileTravel": 4.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "--",
          "totalRatings": 0,
          "new": true
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "254136",
          "name": "McDonald's",
          "uuid": "4179ff71-c0b1-4537-b2c9-2368c50834fb",
          "city": "47",
          "area": "Lajpat Nagar",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "htovdwaqaqxsgsjkl0mq",
          "cuisines": [
            "American"
          ],
          "tags": [

          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 1.100000023841858,
          "slugs": {
            "restaurant": "mcdonalds-punjab-jalandhar-lajpat-nagar-dt-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Punjab Jalandhar Lajpat Nagar, Plot No. 296- 297, UGF- Shop No. 1, Lajpat Nagar,Jalandhar- 144001",
          "locality": "Punjab Jalandhar Lajpat Nagar DT",
          "parentId": 630,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "1.1 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "254136",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 1.100000023841858,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "125122",
          "name": "Am Pm Fast Food",
          "uuid": "4f9a1312-c792-458d-9376-799323482308",
          "city": "47",
          "area": "Shaheed Udham Singh Nagar",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "a6mmtzv9m2ulhb0upoq7",
          "cuisines": [
            "North Indian",
            "Italian",
            "Chinese",
            "Desserts",
            "Beverages",
            "Indian",
            "American"
          ],
          "tags": [

          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "lastMileTravel": 0.5,
          "slugs": {
            "restaurant": "am-pm-fast-food-shastri-nagar-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Nakodar Road Opposite To Hotel Downtown, Shastri Nagar, Jalandhar",
          "locality": "Nakodar chownk",
          "parentId": 30765,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "0.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "125122",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 0.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.5",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "93379",
          "name": "Baba Chicken (Johal market)",
          "uuid": "74bba511-a19b-46bd-a047-9ba086e59ecf",
          "city": "47",
          "area": "Jyoti Nagar",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "jmdhj6djbtp7veyuefiq",
          "cuisines": [
            "North Indian",
            "Mughlai",
            "Punjabi",
            "Chinese"
          ],
          "tags": [

          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "lastMileTravel": 2.9000000953674316,
          "slugs": {
            "restaurant": "baba-chickenharjeet-food-johal-market-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Shop 1A, Gyan Nagar, Opposite Bittu Pardesi, Johal Market, Jalandhar",
          "locality": "Johal Market",
          "parentId": 38781,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5662004~p=10~eid=00000185-9657-d99b-1c80-574d00bb0a28",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "2.9 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "93379",
            "deliveryTime": 23,
            "minDeliveryTime": 23,
            "maxDeliveryTime": 23,
            "lastMileTravel": 2.9000000953674316,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.2",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "136845",
          "name": "Dhan Guru Ramdass Sweet Shop",
          "uuid": "7686ea76-d495-4c28-afa0-def5adb4474a",
          "city": "47",
          "area": "Fentonganj",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "fijqroiqqvukagkvnlp2",
          "cuisines": [
            "Sweets",
            "Snacks",
            "Beverages"
          ],
          "tags": [

          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 1.2999999523162842,
          "slugs": {
            "restaurant": "dhan-guru-ramdass-sweet-shaheed-bagat-singh-chowk-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Shop no-12, 13 &14, Shaheed bhagat Singh Chowk, Jalandhar, Shastri Nagar, Jalandhar",
          "locality": "Shaheed Bagat Singh Chowk",
          "parentId": 72021,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "136845",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 1.2999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "347015",
          "name": "Street Feast",
          "uuid": "84464c41-216c-4050-bd53-b19c2018f820",
          "city": "47",
          "area": "Model Town",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "nd6sjyafkl90orvot6vc",
          "cuisines": [
            "Chinese",
            "American",
            "Mexican",
            "Korean",
            "Thai",
            "Middle Eastern"
          ],
          "tags": [

          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "slaString": "32 MINS",
          "lastMileTravel": 3.799999952316284,
          "slugs": {
            "restaurant": "street-feast-jalandhar_central-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Shop no 155 global street feast, Punjab 144022",
          "locality": "South_Jalandhar",
          "parentId": 195931,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5662373~p=13~eid=00000185-9657-d99b-1c80-574e00bb0d6b",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "347015",
            "deliveryTime": 32,
            "minDeliveryTime": 32,
            "maxDeliveryTime": 32,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.1",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "248278",
          "name": "AAR KAY Vaishno Dhaba (Nakodar Road)",
          "uuid": "322893b7-63b4-40c2-82ff-343419fb8b80",
          "city": "47",
          "area": "Avtar Nagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "siiyygdsewrchwglfyre",
          "cuisines": [
            "North Indian",
            "Thalis",
            "Punjabi",
            "Beverages"
          ],
          "tags": [

          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "lastMileTravel": 1.2999999523162842,
          "slugs": {
            "restaurant": "aar-kay-vaishno-dhaba-jalandhar_central-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Near Nari Niketan, Nakodar Road, Jalandhar",
          "locality": "Jalandhar_Central",
          "parentId": 25988,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "248278",
            "deliveryTime": 21,
            "minDeliveryTime": 21,
            "maxDeliveryTime": 21,
            "lastMileTravel": 1.2999999523162842,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "80982",
          "name": "Lovely Bake Studio",
          "uuid": "2256894c-636e-45c3-a2e2-0e055eda8143",
          "city": "47",
          "area": "Nakodar Road",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "lpcfrhfqojkwrxjnl7if",
          "cuisines": [
            "Bakery",
            "Snacks"
          ],
          "tags": [

          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "slaString": "16 MINS",
          "lastMileTravel": 0.30000001192092896,
          "slugs": {
            "restaurant": "lovely-bake-studio-shastri-nagar-jalandhar_central",
            "city": "jalandhar"
          },
          "cityState": "47",
          "address": "Nakodar Road, Shastri Nagar, Jalandhar",
          "locality": "Shastri Nagar",
          "parentId": 126275,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [

          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹90 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [

          ],
          "feeDetails": {
            "fees": [

            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [

            ],
            "textBased": [

            ],
            "textExtendedBadges": [

            ]
          },
          "lastMileTravelString": "0.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "80982",
            "deliveryTime": 16,
            "minDeliveryTime": 16,
            "maxDeliveryTime": 16,
            "lastMileTravel": 0.30000001192092896,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
]

const RestaurantCard = (props) => {
    return (
        <div className="card">
            <img src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                props.restaurant.data?.cloudinaryImageId} />
            <h2>{props.restaurant.data?.name}</h2>
            <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
            <h4>{props.restaurant.data?.avgRating} stars</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="retaurant-list">
            <RestaurantCard restaurant={restaurantList[0]} />
            <RestaurantCard restaurant={restaurantList[1]} />
            <RestaurantCard restaurant={restaurantList[2]} />
            <RestaurantCard restaurant={restaurantList[3]} />
            <RestaurantCard restaurant={restaurantList[4]} />
            <RestaurantCard restaurant={restaurantList[5]} />
            <RestaurantCard restaurant={restaurantList[6]} />
            <RestaurantCard restaurant={restaurantList[7]} />
        </div>
    )
}

const Footer = () => {
    return (
        <h2>Footer</h2>
    )
}

const Page = () => {
    return (
        <>
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)
