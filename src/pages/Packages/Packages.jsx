import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './Packages.css'

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isVeg, setIsVeg] = useState({
    "Cocktail Diamond Exotic": false,
    "Diamond": false,
    "Gold": false,
    "Silver": false
  });
  

  const [formData, setFormData] = useState({})

  const location = useLocation();
  
  const navigate = useNavigate(); 

  const packages = [
    {
      name: "Cocktail Diamond Exotic",
      categories: [
        {
          name: "  --COCKTAIL MENU STANDARD --   Snacks @CocktailService",
          items: [
            {
              "value": "Green Salad",
              "name": "Green Salad"
            },
            {
              "value": "Green Peas Masala",
              "name": "Green Peas Masala"
            },
            {
              "value": "Sweet American Corn",
              "name": "Sweet American Corn"
            }
          ]
        },
        {
          name: "Pass Around Snacks - Veg (ANY THREE)",
          items: [
            {
              "value": "Cheese Balls",
              "name": "Cheese Balls"
            },
            {
              "value": "Cheese Potato Wedges Melt",
              "name": "Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": "Cocktail corn samosa",
              "name": "Cocktail corn samosa"
            },
            {
              "value": " Corn Cheese Kabab",
              "name": " Corn Cheese Kabab"
            },
            {
              "value": " Corn Fitters",
              "name": " Corn Fitters"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " hangai Rolls",
              "name": " hangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            }
          ],
        },
        {
          name: "Pass Around Snacks -CHICKEN MUTTON (ANY ONE) - SEA FOOD SNACKS (ANY TWO) - ",
          items: [
            {
              "value": "Pepper Chicken",
              "name": "Pepper Chicken"
            },
            {
              "value": "Chicken Pakodi",
              "name": "Chicken Pakodi"
            },
            {
              "value": "Chilli Chicken",
              "name": "Chilli Chicken"
            },
            {
              "value": " Chicken Majestic",
              "name": " Chicken Majestic"
            },
            {
              "value": " Chicken 65",
              "name": " Chicken 65"
            },
            {
              "value": " Chicken Satay",
              "name": " Chicken Satay"
            },
            {
              "value": " Fried Chicken",
              "name": " Fried Chicken"
            },
            {
              "value": " Chicken Lollypops",
              "name": " Chicken Lollypops"
            },
            {
              "value": " Lemon Chicken",
              "name": " Lemon Chicken"
            },
            {
              "value": " Chicken Manchurian",
              "name": " Chicken Manchurian"
            },
            {
              "value": " Reshmi Chicken",
              "name": " Reshmi Chicken"
            },
            {
              "value": " Chicken Harialyali Tikka",
              "name": " Chicken Harialyali Tikka"
            },
            {
              "value": " Chicken Malai Tikka",
              "name": " Chicken Malai Tikka"
            },
            {
              "value": " Bar-be-que Chicken",
              "name": " Bar-be-que Chicken"
            },
            {
              "value": " Chicken Springli",
              "name": " Chicken Springli"
            },
            {
              "value": " Chicken Tandoori Kabab",
              "name": " Chicken Tandoori Kabab"
            },
            {
              "value": " Ginger Chicken",
              "name": " Ginger Chicken"
            },
            {
              "value": " Achari Murg Tikka",
              "name": " Achari Murg Tikka"
            },
            {
              "value": " MurgGilafi Tikka",
              "name": " MurgGilafi Tikka"
            },
            {
              "value": " Chicken Shashlik",
              "name": " Chicken Shashlik"
            },
            {
              "value": " Chicken Wings",
              "name": " Chicken Wings"
            },
            {
              "value": " Grilled Chicken",
              "name": " Grilled Chicken"
            },
            {
              "value": " Fried Corn Chicken",
              "name": " Fried Corn Chicken"
            },
            {
              "value": "Mutton Sheek Kabab",
              "name": "Mutton Sheek Kabab"
            },
            {
              "value": "Mutton Keema Balls",
              "name": "Mutton Keema Balls"
            },
            {
              "value": "Pattar ka Gosh",
              "name": "Pattar ka Gosh"
            },
            {
              "value": "Mutton Boti Kabab",
              "name": "Mutton Boti Kabab"
            },
            {
              "value": "Mutton Shami Kabab",
              "name": "Mutton Shami Kabab"
            },
            {
              "value": "Zingara Mutton Sheek",
              "name": "Zingara Mutton Sheek"
            },
            {
              "value": "Mutton Chops",
              "name": "Mutton Chops"
            },
            {
              "value": "Gold Coin",
              "name": "Gold Coin"
            },
            {
              "value": " Ajwan Pakodi",
              "name": " Ajwan Pakodi"
            },
            {
              "value": "Veg Bullet",
              "name": "Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Pepper Mutton",
              "name": " Pepper Mutton"
            },
            {
              "value": "Spicy Fish Fry",
              "name": "Spicy Fish Fry"
            },
            {
              "value": "Apollo Fish",
              "name": "Apollo Fish"
            },
            {
              "value": " Fish Fingers",
              "name": " Fish Fingers"
            },
            {
              "value": "Pepper Fish",
              "name": "Pepper Fish"
            },
            {
              "value": " Fish Bullets",
              "name": " Fish Bullets"
            },
            {
              "value": " Fish Lal Mirchi Tikka",
              "name": " Fish Lal Mirchi Tikka"
            },
            {
              "value": " Fish Amritsari Tikka",
              "name": " Fish Amritsari Tikka"
            },
            {
              "value": " Tawa Fish",
              "name": " Tawa Fish"
            },
            {
              "value": " Lady Fish Fingers",
              "name": " Lady Fish Fingers"
            },
            {
              "value": " Golden Fired Prawns",
              "name": " Golden Fired Prawns"
            },
            {
              "value": "Chilli Garlic Prawns",
              "name": "Chilli Garlic Prawns"
            },
            {
              "value": " Grilled Prawns",
              "name": " Grilled Prawns"
            },
            {
              "value": " Loose Prawns",
              "name": " Loose Prawns"
            }
          ]
        },
        {
          name: "Beverages (ANY ONE)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": " Sugar Cane (Min. Gathering)",
              "name": " Sugar Cane (Min. Gathering)"
            },
            {
              "value": " Coconut Delight",
              "name": " Coconut Delight"
            },
            {
              "value": " Fruit Punch",
              "name": " Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": " Litchi Punch",
              "name": " Litchi Punch"
            },
            {
              "value": " Grapes Pulpy kulfi",
              "name": " Grapes Pulpy kulfi"
            },
            {
              "value": " Orange Punch",
              "name": " Orange Punch"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            }
          ]
        },
        {
          name: "Salad",
          items: [
            {
              "value": "Garden Spring Green Salad ",
              "name": "Garden Spring Green Salad "
            },
            {
              "value": "Boiled nuts",
              "name": "Boiled nuts"
            },
            {
              "value": "Sprouts",
              "name": "Sprouts"
            }
          ]
        },
        {
          name: "Sweets (SELECT ANY TWO)",
          items: [
            {
              "value": "Badam Halwa",
              "name": "Badam Halwa"
            },
            {
              "value": "Mixed Fruit Halwa",
              "name": "Mixed Fruit Halwa"
            },
            {
              "value": "Double Ka Meetha",
              "name": "Double Ka Meetha"
            },
            {
              "value": " Carrot Green Mixed Halwa",
              "name": " Carrot Green Mixed Halwa"
            },
            {
              "value": "Qhubani Ka Meetha",
              "name": "Qhubani Ka Meetha"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": "  - LIVE SWEETS -",
              "name": "  - LIVE SWEETS -"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": " Pineapple Jalebi",
              "name": " Pineapple Jalebi"
            },
            {
              "value": "Tawa Mix Sweet",
              "name": "Tawa Mix Sweet"
            },
            {
              "value": " American Mal Puri",
              "name": " American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Gajrela",
              "name": " Gajrela"
            },
            {
              "value": " Basundi",
              "name": " Basundi"
            }
          ]
        },
        {
          name: " ROTIES (ANY TWO) ",
          items:[
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": "Achari Roti",
              "name": "Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Butter Naan",
              "name": "Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": "Kottimeera Parota",
              "name": "Kottimeera Parota"
            },
            {
              "value": "Laccha Parota",
              "name": "Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": "Masala Parota",
              "name": "Masala Parota"
            },
            {
              "value": "Palak Parota",
              "name": "Palak Parota"
            },
            {
              "value": "Plain Kulcha",
              "name": "Plain Kulcha"
            },
            {
              "value": "Plain Naan",
              "name": "Plain Naan"
            },
            {
              "value": "Plain Parota",
              "name": "Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": "Pulkha",
              "name": "Pulkha"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            }
          ]
        },
        {
          name: "HOTS (ANY ONE)",
          items: [
            {
              "value": "Gaare",
              "name": "Gaare"
            },
            {
              "value": "Mini Alsanda Wada",
              "name": "Mini Alsanda Wada"
            },
            {
              "value": " Nellore Chitti Gaare",
              "name": " Nellore Chitti Gaare"
            },
            {
              "value": "Madras Pakodi (Round)",
              "name": "Madras Pakodi (Round)"
            },
            {
              "value": " Pudina Masala Wada",
              "name": " Pudina Masala Wada"
            },
            {
              "value": " Mealmaker Keema Wada",
              "name": " Mealmaker Keema Wada"
            },
            {
              "value": " Veg. Lolly Pop",
              "name": " Veg. Lolly Pop"
            },
            {
              "value": " Mini Perugu Aawada",
              "name": " Mini Perugu Aawada"
            },
            {
              "value": " Vamu Mirchi Bajji",
              "name": " Vamu Mirchi Bajji"
            },
            {
              "value": " Veg. Roll",
              "name": " Veg. Roll"
            },
            {
              "value": " Shangai Roll",
              "name": " Shangai Roll"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Ajwan Pakodi",
              "name": " Ajwan Pakodi"
            },
            {
              "value": " Veg Bullet",
              "name": " Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            }
          ]
        },
        {
          name: "SPECIAL RICE (ANY ONE)",
          items: [
            {
              "value": "Chintapandu Pulihora",
              "name": "Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": "Coconut Rice",
              "name": "Coconut Rice"
            },
            {
              "value": " Jeera Rice",
              "name": " Jeera Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Corn Methi Pulao",
              "name": " Corn Methi Pulao"
            },
            {
              "value": " Fresh Green Peas Pulao",
              "name": " Fresh Green Peas Pulao"
            },
            {
              "value": " Veg Pulao",
              "name": " Veg Pulao"
            },
            {
              "value": "Aloo Pudina Biryani",
              "name": "Aloo Pudina Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            },
            {
              "value": " Bilal Mushroom Biryani with dalcha",
              "name": " Bilal Mushroom Biryani with dalcha"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": "Paneer & Baby corn Biryani",
              "name": "Paneer & Baby corn Biryani"
            },
            {
              "value": " Plain Biryani",
              "name": " Plain Biryani"
            }
          ]
        },
        {
          name: "PLAIN RICE" ,
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: "VEG FRIES (ANY TWO)",
          items: [
            {
              "value": "Aloo Capsicum Masala",
              "name": "Aloo Capsicum Masala"
            },
            {
              "value": "Aloo Gobi",
              "name": "Aloo Gobi"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aloo, Allam, GreenMirchi Fry",
              "name": " Aloo, Allam, GreenMirchi Fry"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": "Capsicum Sanaga Kaaram",
              "name": "Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Dum Aloo Kashmiri",
              "name": " Dum Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Dosakya 65",
              "name": " Dosakya 65"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Gobi, Peas Fry",
              "name": " Gobi, Peas Fry"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
       
        {
          name: "KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "  Butter Paneer Kurma",
              "name": "  Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": "Methi Chaman",
              "name": "Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Lababdar",
              "name": " Paneer Lababdar"
            },
            {
              "value": " Paneer Moghlai masala",
              "name": " Paneer Moghlai masala"
            },
            {
              "value": " Paneer Sagwala",
              "name": " Paneer Sagwala"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": "Paneer Butter Masala",
              "name": "Paneer Butter Masala"
            },
            {
              "value": "Shahi Paneer Kurma",
              "name": "Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: "VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": " Aloo Capsicum Kaju Kurma",
              "name": " Aloo Capsicum Kaju Kurma"
            },
            {
              "value": "Aloo Scoop Kurma",
              "name": "Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": "Mixed Veg Kurma",
              "name": "Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": "Thotakoora cube Kurma",
              "name": "Thotakoora cube Kurma"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Masala",
              "name": "Aloo Capsicum Masala"
            },
            {
              "value": "Baby corn, Cashew Full Nuts",
              "name": "Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Capsicum Cashew Full Nuts",
              "name": " Capsicum Cashew Full Nuts"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": "Tomato, Drumstick",
              "name": "Tomato, Drumstick"
            },
            {
              "value": " Non-Veg Starter 2",
              "name": " Non-Veg Starter 2"
            }
          ]
        },
        {
          name: "DAL (ANY ONE)",
          items: [
            {
              "value": "AvakaiPappu",
              "name": "AvakaiPappu"
            },
            {
              "value": "Beerakaya Pappu",
              "name": "Beerakaya Pappu"
            },
            {
              "value": " Cucumber Dal",
              "name": " Cucumber Dal"
            },
            {
              "value": " Dal Makhani",
              "name": " Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": " Mango Dal",
              "name": " Mango Dal"
            },
            {
              "value": " Plain Dal + Dappadam",
              "name": " Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": " Dal Jaipuri",
              "name": " Dal Jaipuri"
            }
          ]
        },
        {
          name: "VEG FRIES (ANY TWO)",
          items: [
            {
              "value": "Aloo Capsicum Masala",
              "name": "Aloo Capsicum Masala"
            },
            {
              "value": "Aloo Gobi",
              "name": "Aloo Gobi"
            }
          ]
        },
        {
          name: "STANDARD ITEMS (ANY FOUR)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Menthi Majjiga",
              "name": " Menthi Majjiga"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": "Sambar",
              "name": "Sambar"
            }
          ]
        },
        {
          name: "FRYUMS",
          items: [
            {
              "value": " AppadamPoolu",
              "name": " AppadamPoolu"
            },
            {
              "value": "Minapa Vadiyalu",
              "name": "Minapa Vadiyalu"
            },
            {
              "value": "Voora Mirapakayalu",
              "name": "Voora Mirapakayalu"
            }
          ]
        },
        {
          name: "CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            }
          ]
        },
        {
          name: "PICKLES (ANY TWO)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": " Kotta Avakai",
              "name": " Kotta Avakai"
            },
            {
              "value": " Lemon",
              "name": " Lemon"
            },
            {
              "value": " Madras Onion",
              "name": " Madras Onion"
            },
            {
              "value": " Mixed Veg",
              "name": " Mixed Veg"
            },
            {
              "value": " Raw Papaya",
              "name": " Raw Papaya"
            }
          ]
        },
        {
          name: "POWDERS (ANY TWO)",
          items: [
            {
              "value": " Coconut SanagaKaaram",
              "name": " Coconut SanagaKaaram"
            },
            {
              "value": "Kandi",
              "name": "Kandi"
            },
            {
              "value": "Karivepaku",
              "name": "Karivepaku"
            },
            {
              "value": "Nalla Karam",
              "name": "Nalla Karam"
            },
            {
              "value": "Nuvvulu",
              "name": "Nuvvulu"
            }
          ]
        },
        {
          name: "GRINDED CHUTNIES (ANY TWO)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": "Brinjal, Tomato, Cucumber",
              "name": "Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": "Kandi Pachadi",
              "name": "Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": " Pachi Tomato Chutney",
              "name": " Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: "NON-VEG - BIRYANI’S (ANY ONE) -",
          items: [
            {
              "value": " Bilal Mutton Biryani with katta",
              "name": " Bilal Mutton Biryani with katta"
            },
            {
              "value": " Hyderabadi Mugalai Mutton Biryani",
              "name": " Hyderabadi Mugalai Mutton Biryani"
            },
            {
              "value": " Hyderabadi Chicken Dum Biryani",
              "name": " Hyderabadi Chicken Dum Biryani"
            },
            {
              "value": " Vijawada Style Chicken Biryani",
              "name": " Vijawada Style Chicken Biryani"
            },
            {
              "value": " Bilal Prawn Biryani",
              "name": " Bilal Prawn Biryani"
            },
            {
              "value": " Chicken Ulavacharu Dum Biryani",
              "name": " Chicken Ulavacharu Dum Biryani"
            },
            {
              "value": " Chettinadu Chicken Dum Biryani",
              "name": " Chettinadu Chicken Dum Biryani"
            },
            {
              "value": " Chettinadu Mutton Dum Biryani",
              "name": " Chettinadu Mutton Dum Biryani"
            },
            {
              "value": " Chicken Fry Piece Biryani",
              "name": " Chicken Fry Piece Biryani"
            }
          ]
        },
        {
          name: "NON-VEG CURRIES - MUTTON CHICKEN FISH SEA FOOD(ANY ONE) -",
          items: [
            {
              "value": "Mutton curry home style",
              "name": "Mutton curry home style"
            },
            {
              "value": "Gongura mutton",
              "name": "Gongura mutton"
            },
            {
              "value": " Mulakada mutton",
              "name": " Mulakada mutton"
            },
            {
              "value": " Chintachiguru mutton",
              "name": " Chintachiguru mutton"
            },
            {
              "value": "Mutton Rogan josh",
              "name": "Mutton Rogan josh"
            },
            {
              "value": " Mutton badami",
              "name": " Mutton badami"
            },
            {
              "value": " Talakai mamsam",
              "name": " Talakai mamsam"
            },
            {
              "value": " Andhra Chicken Curry",
              "name": " Andhra Chicken Curry"
            },
            {
              "value": " Chicken Fry",
              "name": " Chicken Fry"
            },
            {
              "value": " Butter Chicken Curry",
              "name": " Butter Chicken Curry"
            },
            {
              "value": " Dum ka Chicken",
              "name": " Dum ka Chicken"
            },
            {
              "value": " Kadai Chicken",
              "name": " Kadai Chicken"
            },
            {
              "value": " Mugalai Chicken Curry",
              "name": " Mugalai Chicken Curry"
            },
            {
              "value": " Chicken Iguru",
              "name": " Chicken Iguru"
            },
            {
              "value": " Natukodi Pulusu",
              "name": " Natukodi Pulusu"
            },
            {
              "value": " Natukodi Iguru",
              "name": " Natukodi Iguru"
            },
            {
              "value": " Chicken Chintachiguru",
              "name": " Chicken Chintachiguru"
            },
            {
              "value": " Ginger Chicken Masala",
              "name": " Ginger Chicken Masala"
            },
            {
              "value": " Chicken Do Pyaza",
              "name": " Chicken Do Pyaza"
            },
            {
              "value": " Spicy Chicken Kurma",
              "name": " Spicy Chicken Kurma"
            },
            {
              "value": "  Methi chicken",
              "name": "  Methi chicken"
            },
            {
              "value": " Chicken Liver Fry",
              "name": " Chicken Liver Fry"
            },
            {
              "value": " Palak Chicken Curry",
              "name": " Palak Chicken Curry"
            },
            {
              "value": " Chicken Mirayala Vepudu",
              "name": " Chicken Mirayala Vepudu"
            },
            {
              "value": " Koramenu Chapala Pulusu",
              "name": " Koramenu Chapala Pulusu"
            },
            {
              "value": " Nellore Chapala Pulusu",
              "name": " Nellore Chapala Pulusu"
            },
            {
              "value": " Mango Chapala Pulusu",
              "name": " Mango Chapala Pulusu"
            },
            {
              "value": " Bommidyala Pulusu",
              "name": " Bommidyala Pulusu"
            },
            {
              "value": " Bommidyala Iguru",
              "name": " Bommidyala Iguru"
            },
            {
              "value": " Koramenu Iguru",
              "name": " Koramenu Iguru"
            },
            {
              "value": " Koramenu Fry ( with bone)",
              "name": " Koramenu Fry ( with bone)"
            },
            {
              "value": " Prawns Kobbari Iguru",
              "name": " Prawns Kobbari Iguru"
            },
            {
              "value": " Prawns Curry",
              "name": " Prawns Curry"
            },
            {
              "value": "  Prawns Fry",
              "name": "  Prawns Fry"
            },
            {
              "value": " Chintachiguru Prawns",
              "name": " Chintachiguru Prawns"
            },
            {
              "value": " Peethala Iguru",
              "name": " Peethala Iguru"
            },
            {
              "value": " Peethala Pulusu",
              "name": " Peethala Pulusu"
            },
            {
              "value": " DosakayaNethhalau",
              "name": " DosakayaNethhalau"
            }
          ]
        },
        {
          name: "ICE CREAMS (ANY TWO)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": "Butter Scotch",
              "name": "Butter Scotch"
            },
            {
              "value": " Black Current",
              "name": " Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": "Caramel nuts",
              "name": "Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": " Kaju & Kismis",
              "name": " Kaju & Kismis"
            },
            {
              "value": " Mango",
              "name": " Mango"
            },
            {
              "value": " Orange",
              "name": " Orange"
            },
            {
              "value": " Pista",
              "name": " Pista"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },
        {
          name: "FRUITS DELIGHT (ANY FOUR)",
          items: [
            {
              "value": "Apple",
              "name": "Apple"
            },
            {
              "value": " Grapes",
              "name": " Grapes"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": " Musk Melon",
              "name": " Musk Melon"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Papaya",
              "name": "Papaya"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Sapota",
              "name": "Sapota"
            },
            {
              "value": "Water Melon",
              "name": "Water Melon"
            }
          ]
        },
        {
          name: "Pans",
          items: [
            {
              "value": "Pan Sada",
              "name": "Pan Sada"
            },
            {
              "value": "Pan Sweet",
              "name": "Pan Sweet"
            }
          ]
        },
      ],
      nonVegCategories: [
        {
          name: "  --COCKTAIL MENU DIAMOND EXOTIC --   Snacks @CocktailService",
          items: [
            {
              "value": "Green Salad",
              "name": "Green Salad"
            },
            {
              "value": "Green Peas Masala",
              "name": "Green Peas Masala"
            },
            {
              "value": "Sweet American Corn",
              "name": "Sweet American Corn"
            }
          ]
        },
        {
          name: "Pass Around Snacks - Veg (ANY SIX) - DIPS & SPREADS -",
          items: [
            {
              "value": "Cheese Balls",
              "name": "Cheese Balls"
            },
            {
              "value": "Cheese Potato Wedges Melt",
              "name": "Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": "Cocktail corn samosa",
              "name": "Cocktail corn samosa"
            },
            {
              "value": " Corn Cheese Kabab",
              "name": " Corn Cheese Kabab"
            },
            {
              "value": " Corn Fitters",
              "name": " Corn Fitters"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " hangai Rolls",
              "name": " hangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            },
            {
              "value": " Garden Spring Green Salad",
              "name": " Garden Spring Green Salad"
            },
            {
              "value": " Boiled nuts",
              "name": " Boiled nuts"
            },
            {
              "value": " Sprouts",
              "name": " Sprouts"
            },
            {
              "value": " Cucumber honey yogurt dill salad",
              "name": " Cucumber honey yogurt dill salad"
            },
            {
              "value": " Mint chutney",
              "name": " Mint chutney"
            },
            {
              "value": " Hot garlic sauce",
              "name": " Hot garlic sauce"
            },
            {
              "value": " Garlic mayo",
              "name": " Garlic mayo"
            },
            {
              "value": " Tomato ketchup",
              "name": " Tomato ketchup"
            }
          ]
        },
        {
          name: "Pass Around Snacks -Chicken - SEA FOOD SNACKS (ANY TWO)  MUTTON SNACKS (ANY ONE)",
          items: [
            {
              "value": "Pepper Chicken",
              "name": "Pepper Chicken"
            },
            {
              "value": "Chicken Pakodi",
              "name": "Chicken Pakodi"
            },
            {
              "value": "Chilli Chicken",
              "name": "Chilli Chicken"
            },
            {
              "value": " Chicken Majestic",
              "name": " Chicken Majestic"
            },
            {
              "value": " Chicken 65",
              "name": " Chicken 65"
            },
            {
              "value": " Chicken Satay",
              "name": " Chicken Satay"
            },
            {
              "value": " Fried Chicken",
              "name": " Fried Chicken"
            },
            {
              "value": " Chicken Lollypops",
              "name": " Chicken Lollypops"
            },
            {
              "value": " Lemon Chicken",
              "name": " Lemon Chicken"
            },
            {
              "value": " Chicken Manchurian",
              "name": " Chicken Manchurian"
            },
            {
              "value": " Reshmi Chicken",
              "name": " Reshmi Chicken"
            },
            {
              "value": " Chicken Harialyali Tikka",
              "name": " Chicken Harialyali Tikka"
            },
            {
              "value": " Chicken Malai Tikka",
              "name": " Chicken Malai Tikka"
            },
            {
              "value": " Bar-be-que Chicken",
              "name": " Bar-be-que Chicken"
            },
            {
              "value": " Chicken Springli",
              "name": " Chicken Springli"
            },
            {
              "value": " Chicken Tandoori Kabab",
              "name": " Chicken Tandoori Kabab"
            },
            {
              "value": " Ginger Chicken",
              "name": " Ginger Chicken"
            },
            {
              "value": " Achari Murg Tikka",
              "name": " Achari Murg Tikka"
            },
            {
              "value": " MurgGilafi Tikka",
              "name": " MurgGilafi Tikka"
            },
            {
              "value": " Chicken Shashlik",
              "name": " Chicken Shashlik"
            },
            {
              "value": " Chicken Wings",
              "name": " Chicken Wings"
            },
            {
              "value": " Grilled Chicken",
              "name": " Grilled Chicken"
            },
            {
              "value": " Fried Corn Chicken",
              "name": " Fried Corn Chicken"
            },
            {
              "value": "Mutton Sheek Kabab",
              "name": "Mutton Sheek Kabab"
            },
            {
              "value": "Mutton Keema Balls",
              "name": "Mutton Keema Balls"
            },
            {
              "value": "Pattar ka Gosh",
              "name": "Pattar ka Gosh"
            },
            {
              "value": "Mutton Boti Kabab",
              "name": "Mutton Boti Kabab"
            },
            {
              "value": "Mutton Shami Kabab",
              "name": "Mutton Shami Kabab"
            },
            {
              "value": "Zingara Mutton Sheek",
              "name": "Zingara Mutton Sheek"
            },
            {
              "value": "Mutton Chops",
              "name": "Mutton Chops"
            },
            {
              "value": "Gold Coin",
              "name": "Gold Coin"
            },
            {
              "value": " Ajwan Pakodi",
              "name": " Ajwan Pakodi"
            },
            {
              "value": "Veg Bullet",
              "name": "Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Pepper Mutton",
              "name": " Pepper Mutton"
            },
            {
              "value": "Spicy Fish Fry",
              "name": "Spicy Fish Fry"
            },
            {
              "value": "Apollo Fish",
              "name": "Apollo Fish"
            },
            {
              "value": " Fish Fingers",
              "name": " Fish Fingers"
            },
            {
              "value": "Pepper Fish",
              "name": "Pepper Fish"
            },
            {
              "value": " Fish Bullets",
              "name": " Fish Bullets"
            },
            {
              "value": " Fish Lal Mirchi Tikka",
              "name": " Fish Lal Mirchi Tikka"
            },
            {
              "value": " Fish Amritsari Tikka",
              "name": " Fish Amritsari Tikka"
            },
            {
              "value": " Tawa Fish",
              "name": " Tawa Fish"
            },
            {
              "value": " Lady Fish Fingers",
              "name": " Lady Fish Fingers"
            },
            {
              "value": " Golden Fired Prawns",
              "name": " Golden Fired Prawns"
            },
            {
              "value": "Chilli Garlic Prawns",
              "name": "Chilli Garlic Prawns"
            },
            {
              "value": " Grilled Prawns",
              "name": " Grilled Prawns"
            },
            {
              "value": " Loose Prawns",
              "name": " Loose Prawns"
            }
          ]
        },
        {
          name: "Beverages (ANY ONE)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": " Sugar Cane (Min. Gathering)",
              "name": " Sugar Cane (Min. Gathering)"
            },
            {
              "value": " Coconut Delight",
              "name": " Coconut Delight"
            },
            {
              "value": " Fruit Punch",
              "name": " Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": " Litchi Punch",
              "name": " Litchi Punch"
            },
            {
              "value": " Grapes Pulpy kulfi",
              "name": " Grapes Pulpy kulfi"
            },
            {
              "value": " Orange Punch",
              "name": " Orange Punch"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            }
          ]
        },
        {
          name: "Salad",
          items: [
            {
              "value": "Garden Spring Green Salad Boiled nuts",
              "name": "Garden Spring Green Salad Boiled nuts"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            }
          ]
        },
        {
          name: "Sweets  - LIVE SWEETS - (SELECT ANY TWO)",
          items: [
            {
              "value": "Badam Halwa",
              "name": "Badam Halwa"
            },
            {
              "value": "Mixed Fruit Halwa",
              "name": "Mixed Fruit Halwa"
            },
            {
              "value": "Double Ka Meetha",
              "name": "Double Ka Meetha"
            },
            {
              "value": " Carrot Green Mixed Halwa",
              "name": " Carrot Green Mixed Halwa"
            },
            {
              "value": "Qhubani Ka Meetha",
              "name": "Qhubani Ka Meetha"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": " Pineapple Jalebi",
              "name": " Pineapple Jalebi"
            },
            {
              "value": "Tawa Mix Sweet",
              "name": "Tawa Mix Sweet"
            },
            {
              "value": " American Mal Puri",
              "name": " American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Gajrela",
              "name": " Gajrela"
            },
            {
              "value": " Basundi",
              "name": " Basundi"
            }
          ]
        },
        {
          name: " ROTIES (ANY TWO) ",
          items: [
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": "Achari Roti",
              "name": "Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Butter Naan",
              "name": "Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": "Kottimeera Parota",
              "name": "Kottimeera Parota"
            },
            {
              "value": "Laccha Parota",
              "name": "Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": "Masala Parota",
              "name": "Masala Parota"
            },
            {
              "value": "Palak Parota",
              "name": "Palak Parota"
            },
            {
              "value": "Plain Kulcha",
              "name": "Plain Kulcha"
            },
            {
              "value": "Plain Naan",
              "name": "Plain Naan"
            },
            {
              "value": "Plain Parota",
              "name": "Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": "Pulkha",
              "name": "Pulkha"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            }
          ]
        },
        {
          name: "HOTS (ANY ONE)",
          items: [
            {
              "value": "Gaare",
              "name": "Gaare"
            },
            {
              "value": "Mini Alsanda Wada",
              "name": "Mini Alsanda Wada"
            },
            {
              "value": "Nellore Chitti Gaare",
              "name": "Nellore Chitti Gaare"
            },
            {
              "value": "Madras Pakodi (Round)",
              "name": "Madras Pakodi (Round)"
            },
            {
              "value": "Pudina Masala Wada",
              "name": "Pudina Masala Wada"
            },
            {
              "value": "Mealmaker Keema Wada",
              "name": "Mealmaker Keema Wada"
            },
            {
              "value": "Veg. Lolly Pop",
              "name": "Veg. Lolly Pop"
            },
            {
              "value": "Mini Perugu Aawada",
              "name": "Mini Perugu Aawada"
            },
            {
              "value": "Vamu Mirchi Bajji",
              "name": "Vamu Mirchi Bajji"
            },
            {
              "value": "Veg. Roll",
              "name": "Veg. Roll"
            },
            {
              "value": "Shangai Roll",
              "name": "Shangai Roll"
            },
            {
              "value": "Gold Coin",
              "name": "Gold Coin"
            },
            {
              "value": "Ajwan Pakodi",
              "name": "Ajwan Pakodi"
            }
          ]
        },
        {
          name: "SPECIAL RICE  - FLAVORED RICE -PULAO - BIRYANI’S - (ANY ONE)",
          items: [
            {
              "value": "Chintapandu Pulihora",
              "name": "Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": "Coconut Rice",
              "name": "Coconut Rice"
            },
            {
              "value": " Jeera Rice",
              "name": " Jeera Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Corn Methi Pulao",
              "name": " Corn Methi Pulao"
            },
            {
              "value": " Fresh Green Peas Pulao",
              "name": " Fresh Green Peas Pulao"
            },
            {
              "value": " Veg Pulao",
              "name": " Veg Pulao"
            },
            {
              "value": "Aloo Pudina Biryani",
              "name": "Aloo Pudina Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            },
            {
              "value": " Bilal Mushroom Biryani with dalcha",
              "name": " Bilal Mushroom Biryani with dalcha"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": "Paneer & Baby corn Biryani",
              "name": "Paneer & Baby corn Biryani"
            },
            {
              "value": " Plain Biryani",
              "name": " Plain Biryani"
            }
          ]
        },
        {
          name: "PLAIN RICE" ,
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: "VEG FRIES (ANY TWO)",
          items: [
            {
              "value": "Aloo Capsicum Masala",
              "name": "Aloo Capsicum Masala"
            },
            {
              "value": "Aloo Gobi",
              "name": "Aloo Gobi"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aloo, Allam, GreenMirchi Fry",
              "name": " Aloo, Allam, GreenMirchi Fry"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": "Capsicum Sanaga Kaaram",
              "name": "Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Dum Aloo Kashmiri",
              "name": " Dum Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Dosakya 65",
              "name": " Dosakya 65"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Gobi, Peas Fry",
              "name": " Gobi, Peas Fry"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
       
        {
          name: "KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "Butter Paneer Kurma",
              "name": "Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": "Methi Chaman",
              "name": "Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Lababdar",
              "name": " Paneer Lababdar"
            },
            {
              "value": " Paneer Moghlai masala",
              "name": " Paneer Moghlai masala"
            },
            {
              "value": " Paneer Sagwala",
              "name": " Paneer Sagwala"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": "Paneer Butter Masala",
              "name": "Paneer Butter Masala"
            },
            {
              "value": "Shahi Paneer Kurma",
              "name": "Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: "VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": " Aloo Capsicum Kaju Kurma",
              "name": " Aloo Capsicum Kaju Kurma"
            },
            {
              "value": "Aloo Scoop Kurma",
              "name": "Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": "Mixed Veg Kurma",
              "name": "Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": "Thotakoora cube Kurma",
              "name": "Thotakoora cube Kurma"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Masala",
              "name": "Aloo Capsicum Masala"
            },
            {
              "value": "Baby corn, Cashew Full Nuts",
              "name": "Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Capsicum Cashew Full Nuts",
              "name": " Capsicum Cashew Full Nuts"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": "Tomato, Drumstick",
              "name": "Tomato, Drumstick"
            },
            {
              "value": " Non-Veg Starter 2",
              "name": " Non-Veg Starter 2"
            }
          ]
        },
        {
          name: "DAL (ANY ONE)",
          items: [
            {
              "value": "AvakaiPappu",
              "name": "AvakaiPappu"
            },
            {
              "value": "Beerakaya Pappu",
              "name": "Beerakaya Pappu"
            },
            {
              "value": " Cucumber Dal",
              "name": " Cucumber Dal"
            },
            {
              "value": " Dal Makhani",
              "name": " Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": " Mango Dal",
              "name": " Mango Dal"
            },
            {
              "value": " Plain Dal + Dappadam",
              "name": " Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": " Dal Jaipuri",
              "name": " Dal Jaipuri"
            }
          ]
        },
        {
          name: "VEG FRIES (ANY TWO)",
          items: [
            {
              "value": "Aloo Capsicum Masala",
              "name": "Aloo Capsicum Masala"
            },
            {
              "value": "Aloo Gobi",
              "name": "Aloo Gobi"
            }
          ]
        },
        {
          name: "STANDARD ITEMS (ANY FOUR)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Menthi Majjiga",
              "name": " Menthi Majjiga"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": "Sambar",
              "name": "Sambar"
            }
          ]
        },
        {
          name: "FRYUMS",
          items: [
            {
              "value": " AppadamPoolu",
              "name": " AppadamPoolu"
            },
            {
              "value": "Minapa Vadiyalu",
              "name": "Minapa Vadiyalu"
            },
            {
              "value": "Voora Mirapakayalu",
              "name": "Voora Mirapakayalu"
            }
          ]
        },
        {
          name: "CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            }
          ]
        },
        {
          name: "PICKLES (ANY TWO)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": " Kotta Avakai",
              "name": " Kotta Avakai"
            },
            {
              "value": " Lemon",
              "name": " Lemon"
            },
            {
              "value": " Madras Onion",
              "name": " Madras Onion"
            },
            {
              "value": " Mixed Veg",
              "name": " Mixed Veg"
            },
            {
              "value": " Raw Papaya",
              "name": " Raw Papaya"
            }
          ]
        },
        {
          name: "POWDERS (ANY TWO)",
          items: [
            {
              "value": " Coconut SanagaKaaram",
              "name": " Coconut SanagaKaaram"
            },
            {
              "value": "Kandi",
              "name": "Kandi"
            },
            {
              "value": "Karivepaku",
              "name": "Karivepaku"
            },
            {
              "value": "Nalla Karam",
              "name": "Nalla Karam"
            },
            {
              "value": "Nuvvulu",
              "name": "Nuvvulu"
            }
          ]
        },
        {
          name: "GRINDED CHUTNIES (ANY TWO)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": "Brinjal, Tomato, Cucumber",
              "name": "Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": "Kandi Pachadi",
              "name": "Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": " Pachi Tomato Chutney",
              "name": " Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: "NON-VEG MAIN COURSE - BIRYANI’S (ANY ONE) -",
          items: [
            {
              "value": " Bilal Mutton Biryani with katta",
              "name": " Bilal Mutton Biryani with katta"
            },
            {
              "value": " Hyderabadi Mugalai Mutton Biryani",
              "name": " Hyderabadi Mugalai Mutton Biryani"
            },
            {
              "value": " Hyderabadi Chicken Dum Biryani",
              "name": " Hyderabadi Chicken Dum Biryani"
            },
            {
              "value": " Vijawada Style Chicken Biryani",
              "name": " Vijawada Style Chicken Biryani"
            },
            {
              "value": " Bilal Prawn Biryani",
              "name": " Bilal Prawn Biryani"
            },
            {
              "value": " Chicken Ulavacharu Dum Biryani",
              "name": " Chicken Ulavacharu Dum Biryani"
            },
            {
              "value": " Chettinadu Chicken Dum Biryani",
              "name": " Chettinadu Chicken Dum Biryani"
            },
            {
              "value": " Chettinadu Mutton Dum Biryani",
              "name": " Chettinadu Mutton Dum Biryani"
            },
            {
              "value": " Chicken Fry Piece Biryani",
              "name": " Chicken Fry Piece Biryani"
            }
          ]
        },
        {
          name: "NON-VEG CURRIES - MUTTON- CHICKEN - FISH -SEA FOOD(ANY ONE) - ",
          items: [
            {
              "value": "Mutton curry home style",
              "name": "Mutton curry home style"
            },
            {
              "value": "Gongura mutton",
              "name": "Gongura mutton"
            },
            {
              "value": " Mulakada mutton",
              "name": " Mulakada mutton"
            },
            {
              "value": " Chintachiguru mutton",
              "name": " Chintachiguru mutton"
            },
            {
              "value": "Mutton Rogan josh",
              "name": "Mutton Rogan josh"
            },
            {
              "value": " Mutton badami",
              "name": " Mutton badami"
            },
            {
              "value": " Talakai mamsam",
              "name": " Talakai mamsam"
            },
            {
              "value": " Andhra Chicken Curry",
              "name": " Andhra Chicken Curry"
            },
            {
              "value": " Chicken Fry",
              "name": " Chicken Fry"
            },
            {
              "value": " Butter Chicken Curry",
              "name": " Butter Chicken Curry"
            },
            {
              "value": " Dum ka Chicken",
              "name": " Dum ka Chicken"
            },
            {
              "value": " Kadai Chicken",
              "name": " Kadai Chicken"
            },
            {
              "value": " Mugalai Chicken Curry",
              "name": " Mugalai Chicken Curry"
            },
            {
              "value": " Chicken Iguru",
              "name": " Chicken Iguru"
            },
            {
              "value": " Natukodi Pulusu",
              "name": " Natukodi Pulusu"
            },
            {
              "value": " Natukodi Iguru",
              "name": " Natukodi Iguru"
            },
            {
              "value": " Chicken Chintachiguru",
              "name": " Chicken Chintachiguru"
            },
            {
              "value": " Ginger Chicken Masala",
              "name": " Ginger Chicken Masala"
            },
            {
              "value": " Chicken Do Pyaza",
              "name": " Chicken Do Pyaza"
            },
            {
              "value": " Spicy Chicken Kurma",
              "name": " Spicy Chicken Kurma"
            },
            {
              "value": "  Methi chicken",
              "name": "  Methi chicken"
            },
            {
              "value": " Chicken Liver Fry",
              "name": " Chicken Liver Fry"
            },
            {
              "value": " Palak Chicken Curry",
              "name": " Palak Chicken Curry"
            },
            {
              "value": " Chicken Mirayala Vepudu",
              "name": " Chicken Mirayala Vepudu"
            },
            {
              "value": " Koramenu Chapala Pulusu",
              "name": " Koramenu Chapala Pulusu"
            },
            {
              "value": " Nellore Chapala Pulusu",
              "name": " Nellore Chapala Pulusu"
            },
            {
              "value": " Mango Chapala Pulusu",
              "name": " Mango Chapala Pulusu"
            },
            {
              "value": " Bommidyala Pulusu",
              "name": " Bommidyala Pulusu"
            },
            {
              "value": " Bommidyala Iguru",
              "name": " Bommidyala Iguru"
            },
            {
              "value": " Koramenu Iguru",
              "name": " Koramenu Iguru"
            },
            {
              "value": " Koramenu Fry ( with bone)",
              "name": " Koramenu Fry ( with bone)"
            },
            {
              "value": " Prawns Kobbari Iguru",
              "name": " Prawns Kobbari Iguru"
            },
            {
              "value": " Prawns Curry",
              "name": " Prawns Curry"
            },
            {
              "value": "  Prawns Fry",
              "name": "  Prawns Fry"
            },
            {
              "value": " Chintachiguru Prawns",
              "name": " Chintachiguru Prawns"
            },
            {
              "value": " Peethala Iguru",
              "name": " Peethala Iguru"
            },
            {
              "value": " Peethala Pulusu",
              "name": " Peethala Pulusu"
            },
            {
              "value": " DosakayaNethhalau",
              "name": " DosakayaNethhalau"
            }
          ]
           
            
        },
        {
          name: "ICE CREAMS (ANY TWO)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": "Butter Scotch",
              "name": "Butter Scotch"
            },
            {
              "value": " Black Current",
              "name": " Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": "Caramel nuts",
              "name": "Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": " Kaju & Kismis",
              "name": " Kaju & Kismis"
            },
            {
              "value": " Mango",
              "name": " Mango"
            },
            {
              "value": " Orange",
              "name": " Orange"
            },
            {
              "value": " Pista",
              "name": " Pista"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },
        {
          name: "FRUITS DELIGHT - INDIAN(ANY FOUR) -",
          items: [
            {
              "value": "Apple",
              "name": "Apple"
            },
            {
              "value": " Grapes",
              "name": " Grapes"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": " Musk Melon",
              "name": " Musk Melon"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Papaya",
              "name": "Papaya"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Sapota",
              "name": "Sapota"
            },
            {
              "value": "Water Melon",
              "name": "Water Melon"
            }
          ]
        },
        {
          name: "Pans",
          items: [
            {
              "value": "Pan Sada",
              "name": "Pan Sada"
            },
            {
              "value": "Pan Sweet",
              "name": "Pan Sweet"
            }
          ]
        },
      ]
    },
    {
      name: "Diamond",
      categories: [
        {
          name: " -- VEG DIAMOND EXOTIC -- BEVERAGES (ANY THREE)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": "Sugar Cane (Min. Gathering)",
              "name": "Sugar Cane (Min. Gathering)"
            },
            {
              "value": "Coconut Delight",
              "name": "Coconut Delight"
            },
            {
              "value": "Fruit Punch",
              "name": "Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": "Litchi Punch",
              "name": "Litchi Punch"
            },
            {
              "value": "Grapes Pulpy kulfi",
              "name": "Grapes Pulpy kulfi"
            },
            {
              "value": "Orange Punch",
              "name": "Orange Punch"
            },
            {
              "value": "Irish Milkshake",
              "name": "Irish Milkshake"
            },
            {
              "value": "Thatimunjala Milkshake (Seasonal)",
              "name": "Thatimunjala Milkshake (Seasonal)"
            },
            {
              "value": "Peach Apricot Delight",
              "name": "Peach Apricot Delight"
            },
            {
              "value": " Sharjah",
              "name": " Sharjah"
            },
            {
              "value": " Chicoo Milk shakes",
              "name": " Chicoo Milk shakes"
            },
            {
              "value": "Panakam",
              "name": "Panakam"
            },
            {
              "value": " Cold Badam Milk",
              "name": " Cold Badam Milk"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            },
            {
              "value": " White Grapes (Sparkling)",
              "name": " White Grapes (Sparkling)"
            },
            {
              "value": " Red Grapes (Sparkling)",
              "name": " Red Grapes (Sparkling)"
            },
            {
              "value": " Peach (Sparkling)",
              "name": " Peach (Sparkling)"
            },
            {
              "value": " Peach & Mango (Sparkling)",
              "name": " Peach & Mango (Sparkling)"
            }
          ]
        },
        {
          name: " MOCKTAIL'S (ANY THREE)",
          items: [
            {
              "value": "Virgin Mojito",
              "name": "Virgin Mojito"
            },
            {
              "value": "Virgin Green Apple Martini",
              "name": "Virgin Green Apple Martini"
            },
            {
              "value": "Virgin Pink Lady",
              "name": "Virgin Pink Lady"
            },
            {
              "value": " Blue Angel",
              "name": " Blue Angel"
            },
            {
              "value": "Violet Fizz",
              "name": "Violet Fizz"
            },
            {
              "value": " Orange Surprise",
              "name": " Orange Surprise"
            },
            {
              "value": "Mexican Sunset",
              "name": "Mexican Sunset"
            },
            {
              "value": "Mint Chocolate",
              "name": "Mint Chocolate"
            },
            {
              "value": "Shirley Temple",
              "name": "Shirley Temple"
            }
          ]
        },
        {
          name: " WELCOME SWEETS (ANY THREE)",
          items: [
            {
              "value": "Choco Jewels",
              "name": "Choco Jewels"
            },
            {
              "value": "Anjeer Delight",
              "name": "Anjeer Delight"
            },
            {
              "value": "Pista Sandwich",
              "name": "Pista Sandwich"
            },
            {
              "value": "Kaju Basket",
              "name": "Kaju Basket"
            },
            {
              "value": "Fruit Choco's",
              "name": "Fruit Choco's"
            },
            {
              "value": "Fruit Tarts",
              "name": "Fruit Tarts"
            },
            {
              "value": "Dry Fruit Delight",
              "name": "Dry Fruit Delight"
            },
            {
              "value": "Anjeer Roll",
              "name": "Anjeer Roll"
            },
            {
              "value": "Orange Balls",
              "name": "Orange Balls"
            },
            {
              "value": "Kaju Pista",
              "name": "Kaju Pista"
            }
          ]
        },
        {
          name: " WELCOME SNACKS (ANY FIVE) - DIPS & SPREADS -",
          items: [
            {
              "value": "Canapes",
              "name": "Canapes"
            },
            {
              "value": " Cottage Cheese Balls",
              "name": " Cottage Cheese Balls"
            },
            {
              "value": " Cheese Potato Wedges Melt",
              "name": " Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": " Cocktail corn samosa",
              "name": " Cocktail corn samosa"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Fried Red Pepper Kaju",
              "name": " Fried Red Pepper Kaju"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " Red Masala Kaju",
              "name": " Red Masala Kaju"
            },
            {
              "value": " Shangai Rolls",
              "name": " Shangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            },
            {
              "value": "Mint chutney",
              "name": "Mint chutney"
            },
            {
              "value": "Hot garlic sauce",
              "name": "Hot garlic sauce"
            },
            {
              "value": "Garlic mayo",
              "name": "Garlic mayo"
            },
            {
              "value": "Tomato ketchup",
              "name": "Tomato ketchup"
            },
            {
              "value": "Cocktail Sauce",
              "name": "Cocktail Sauce"
            }
          ]
        },
        {
          name: " SALAD (ANY FIVE)",
          items: [
            {
              "value": "Garden Spring Green Salad",
              "name": "Garden Spring Green Salad"
            },
            {
              "value": "German Potato Salad",
              "name": "German Potato Salad"
            },
            {
              "value": "Corn Obrien",
              "name": "Corn Obrien"
            },
            {
              "value": "Sprouts",
              "name": "Sprouts"
            },
            {
              "value": "Tri Beans Salad with lemon chilly",
              "name": "Tri Beans Salad with lemon chilly"
            },
            {
              "value": "Green Apple Yoghurt Honey",
              "name": "Green Apple Yoghurt Honey"
            },
            {
              "value": "Cheese Cherry Pineapple Stick",
              "name": "Cheese Cherry Pineapple Stick"
            },
            {
              "value": "Cucumber Yoghurt Dill Salad",
              "name": "Cucumber Yoghurt Dill Salad"
            },
            {
              "value": "Italian Pasta with Cilantro",
              "name": "Italian Pasta with Cilantro"
            },
            {
              "value": " Pineapple Cheese Salad",
              "name": " Pineapple Cheese Salad"
            },
            {
              "value": " Aloo Chana chat",
              "name": " Aloo Chana chat"
            },
            {
              "value": " Russian Salad",
              "name": " Russian Salad"
            },
            {
              "value": " Coleslaw",
              "name": " Coleslaw"
            },
            {
              "value": " Waldorf Salad",
              "name": " Waldorf Salad"
            },
            {
              "value": " Caesar Salad",
              "name": " Caesar Salad"
            },
            {
              "value": " Kimchee Salad",
              "name": " Kimchee Salad"
            },
            {
              "value": " Thai Papaya Salad",
              "name": " Thai Papaya Salad"
            },
            {
              "value": " Broccoli, Cauliflower & American Corn Salad",
              "name": " Broccoli, Cauliflower & American Corn Salad"
            },
            {
              "value": " Caesar Salad",
              "name": " Caesar Salad"
            },
            {
              "value": " Kimchee Salad",
              "name": " Kimchee Salad"
            },
            {
              "value": " Thai Papaya Salad",
              "name": " Thai Papaya Salad"
            },
            {
              "value": " Broccoli, Cauliflower & American Corn Salad",
              "name": " Broccoli, Cauliflower & American Corn Salad"
            },
            {
              "value": " Boiled Peanuts",
              "name": " Boiled Peanuts"
            },
            {
              "value": " Boiled Rajma",
              "name": " Boiled Rajma"
            },
            {
              "value": " Boiled Chick Peas",
              "name": " Boiled Chick Peas"
            },
            {
              "value": " Boiled American Corn",
              "name": " Boiled American Corn"
            },
            {
              "value": " Corn on the Cob",
              "name": " Corn on the Cob"
            }
          ]
        },
        {
          name: " SOUPS (ANY TWO)",
          items: [
            {
              "value": " Cream of Mushroom Soup",
              "name": " Cream of Mushroom Soup"
            },
            {
              "value": " Cream of Tomato Soup",
              "name": " Cream of Tomato Soup"
            },
            {
              "value": "Lemon Coriander Soup",
              "name": "Lemon Coriander Soup"
            },
            {
              "value": "Minestrone Soup",
              "name": "Minestrone Soup"
            },
            {
              "value": "  Mulligatawny",
              "name": "  Mulligatawny"
            },
            {
              "value": " Potato leaks Soup",
              "name": " Potato leaks Soup"
            },
            {
              "value": "Pumpkin Soup",
              "name": "Pumpkin Soup"
            },
            {
              "value": " Sweet Corn Soup",
              "name": " Sweet Corn Soup"
            },
            {
              "value": "Tomato dhanya Shorba",
              "name": "Tomato dhanya Shorba"
            },
            {
              "value": " Veg. Hot & Sour Soup",
              "name": " Veg. Hot & Sour Soup"
            },
            {
              "value": "Veg. Manchow Soup",
              "name": "Veg. Manchow Soup"
            }
          ]
        },
        {
          name: " DAL (ANY TWO) ",
          items: [
            {
              "value": "Avakai Pappu",
              "name": "Avakai Pappu"
            },
            {
              "value": "Palakora Mamidikaya Pappu",
              "name": "Palakora Mamidikaya Pappu"
            },
            {
              "value": "Ooseri Kaya Pappu",
              "name": "Ooseri Kaya Pappu"
            },
            {
              "value": "Cucumber Dal",
              "name": "Cucumber Dal"
            },
            {
              "value": "Dal Makhani",
              "name": "Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": "Mango Dal",
              "name": "Mango Dal"
            },
            {
              "value": "Plain Dal + Dappadam",
              "name": "Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": "Dal Jaipuri",
              "name": "Dal Jaipuri"
            }
          ]
        },
        {
          name: " VEG FRIES(ANY THREE)",
          items: [
            {
              "value": "Thotakoora Liver Fry",
              "name": "Thotakoora Liver Fry"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Aloo Allam Pachi Mirchi Fry",
              "name": " Baby Aloo Allam Pachi Mirchi Fry"
            },
            {
              "value": " Baby Corn 65",
              "name": " Baby Corn 65"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": " Capsicum Sanaga Kaaram",
              "name": " Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Corn Liver Fry",
              "name": " Corn Liver Fry"
            },
            {
              "value": " Dam Aloo Kashmiri",
              "name": " Dam Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Kandi Liver Fry",
              "name": " Kandi Liver Fry"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Mushroom Hara Pyaz",
              "name": " Mushroom Hara Pyaz"
            },
            {
              "value": " Mushroom Ulavacharu Iguru",
              "name": " Mushroom Ulavacharu Iguru"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY TWO)",
          items: [
            {
              "value": " Baby corn, Cashew Full Nuts",
              "name": " Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": " Tomato, Drumstick",
              "name": " Tomato, Drumstick"
            }
          ]
        },
        {
          name: " STANDARD ITEMS (ANY FIVE)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": " Mysore Rasam",
              "name": " Mysore Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": " Mix Veg. Sambar",
              "name": " Mix Veg. Sambar"
            },
            {
              "value": " Madras Onion Sambar",
              "name": " Madras Onion Sambar"
            }
          ]
        },
        {
          name: " PICKLES (ANY THREE)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Dosakya Avakai",
              "name": "Dosakya Avakai"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": "Garlic Cashew Full nuts",
              "name": "Garlic Cashew Full nuts"
            },
            {
              "value": "Kotta Avakai",
              "name": "Kotta Avakai"
            },
            {
              "value": "Lemon",
              "name": "Lemon"
            },
            {
              "value": "Madras Onion",
              "name": "Madras Onion"
            },
            {
              "value": "Mixed Veg",
              "name": "Mixed Veg"
            },
            {
              "value": "Raw Papaya",
              "name": "Raw Papaya"
            }
          ]
        },
        {
          name: " POWDERS (ANY TWO)",
          items: [
            {
              "value": "Coconut Sanaga Kaaram",
              "name": "Coconut Sanaga Kaaram"
            },
            {
              "value": "Kandi",
              "name": "Kandi"
            },
            {
              "value": "Karivepaku",
              "name": "Karivepaku"
            },
            {
              "value": " Nalla Karam",
              "name": " Nalla Karam"
            },
            {
              "value": "Nuvvulu",
              "name": "Nuvvulu"
            }
          ]
        },
        {
          name: " GRINDED CHUTNIES (ANY THREE)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": " Brinjal, Tomato, Cucumber",
              "name": " Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Chukkakura Kandi Pachadi",
              "name": " Chukkakura Kandi Pachadi"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Cabbage",
              "name": " Cabbage"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": " Kandi Pachadi",
              "name": " Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": "  Pachi Tomato Chutney",
              "name": "  Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: " FRYUMS (ANY FOUR)",
          items: [
            {
              "value": "AppadamPoolu",
              "name": "AppadamPoolu"
            },
            {
              "value": " Minapa Vadiyalu",
              "name": " Minapa Vadiyalu"
            },
            {
              "value": " Voora Mirapakayalu",
              "name": " Voora Mirapakayalu"
            },
            {
              "value": " Saggubiyam Vadiyalu",
              "name": " Saggubiyam Vadiyalu"
            },
            {
              "value": " Vamu Mirchi",
              "name": " Vamu Mirchi"
            }
          ]
        },
        {
          name: " SWEETS (ANY FOUR)",
          items: [
            {
              "value": " Badam Halwa",
              "name": " Badam Halwa"
            },
            {
              "value": " Bombay Halva",
              "name": " Bombay Halva"
            },
            {
              "value": " Breed Halva",
              "name": " Breed Halva"
            },
            {
              "value": " Carrot Green Mixed Halwa",
              "name": " Carrot Green Mixed Halwa"
            },
            {
              "value": " Chekkara Pongal",
              "name": " Chekkara Pongal"
            },
            {
              "value": " Chitti Areslu With Nuvvlu",
              "name": " Chitti Areslu With Nuvvlu"
            },
            {
              "value": " Cream Gula",
              "name": " Cream Gula"
            },
            {
              "value": " Double Ka Meetha",
              "name": " Double Ka Meetha"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": " Dry Fruit cone",
              "name": " Dry Fruit cone"
            },
            {
              "value": " Gulkan Gelory",
              "name": " Gulkan Gelory"
            },
            {
              "value": " Jafrani Pineapple Kesari",
              "name": " Jafrani Pineapple Kesari"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Kaju Gulbahar",
              "name": " Kaju Gulbahar"
            },
            {
              "value": " Kiwi Cum",
              "name": " Kiwi Cum"
            },
            {
              "value": " Malai Kaja",
              "name": " Malai Kaja"
            },
            {
              "value": " Mixed Fruit Halwa",
              "name": " Mixed Fruit Halwa"
            },
            {
              "value": " Nethi Bobbattlu",
              "name": " Nethi Bobbattlu"
            },
            {
              "value": " alathalikalu",
              "name": " alathalikalu"
            },
            {
              "value": " Pancharatna Halva",
              "name": " Pancharatna Halva"
            },
            {
              "value": " Pippa",
              "name": " Pippa"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Poornam",
              "name": " Poornam"
            },
            {
              "value": " Qhubani Ka Meetha",
              "name": " Qhubani Ka Meetha"
            },
            {
              "value": " Rajbogh",
              "name": " Rajbogh"
            },
            {
              "value": " Semiya Saggubiyam Kesar Payasam",
              "name": " Semiya Saggubiyam Kesar Payasam"
            },
            {
              "value": " Shai Tukara",
              "name": " Shai Tukara"
            },
            {
              "value": " Dry Fruit Honey",
              "name": " Dry Fruit Honey"
            },
            {
              "value": " American Mal Puri",
              "name": " American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Basundi",
              "name": " Basundi"
            },
            {
              "value": " Gajrela",
              "name": " Gajrela"
            },
            {
              "value": " Gulabi Chat",
              "name": " Gulabi Chat"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": " Jeedlu",
              "name": " Jeedlu"
            },
            {
              "value": " KesarJalebi",
              "name": " KesarJalebi"
            },
            {
              "value": " Navrang Pan",
              "name": " Navrang Pan"
            },
            {
              "value": "Pineapple Jalebi",
              "name": "Pineapple Jalebi"
            },
            {
              "value": " Supai Rapsam",
              "name": " Supai Rapsam"
            },
            {
              "value": " Tawa Mix Sweet",
              "name": " Tawa Mix Sweet"
            }
          ]       
           
        },
        {
          name: " CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            },
            {
              "value": "Curd Rice",
              "name": "Curd Rice"
            }
          ]
        },
        {
          name: " ICE CREAMS (ANY FOUR)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": " Butter Scotch",
              "name": " Butter Scotch"
            },
            {
              "value": "Black Current",
              "name": "Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": " Caramel nuts",
              "name": " Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": "Kaju & Kismis",
              "name": "Kaju & Kismis"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Pista",
              "name": "Pista"
            },
            {
              "value": "Seetafal",
              "name": "Seetafal"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },
        {
          name: " DESSERTS (ANY THREE)",
          items: [
            {
              "value": "Blueberry Cheese Cake",
              "name": "Blueberry Cheese Cake"
            },
            {
              "value": "Black Forest Gateau",
              "name": "Black Forest Gateau"
            },
            {
              "value": " Mango Soufflé",
              "name": " Mango Soufflé"
            },
            {
              "value": "Chocolate Truffle",
              "name": "Chocolate Truffle"
            },
            {
              "value": " Chocolate Mousse",
              "name": " Chocolate Mousse"
            },
            {
              "value": " Kiwi Slice",
              "name": " Kiwi Slice"
            },
            {
              "value": "Tiramisu",
              "name": "Tiramisu"
            },
            {
              "value": "Chocolate Éclairs",
              "name": "Chocolate Éclairs"
            },
            {
              "value": " Lemon Chiffon Pie",
              "name": " Lemon Chiffon Pie"
            },
            {
              "value": "Chocolate Tarts",
              "name": "Chocolate Tarts"
            }
          ]
        },
        {
          name: " FRUITS INDIAN (ANY FIVE)",
          items: [
            {
              "value": " Grapes",
              "name": " Grapes"
            },
            {
              "value": " Musk Melon",
              "name": " Musk Melon"
            },
            {
              "value": " Mango",
              "name": " Mango"
            },
            {
              "value": " Orange",
              "name": " Orange"
            },
            {
              "value": " Papaya",
              "name": " Papaya"
            },
            {
              "value": " Sapota",
              "name": " Sapota"
            },
            {
              "value": " Water Melon",
              "name": " Water Melon"
            },
            {
              "value": " Australian Grapes",
              "name": " Australian Grapes"
            },
            {
              "value": " Chile Pears",
              "name": " Chile Pears"
            },
            {
              "value": " Fuji Apple",
              "name": " Fuji Apple"
            },
            {
              "value": " Kimiya Dates",
              "name": " Kimiya Dates"
            },
            {
              "value": " Kiwi",
              "name": " Kiwi"
            },
            {
              "value": " Litchi",
              "name": " Litchi"
            },
            {
              "value": " Strawberry",
              "name": " Strawberry"
            },
            {
              "value": " Sweet Tamrind",
              "name": " Sweet Tamrind"
            }
          ]
        },
        {
          name: " HOTS (ANY ONE)",
          items: [
            {
              "value": "Ajwan Pakodi",
              "name": "Ajwan Pakodi"
            },
            {
              "value": " Capsicum Bhajji",
              "name": " Capsicum Bhajji"
            },
            {
              "value": " Gaare with tomato chutney",
              "name": " Gaare with tomato chutney"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Madras Pakodi (Round)",
              "name": " Madras Pakodi (Round)"
            },
            {
              "value": " Mealmaker Keema Wada",
              "name": " Mealmaker Keema Wada"
            },
            {
              "value": " Mini Alsanda Wada",
              "name": " Mini Alsanda Wada"
            },
            {
              "value": " Mini Corn Samosa",
              "name": " Mini Corn Samosa"
            },
            {
              "value": " Mini Perugu Aawada",
              "name": " Mini Perugu Aawada"
            },
            {
              "value": " Nellore Chitti Gaare",
              "name": " Nellore Chitti Gaare"
            },
            {
              "value": " Paneer Wada",
              "name": " Paneer Wada"
            },
            {
              "value": " Pudina Masala Wada",
              "name": " Pudina Masala Wada"
            },
            {
              "value": " Shangai Roll",
              "name": " Shangai Roll"
            },
            {
              "value": " Vamu Mirchi Bajji",
              "name": " Vamu Mirchi Bajji"
            },
            {
              "value": " Veg Bullet",
              "name": " Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Veg. Lolly Pop",
              "name": " Veg. Lolly Pop"
            },
            {
              "value": " Veg. Roll",
              "name": " Veg. Roll"
            },
            {
              "value": " Cucumber 65",
              "name": " Cucumber 65"
            }
          ]
        },
        {
          name: "ROTIES (ANY THREE)",
          items: [
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            },
            {
              "value": " Achari Roti",
              "name": " Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Besan Ke Roti",
              "name": "Besan Ke Roti"
            },
            {
              "value": " Butter Naan",
              "name": " Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": " Cheese Kulcha",
              "name": " Cheese Kulcha"
            },
            {
              "value": " Jonna Roti",
              "name": " Jonna Roti"
            },
            {
              "value": " Kottimeera Parota",
              "name": " Kottimeera Parota"
            },
            {
              "value": " Laccha Parota",
              "name": " Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": " Masala Parota",
              "name": " Masala Parota"
            },
            {
              "value": " Palak Parota",
              "name": " Palak Parota"
            },
            {
              "value": " Pista Parota",
              "name": " Pista Parota"
            },
            {
              "value": " Plain Kulcha",
              "name": " Plain Kulcha"
            },
            {
              "value": "  Plain Naan",
              "name": "  Plain Naan"
            },
            {
              "value": " Plain Parota",
              "name": " Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": " Pulkha",
              "name": " Pulkha"
            }
          ]
        },
        {
          name: " SPECIAL RICES  - FLAVORED RICE - PULAO - BIRYANI’S - (ANY TWO)",
          items: [
            {
              "value": " Chintapandu Pulihora",
              "name": " Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": " Dabbakaya Pulihora",
              "name": " Dabbakaya Pulihora"
            },
            {
              "value": " Nimmakaya Pulihora",
              "name": " Nimmakaya Pulihora"
            },
            {
              "value": " Pudina Rice",
              "name": " Pudina Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Koemera Rice",
              "name": " Koemera Rice"
            },
            {
              "value": " Coconut Rice",
              "name": " Coconut Rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": "Corn Methi Pulao",
              "name": "Corn Methi Pulao"
            },
            {
              "value": "Veg Pulao",
              "name": "Veg Pulao"
            },
            {
              "value": "Kashmiri Pulao",
              "name": "Kashmiri Pulao"
            },
            {
              "value": "Fresh Green Peas Pulao",
              "name": "Fresh Green Peas Pulao"
            },
            {
              "value": "Veg SaffronPulao",
              "name": "Veg SaffronPulao"
            },
            {
              "value": " Bilal Mushroom Biryani with katta",
              "name": " Bilal Mushroom Biryani with katta"
            },
            {
              "value": " Bilal Panasakaya Biryani with Katta",
              "name": " Bilal Panasakaya Biryani with Katta"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": " Aloo Pudina Biryani",
              "name": " Aloo Pudina Biryani"
            },
            {
              "value": " Hyderabadi Ulavacharu dum Biryani",
              "name": " Hyderabadi Ulavacharu dum Biryani"
            },
            {
              "value": " Paneer & Baby corn Biryani",
              "name": " Paneer & Baby corn Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            }
          ]
        },
        {
          name: " PLAIN RICE ",
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: " KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "Butter Paneer Kurma",
              "name": "Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": " Methi Chaman",
              "name": " Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Tikka Masala",
              "name": " Paneer Tikka Masala"
            },
            {
              "value": " Paneer Moghlai Masala",
              "name": " Paneer Moghlai Masala"
            },
            {
              "value": "Paneer Sagwala",
              "name": "Paneer Sagwala"
            },
            {
              "value": " Palak Paneer",
              "name": " Palak Paneer"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": " PaneerButter Masala",
              "name": " PaneerButter Masala"
            },
            {
              "value": " Shahi Paneer Kurma",
              "name": " Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: " VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Kaju Kurma",
              "name": "Aloo Capsicum Kaju Kurma"
            },
            {
              "value": " Aloo Scoop Kurma",
              "name": " Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": " Mixed Veg Kurma",
              "name": " Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": " Nilgeri Kurma",
              "name": " Nilgeri Kurma"
            },
            {
              "value": " Pool Makkan Kurma",
              "name": " Pool Makkan Kurma"
            },
            {
              "value": " Thotakoora Cube Kurma",
              "name": " Thotakoora Cube Kurma"
            }
          ]
        },
        {
          name: "   SPECIALTY COUNTER ",
          items: [
            {
              "value": "KOMCHA CHAT ",
              "name": "KOMCHA CHAT "
            },
            {
              "value": "Aloo Mutter chat",
              "name": "Aloo Mutter chat"
            },
            {
              "value": "Aloo Tikki",
              "name": "Aloo Tikki"
            },
            {
              "value": " Angoori Dahi Balle",
              "name": " Angoori Dahi Balle"
            },
            {
              "value": " Baby corn Matter",
              "name": " Baby corn Matter"
            },
            {
              "value": " Bhel Puri",
              "name": " Bhel Puri"
            },
            {
              "value": " Daal Muradabadi",
              "name": " Daal Muradabadi"
            },
            {
              "value": " Dahi Puri",
              "name": " Dahi Puri"
            },
            {
              "value": " Dal Chilla",
              "name": " Dal Chilla"
            },
            {
              "value": " Fruit Chat",
              "name": " Fruit Chat"
            },
            {
              "value": " Gudia ke Baal",
              "name": " Gudia ke Baal"
            },
            {
              "value": " Kachori Chat",
              "name": " Kachori Chat"
            },
            {
              "value": " Kaniji Pakodi",
              "name": " Kaniji Pakodi"
            },
            {
              "value": " Mini Kachori",
              "name": " Mini Kachori"
            },
            {
              "value": " Pani Puri 3 type of water",
              "name": " Pani Puri 3 type of water"
            },
            {
              "value": " Raj Kachori",
              "name": " Raj Kachori"
            },
            {
              "value": " Samosa Chat",
              "name": " Samosa Chat"
            },
            {
              "value": " Shaker Kandi Chat",
              "name": " Shaker Kandi Chat"
            },
            {
              "value": " Tomato Kachori",
              "name": " Tomato Kachori"
            }
          ]
        },
        {
          name: " CHINESE (ANY FOUR)",
          items: [
            {
              "value": "Veg Soft Noodles",
              "name": "Veg Soft Noodles"
            },
            {
              "value": " Veg Hakka Noodles",
              "name": " Veg Hakka Noodles"
            },
            {
              "value": "American Chopsue",
              "name": "American Chopsue"
            },
            {
              "value": "Stir Fried Vegetables",
              "name": "Stir Fried Vegetables"
            },
            {
              "value": " Veg Tawa Sizzler",
              "name": " Veg Tawa Sizzler"
            },
            {
              "value": " Chinese Fried Rice",
              "name": " Chinese Fried Rice"
            },
            {
              "value": " Bambina rice",
              "name": " Bambina rice"
            },
            {
              "value": " Corn Cubes",
              "name": " Corn Cubes"
            },
            {
              "value": " Paneer Corn",
              "name": " Paneer Corn"
            }
          ]
        },
        {
          name: " DOSA (ANY FOUR)",
          items: [
            {
              "value": "Plain Dosa",
              "name": "Plain Dosa"
            },
            {
              "value": " Onion Dosa",
              "name": " Onion Dosa"
            },
            {
              "value": "Carrot Dosav",
              "name": "Carrot Dosav"
            },
            {
              "value": " Karam Dosa",
              "name": " Karam Dosa"
            },
            {
              "value": " Neyya Dosa",
              "name": " Neyya Dosa"
            },
            {
              "value": "Butter Dosa",
              "name": "Butter Dosa"
            },
            {
              "value": " Masala Dosa",
              "name": " Masala Dosa"
            },
            {
              "value": "Paneer Dosa",
              "name": "Paneer Dosa"
            },
            {
              "value": "Ragi Dosa",
              "name": "Ragi Dosa"
            },
            {
              "value": " Pesarrarttu with Upma",
              "name": " Pesarrarttu with Upma"
            }
          ]
        },
        {
          name: " PANS",
          items: [
            {
              "value": "Pan Sada",
              "name": "Pan Sada"
            },
            {
              "value": "Pan Sweet",
              "name": "Pan Sweet"
            },
            {
              "value": "Special Pan",
              "name": "Special Pan"
            }
          ]
        },
        {
          name: " MINERAL WATER",
          items: [
            {
              "value": "In Glasses",
              "name": "In Glasses"
            },
            {
              "value": "In 200 ml bottles @ Circulation extra cost.",
              "name": "In 200 ml bottles @ Circulation extra cost."
            }
          ]
        },
       
      ],
      nonVegCategories: [
        {
          name: " -- NON-VEG DIAMOND EXOTIC -- BEVERAGES (ANY THREE)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": "Sugar Cane (Min. Gathering)",
              "name": "Sugar Cane (Min. Gathering)"
            },
            {
              "value": "Coconut Delight",
              "name": "Coconut Delight"
            },
            {
              "value": "Fruit Punch",
              "name": "Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": "Litchi Punch",
              "name": "Litchi Punch"
            },
            {
              "value": "Grapes Pulpy kulfi",
              "name": "Grapes Pulpy kulfi"
            },
            {
              "value": "Orange Punch",
              "name": "Orange Punch"
            },
            {
              "value": "Irish Milkshake",
              "name": "Irish Milkshake"
            },
            {
              "value": "Thatimunjala Milkshake (Seasonal)",
              "name": "Thatimunjala Milkshake (Seasonal)"
            },
            {
              "value": "Peach Apricot Delight",
              "name": "Peach Apricot Delight"
            },
            {
              "value": " Sharjah",
              "name": " Sharjah"
            },
            {
              "value": " Chicoo Milk shakes",
              "name": " Chicoo Milk shakes"
            },
            {
              "value": "Panakam",
              "name": "Panakam"
            },
            {
              "value": " Cold Badam Milk",
              "name": " Cold Badam Milk"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            },
            {
              "value": " White Grapes (Sparkling)",
              "name": " White Grapes (Sparkling)"
            },
            {
              "value": " Red Grapes (Sparkling)",
              "name": " Red Grapes (Sparkling)"
            },
            {
              "value": " Peach (Sparkling)",
              "name": " Peach (Sparkling)"
            },
            {
              "value": " Peach & Mango (Sparkling)",
              "name": " Peach & Mango (Sparkling)"
            }
          ]
        },
        {
          name: " MOCKTAIL'S (ANY THREE)",
          items: [
            {
              "value": "Virgin Mojito",
              "name": "Virgin Mojito"
            },
            {
              "value": "Virgin Green Apple Martini",
              "name": "Virgin Green Apple Martini"
            },
            {
              "value": "Virgin Pink Lady",
              "name": "Virgin Pink Lady"
            },
            {
              "value": " Blue Angel",
              "name": " Blue Angel"
            },
            {
              "value": "Violet Fizz",
              "name": "Violet Fizz"
            },
            {
              "value": " Orange Surprise",
              "name": " Orange Surprise"
            },
            {
              "value": "Mexican Sunset",
              "name": "Mexican Sunset"
            },
            {
              "value": "Mint Chocolate",
              "name": "Mint Chocolate"
            },
            {
              "value": "Shirley Temple",
              "name": "Shirley Temple"
            }
          ]
        },
        {
          name: " WELCOME SWEETS (ANY THREE)",
          items: [
            {
              "value": "Choco Jewels",
              "name": "Choco Jewels"
            },
            {
              "value": "Anjeer Delight",
              "name": "Anjeer Delight"
            },
            {
              "value": "Pista Sandwich",
              "name": "Pista Sandwich"
            },
            {
              "value": "Kaju Basket",
              "name": "Kaju Basket"
            },
            {
              "value": "Fruit Choco's",
              "name": "Fruit Choco's"
            },
            {
              "value": "Fruit Tarts",
              "name": "Fruit Tarts"
            },
            {
              "value": "Dry Fruit Delight",
              "name": "Dry Fruit Delight"
            },
            {
              "value": "Anjeer Roll",
              "name": "Anjeer Roll"
            },
            {
              "value": "Orange Balls",
              "name": "Orange Balls"
            },
            {
              "value": "Kaju Pista",
              "name": "Kaju Pista"
            }
          ]
        },
        {
          name: " WELCOME SNACKS (ANY FIVE)",
          items: [
            {
              "value": "Canapes",
              "name": "Canapes"
            },
            {
              "value": " Cottage Cheese Balls",
              "name": " Cottage Cheese Balls"
            },
            {
              "value": " Cheese Potato Wedges Melt",
              "name": " Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": " Cocktail corn samosa",
              "name": " Cocktail corn samosa"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Fried Red Pepper Kaju",
              "name": " Fried Red Pepper Kaju"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " Red Masala Kaju",
              "name": " Red Masala Kaju"
            },
            {
              "value": " Shangai Rolls",
              "name": " Shangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            },
            {
              "value": "Mint chutney",
              "name": "Mint chutney"
            },
            {
              "value": "Hot garlic sauce",
              "name": "Hot garlic sauce"
            },
            {
              "value": "Garlic mayo",
              "name": "Garlic mayo"
            },
            {
              "value": "Tomato ketchup",
              "name": "Tomato ketchup"
            },
            {
              "value": "Cocktail Sauce",
              "name": "Cocktail Sauce"
            }
          ]
        },
        {
          name: " SALAD (ANY FIVE)",
          items: [
            {
              "value": "Garden Spring Green Salad",
              "name": "Garden Spring Green Salad"
            },
            {
              "value": "German Potato Salad",
              "name": "German Potato Salad"
            },
            {
              "value": " Corn Obrien",
              "name": " Corn Obrien"
            },
            {
              "value": " Sprouts",
              "name": " Sprouts"
            },
            {
              "value": " Tri Beans Salad with lemon chilly",
              "name": " Tri Beans Salad with lemon chilly"
            },
            {
              "value": " Green Apple Yoghurt Honey",
              "name": " Green Apple Yoghurt Honey"
            },
            {
              "value": "Cheese Cherry Pineapple Stick",
              "name": "Cheese Cherry Pineapple Stick"
            },
            {
              "value": "Cucumber Yoghurt Dill Salad",
              "name": "Cucumber Yoghurt Dill Salad"
            },
            {
              "value": "Italian Pasta with Cilantro",
              "name": "Italian Pasta with Cilantro"
            },
            {
              "value": "Pineapple Cheese Salad",
              "name": "Pineapple Cheese Salad"
            },
            {
              "value": " Aloo Chana chat",
              "name": " Aloo Chana chat"
            },
            {
              "value": " Russian Salad",
              "name": " Russian Salad"
            },
            {
              "value": " Coleslaw",
              "name": " Coleslaw"
            },
            {
              "value": " Waldorf Salad",
              "name": " Waldorf Salad"
            },
            {
              "value": " Caesar Salad",
              "name": " Caesar Salad"
            },
            {
              "value": "Kimchee Salad",
              "name": "Kimchee Salad"
            },
            {
              "value": "Thai Papaya Salad",
              "name": "Thai Papaya Salad"
            },
            {
              "value": " Broccoli, Cauliflower & American Corn Salad",
              "name": " Broccoli, Cauliflower & American Corn Salad"
            }
          ]
        },
        {
          name: " SOUPS (ANY TWO)",
          items: [
            {
              "value": " Cream of Mushroom Soup",
              "name": " Cream of Mushroom Soup"
            },
            {
              "value": " Cream of Tomato Soup",
              "name": " Cream of Tomato Soup"
            },
            {
              "value": "Lemon Coriander Soup",
              "name": "Lemon Coriander Soup"
            },
            {
              "value": "Minestrone Soup",
              "name": "Minestrone Soup"
            },
            {
              "value": "  Mulligatawny",
              "name": "  Mulligatawny"
            },
            {
              "value": " Potato leaks Soup",
              "name": " Potato leaks Soup"
            },
            {
              "value": "Pumpkin Soup",
              "name": "Pumpkin Soup"
            },
            {
              "value": " Sweet Corn Soup",
              "name": " Sweet Corn Soup"
            },
            {
              "value": "Tomato dhanya Shorba",
              "name": "Tomato dhanya Shorba"
            },
            {
              "value": " Veg. Hot & Sour Soup",
              "name": " Veg. Hot & Sour Soup"
            },
            {
              "value": "Veg. Manchow Soup",
              "name": "Veg. Manchow Soup"
            }
          ]
        },
        {
          name: " DAL (ANY TWO) ",
          items: [
            {
              "value": "Avakai Pappu",
              "name": "Avakai Pappu"
            },
            {
              "value": "Palakora Mamidikaya Pappu",
              "name": "Palakora Mamidikaya Pappu"
            },
            {
              "value": "Ooseri Kaya Pappu",
              "name": "Ooseri Kaya Pappu"
            },
            {
              "value": "Cucumber Dal",
              "name": "Cucumber Dal"
            },
            {
              "value": "Dal Makhani",
              "name": "Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": "Mango Dal",
              "name": "Mango Dal"
            },
            {
              "value": "Plain Dal + Dappadam",
              "name": "Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": "Dal Jaipuri",
              "name": "Dal Jaipuri"
            }
          ]
        },
        {
          name: " VEG FRIES(ANY THREE)",
          items: [
            {
              "value": "Thotakoora Liver Fry",
              "name": "Thotakoora Liver Fry"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Aloo Allam Pachi Mirchi Fry",
              "name": " Baby Aloo Allam Pachi Mirchi Fry"
            },
            {
              "value": " Baby Corn 65",
              "name": " Baby Corn 65"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": " Capsicum Sanaga Kaaram",
              "name": " Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Corn Liver Fry",
              "name": " Corn Liver Fry"
            },
            {
              "value": " Dam Aloo Kashmiri",
              "name": " Dam Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Kandi Liver Fry",
              "name": " Kandi Liver Fry"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Mushroom Hara Pyaz",
              "name": " Mushroom Hara Pyaz"
            },
            {
              "value": " Mushroom Ulavacharu Iguru",
              "name": " Mushroom Ulavacharu Iguru"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY TWO)",
          items: [
            {
              "value": " Baby corn, Cashew Full Nuts",
              "name": " Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": " Tomato, Drumstick",
              "name": " Tomato, Drumstick"
            }
          ]
        },
        {
          name: " STANDARD ITEMS (ANY FIVE)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": " Mysore Rasam",
              "name": " Mysore Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": " Mix Veg. Sambar",
              "name": " Mix Veg. Sambar"
            },
            {
              "value": " Madras Onion Sambar",
              "name": " Madras Onion Sambar"
            }
          ]
        },
        {
          name: " PICKLES (ANY THREE)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Dosakya Avakai",
              "name": "Dosakya Avakai"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": "Garlic Cashew Full nuts",
              "name": "Garlic Cashew Full nuts"
            },
            {
              "value": "Kotta Avakai",
              "name": "Kotta Avakai"
            },
            {
              "value": "Lemon",
              "name": "Lemon"
            },
            {
              "value": "Madras Onion",
              "name": "Madras Onion"
            },
            {
              "value": "Mixed Veg",
              "name": "Mixed Veg"
            },
            {
              "value": "Raw Papaya",
              "name": "Raw Papaya"
            }
          ]
        },
        {
          name: " POWDERS (ANY TWO)",
          items: [
            {
              "value": "Coconut Sanaga Kaaram",
              "name": "Coconut Sanaga Kaaram"
            },
            {
              "value": "Kandi",
              "name": "Kandi"
            },
            {
              "value": "Karivepaku",
              "name": "Karivepaku"
            },
            {
              "value": " Nalla Karam",
              "name": " Nalla Karam"
            },
            {
              "value": "Nuvvulu",
              "name": "Nuvvulu"
            }
          ]
        },
        {
          name: " GRINDED CHUTNIES (ANY THREE)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": " Brinjal, Tomato, Cucumber",
              "name": " Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Chukkakura Kandi Pachadi",
              "name": " Chukkakura Kandi Pachadi"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Cabbage",
              "name": " Cabbage"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": " Kandi Pachadi",
              "name": " Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": "  Pachi Tomato Chutney",
              "name": "  Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: " FRYUMS (ANY FOUR)",
          items: [
            {
              "value": "AppadamPoolu",
              "name": "AppadamPoolu"
            },
            {
              "value": " Minapa Vadiyalu",
              "name": " Minapa Vadiyalu"
            },
            {
              "value": " Voora Mirapakayalu",
              "name": " Voora Mirapakayalu"
            },
            {
              "value": " Saggubiyam Vadiyalu",
              "name": " Saggubiyam Vadiyalu"
            },
            {
              "value": " Vamu Mirchi",
              "name": " Vamu Mirchi"
            }
          ]
        },
        {
          name: " SWEETS (ANY FOUR)",
          items: [
            {
              "value": " Badam Halwa",
              "name": " Badam Halwa"
            },
            {
              "value": " Bombay Halva",
              "name": " Bombay Halva"
            },
            {
              "value": " Breed Halva",
              "name": " Breed Halva"
            },
            {
              "value": " Carrot Green Mixed Halwa",
              "name": " Carrot Green Mixed Halwa"
            },
            {
              "value": " Chekkara Pongal",
              "name": " Chekkara Pongal"
            },
            {
              "value": " Chitti Areslu With Nuvvlu",
              "name": " Chitti Areslu With Nuvvlu"
            },
            {
              "value": " Cream Gula",
              "name": " Cream Gula"
            },
            {
              "value": " Double Ka Meetha",
              "name": " Double Ka Meetha"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": " Dry Fruit cone",
              "name": " Dry Fruit cone"
            },
            {
              "value": " Gulkan Gelory",
              "name": " Gulkan Gelory"
            },
            {
              "value": " Jafrani Pineapple Kesari",
              "name": " Jafrani Pineapple Kesari"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Kaju Gulbahar",
              "name": " Kaju Gulbahar"
            },
            {
              "value": " Kiwi Cum",
              "name": " Kiwi Cum"
            },
            {
              "value": " Malai Kaja",
              "name": " Malai Kaja"
            },
            {
              "value": " Mixed Fruit Halwa",
              "name": " Mixed Fruit Halwa"
            },
            {
              "value": " Nethi Bobbattlu",
              "name": " Nethi Bobbattlu"
            },
            {
              "value": " alathalikalu",
              "name": " alathalikalu"
            },
            {
              "value": " Pancharatna Halva",
              "name": " Pancharatna Halva"
            },
            {
              "value": " Pippa",
              "name": " Pippa"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Poornam",
              "name": " Poornam"
            },
            {
              "value": " Qhubani Ka Meetha",
              "name": " Qhubani Ka Meetha"
            },
            {
              "value": " Rajbogh",
              "name": " Rajbogh"
            },
            {
              "value": " Semiya Saggubiyam Kesar Payasam",
              "name": " Semiya Saggubiyam Kesar Payasam"
            },
            {
              "value": " Shai Tukara",
              "name": " Shai Tukara"
            },
            {
              "value": " Dry Fruit Honey",
              "name": " Dry Fruit Honey"
            },
            {
              "value": " American Mal Puri",
              "name": " American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Basundi",
              "name": " Basundi"
            },
            {
              "value": " Gajrela",
              "name": " Gajrela"
            },
            {
              "value": " Gulabi Chat",
              "name": " Gulabi Chat"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": " Jeedlu",
              "name": " Jeedlu"
            },
            {
              "value": " KesarJalebi",
              "name": " KesarJalebi"
            },
            {
              "value": " Navrang Pan",
              "name": " Navrang Pan"
            },
            {
              "value": "Pineapple Jalebi",
              "name": "Pineapple Jalebi"
            },
            {
              "value": " Supai Rapsam",
              "name": " Supai Rapsam"
            },
            {
              "value": " Tawa Mix Sweet",
              "name": " Tawa Mix Sweet"
            }
          ]
        },
        {
          name: " CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            },
            {
              "value": "Curd Rice",
              "name": "Curd Rice"
            }
          ]
        },
        {
          name: " ICE CREAMS (ANY FOUR)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": " Butter Scotch",
              "name": " Butter Scotch"
            },
            {
              "value": "Black Current",
              "name": "Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": " Caramel nuts",
              "name": " Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": "Kaju & Kismis",
              "name": "Kaju & Kismis"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Pista",
              "name": "Pista"
            },
            {
              "value": "Seetafal",
              "name": "Seetafal"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },
        {
          name: " DESSERTS (ANY THREE)",
          items: [
            {
              "value": "Blueberry Cheese Cake",
              "name": "Blueberry Cheese Cake"
            },
            {
              "value": "Black Forest Gateau",
              "name": "Black Forest Gateau"
            },
            {
              "value": " Mango Soufflé",
              "name": " Mango Soufflé"
            },
            {
              "value": "Chocolate Truffle",
              "name": "Chocolate Truffle"
            },
            {
              "value": " Chocolate Mousse",
              "name": " Chocolate Mousse"
            },
            {
              "value": " Kiwi Slice",
              "name": " Kiwi Slice"
            },
            {
              "value": "Tiramisu",
              "name": "Tiramisu"
            },
            {
              "value": "Chocolate Éclairs",
              "name": "Chocolate Éclairs"
            },
            {
              "value": " Lemon Chiffon Pie",
              "name": " Lemon Chiffon Pie"
            },
            {
              "value": "Chocolate Tarts",
              "name": "Chocolate Tarts"
            }
          ]
        },
        {
          name: " FRUITS INDIAN (ANY FIVE)",
          items: [
            {
              "value": " Grapes",
              "name": " Grapes"
            },
            {
              "value": " Musk Melon",
              "name": " Musk Melon"
            },
            {
              "value": " Mango",
              "name": " Mango"
            },
            {
              "value": " Orange",
              "name": " Orange"
            },
            {
              "value": " Papaya",
              "name": " Papaya"
            },
            {
              "value": " Sapota",
              "name": " Sapota"
            },
            {
              "value": " Water Melon",
              "name": " Water Melon"
            },
            {
              "value": " Australian Grapes",
              "name": " Australian Grapes"
            },
            {
              "value": " Chile Pears",
              "name": " Chile Pears"
            },
            {
              "value": " Fuji Apple",
              "name": " Fuji Apple"
            },
            {
              "value": " Kimiya Dates",
              "name": " Kimiya Dates"
            },
            {
              "value": " Kiwi",
              "name": " Kiwi"
            },
            {
              "value": " Litchi",
              "name": " Litchi"
            },
            {
              "value": " Strawberry",
              "name": " Strawberry"
            },
            {
              "value": " Sweet Tamrind",
              "name": " Sweet Tamrind"
            }
          ]
        },
        {
          name: " HOTS (ANY ONE)",
          items: [
            {
              "value": "Ajwan Pakodi",
              "name": "Ajwan Pakodi"
            },
            {
              "value": " Capsicum Bhajji",
              "name": " Capsicum Bhajji"
            },
            {
              "value": " Gaare with tomato chutney",
              "name": " Gaare with tomato chutney"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Madras Pakodi (Round)",
              "name": " Madras Pakodi (Round)"
            },
            {
              "value": " Mealmaker Keema Wada",
              "name": " Mealmaker Keema Wada"
            },
            {
              "value": " Mini Alsanda Wada",
              "name": " Mini Alsanda Wada"
            },
            {
              "value": " Mini Corn Samosa",
              "name": " Mini Corn Samosa"
            },
            {
              "value": " Mini Perugu Aawada",
              "name": " Mini Perugu Aawada"
            },
            {
              "value": " Nellore Chitti Gaare",
              "name": " Nellore Chitti Gaare"
            },
            {
              "value": " Paneer Wada",
              "name": " Paneer Wada"
            },
            {
              "value": " Pudina Masala Wada",
              "name": " Pudina Masala Wada"
            },
            {
              "value": " Shangai Roll",
              "name": " Shangai Roll"
            },
            {
              "value": " Vamu Mirchi Bajji",
              "name": " Vamu Mirchi Bajji"
            },
            {
              "value": " Veg Bullet",
              "name": " Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Veg. Lolly Pop",
              "name": " Veg. Lolly Pop"
            },
            {
              "value": " Veg. Roll",
              "name": " Veg. Roll"
            },
            {
              "value": " Cucumber 65",
              "name": " Cucumber 65"
            }
          ]
        },
        {
          name: "ROTIES (ANY THREE)",
          items: [
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            },
            {
              "value": " Achari Roti",
              "name": " Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Besan Ke Roti",
              "name": "Besan Ke Roti"
            },
            {
              "value": " Butter Naan",
              "name": " Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": " Cheese Kulcha",
              "name": " Cheese Kulcha"
            },
            {
              "value": " Jonna Roti",
              "name": " Jonna Roti"
            },
            {
              "value": " Kottimeera Parota",
              "name": " Kottimeera Parota"
            },
            {
              "value": " Laccha Parota",
              "name": " Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": " Masala Parota",
              "name": " Masala Parota"
            },
            {
              "value": " Palak Parota",
              "name": " Palak Parota"
            },
            {
              "value": " Pista Parota",
              "name": " Pista Parota"
            },
            {
              "value": " Plain Kulcha",
              "name": " Plain Kulcha"
            },
            {
              "value": "  Plain Naan",
              "name": "  Plain Naan"
            },
            {
              "value": " Plain Parota",
              "name": " Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": " Pulkha",
              "name": " Pulkha"
            }
          ]
        },
        {
          name: " SPECIAL RICES - FLAVORED RICE - PULAO - BIRYANI’S - (ANY TWO)",
          items: [
            {
              "value": " Chintapandu Pulihora",
              "name": " Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": " Dabbakaya Pulihora",
              "name": " Dabbakaya Pulihora"
            },
            {
              "value": " Nimmakaya Pulihora",
              "name": " Nimmakaya Pulihora"
            },
            {
              "value": " Pudina Rice",
              "name": " Pudina Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Koemera Rice",
              "name": " Koemera Rice"
            },
            {
              "value": " Coconut Rice",
              "name": " Coconut Rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": "Corn Methi Pulao",
              "name": "Corn Methi Pulao"
            },
            {
              "value": "Veg Pulao",
              "name": "Veg Pulao"
            },
            {
              "value": "Kashmiri Pulao",
              "name": "Kashmiri Pulao"
            },
            {
              "value": "Fresh Green Peas Pulao",
              "name": "Fresh Green Peas Pulao"
            },
            {
              "value": "Veg SaffronPulao",
              "name": "Veg SaffronPulao"
            },
            {
              "value": " Bilal Mushroom Biryani with katta",
              "name": " Bilal Mushroom Biryani with katta"
            },
            {
              "value": " Bilal Panasakaya Biryani with Katta",
              "name": " Bilal Panasakaya Biryani with Katta"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": " Aloo Pudina Biryani",
              "name": " Aloo Pudina Biryani"
            },
            {
              "value": " Hyderabadi Ulavacharu dum Biryani",
              "name": " Hyderabadi Ulavacharu dum Biryani"
            },
            {
              "value": " Paneer & Baby corn Biryani",
              "name": " Paneer & Baby corn Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            }
          ]
        },
        {
          name: " PLAIN RICE ",
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: " KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "Butter Paneer Kurma",
              "name": "Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": " Methi Chaman",
              "name": " Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Tikka Masala",
              "name": " Paneer Tikka Masala"
            },
            {
              "value": " Paneer Moghlai Masala",
              "name": " Paneer Moghlai Masala"
            },
            {
              "value": "Paneer Sagwala",
              "name": "Paneer Sagwala"
            },
            {
              "value": " Palak Paneer",
              "name": " Palak Paneer"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": " PaneerButter Masala",
              "name": " PaneerButter Masala"
            },
            {
              "value": " Shahi Paneer Kurma",
              "name": " Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: " VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Kaju Kurma",
              "name": "Aloo Capsicum Kaju Kurma"
            },
            {
              "value": " Aloo Scoop Kurma",
              "name": " Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": " Mixed Veg Kurma",
              "name": " Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": " Nilgeri Kurma",
              "name": " Nilgeri Kurma"
            },
            {
              "value": " Pool Makkan Kurma",
              "name": " Pool Makkan Kurma"
            },
            {
              "value": " Thotakoora Cube Kurma",
              "name": " Thotakoora Cube Kurma"
            }
          ]
        },
        {
          name: "   SPECIALTY COUNTER ",
          items: [
            {
              "value": "KOMCHA CHAT (ANY FOUR)",
              "name": "KOMCHA CHAT (ANY FOUR)"
            },
            {
              "value": "Aloo Mutter chat",
              "name": "Aloo Mutter chat"
            },
            {
              "value": "Aloo Tikki",
              "name": "Aloo Tikki"
            },
            {
              "value": " Angoori Dahi Balle",
              "name": " Angoori Dahi Balle"
            },
            {
              "value": " Baby corn Matter",
              "name": " Baby corn Matter"
            },
            {
              "value": " Bhel Puri",
              "name": " Bhel Puri"
            },
            {
              "value": " Daal Muradabadi",
              "name": " Daal Muradabadi"
            },
            {
              "value": " Dahi Puri",
              "name": " Dahi Puri"
            },
            {
              "value": " Dal Chilla",
              "name": " Dal Chilla"
            },
            {
              "value": " Fruit Chat",
              "name": " Fruit Chat"
            },
            {
              "value": " Gudia ke Baal",
              "name": " Gudia ke Baal"
            },
            {
              "value": " Kachori Chat",
              "name": " Kachori Chat"
            },
            {
              "value": " Kaniji Pakodi",
              "name": " Kaniji Pakodi"
            },
            {
              "value": " Mini Kachori",
              "name": " Mini Kachori"
            },
            {
              "value": " Pani Puri 3 type of water",
              "name": " Pani Puri 3 type of water"
            },
            {
              "value": " Raj Kachori",
              "name": " Raj Kachori"
            },
            {
              "value": " Samosa Chat",
              "name": " Samosa Chat"
            },
            {
              "value": " Shaker Kandi Chat",
              "name": " Shaker Kandi Chat"
            },
            {
              "value": " Tomato Kachori",
              "name": " Tomato Kachori"
            }
          ]
        },
        {
          name: " CHINESE (ANY FOUR)",
          items: [
            {
              "value": "Veg Soft Noodles",
              "name": "Veg Soft Noodles"
            },
            {
              "value": " Veg Hakka Noodles",
              "name": " Veg Hakka Noodles"
            },
            {
              "value": "American Chopsue",
              "name": "American Chopsue"
            },
            {
              "value": "Stir Fried Vegetables",
              "name": "Stir Fried Vegetables"
            },
            {
              "value": " Veg Tawa Sizzler",
              "name": " Veg Tawa Sizzler"
            },
            {
              "value": " Chinese Fried Rice",
              "name": " Chinese Fried Rice"
            },
            {
              "value": " Bambina rice",
              "name": " Bambina rice"
            },
            {
              "value": " Corn Cubes",
              "name": " Corn Cubes"
            },
            {
              "value": " Paneer Corn",
              "name": " Paneer Corn"
            }
          ]
        },
        {
          name: " DOSA (ANY FOUR)",
          items: [
            {
              "value": "Plain Dosa",
              "name": "Plain Dosa"
            },
            {
              "value": " Onion Dosa",
              "name": " Onion Dosa"
            },
            {
              "value": "Carrot Dosav",
              "name": "Carrot Dosav"
            },
            {
              "value": " Karam Dosa",
              "name": " Karam Dosa"
            },
            {
              "value": " Neyya Dosa",
              "name": " Neyya Dosa"
            },
            {
              "value": "Butter Dosa",
              "name": "Butter Dosa"
            },
            {
              "value": " Masala Dosa",
              "name": " Masala Dosa"
            },
            {
              "value": "Paneer Dosa",
              "name": "Paneer Dosa"
            },
            {
              "value": "Ragi Dosa",
              "name": "Ragi Dosa"
            },
            {
              "value": " Pesarrarttu with Upma",
              "name": " Pesarrarttu with Upma"
            }
          ]
        },
        {
          name: " NON-VEG MAIN COURSE - CHICKEN (ANY ONE) - MUTTON (ANY ONE) - SEA FOOD -BIRYANI’S (ANY TWO) ",
          items: [
            {
              "value": "Andhra Chicken Curry",
              "name": "Andhra Chicken Curry"
            },
            {
              "value": "Chicken Fry",
              "name": "Chicken Fry"
            },
            {
              "value": "Butter Chicken Curry",
              "name": "Butter Chicken Curry"
            },
            {
              "value": "Dum ka Chicken",
              "name": "Dum ka Chicken"
            },
            {
              "value": "Boneless Chicken Curry",
              "name": "Boneless Chicken Curry"
            },
            {
              "value": "Kadai Chicken",
              "name": "Kadai Chicken"
            },
            {
              "value": "Mogali Chicken Curry",
              "name": "Mogali Chicken Curry"
            },
            {
              "value": "Chicken Iguru",
              "name": "Chicken Iguru"
            },
            {
              "value": "Natukodi Pulusu",
              "name": "Natukodi Pulusu"
            },
            {
              "value": "Natukodi Iguru",
              "name": "Natukodi Iguru"
            },
            {
              "value": "Chicken Chintachiguru",
              "name": "Chicken Chintachiguru"
            },
            {
              "value": "Ginger Chicken Masala",
              "name": "Ginger Chicken Masala"
            },
            {
              "value": " Chicken Do Pyaza",
              "name": " Chicken Do Pyaza"
            },
            {
              "value": "Spicy Chicken Kurma",
              "name": "Spicy Chicken Kurma"
            },
            {
              "value": " Chicken Sagwala curry",
              "name": " Chicken Sagwala curry"
            },
            {
              "value": " Chicken Liver Fry",
              "name": " Chicken Liver Fry"
            },
            {
              "value": " Palak Chicken Curry",
              "name": " Palak Chicken Curry"
            },
            {
              "value": " Chicken Mirayala Vepudu",
              "name": " Chicken Mirayala Vepudu"
            },
            {
              "value": " Arakodi Fry",
              "name": " Arakodi Fry"
            },
            {
              "value": " Mutton Curry",
              "name": " Mutton Curry"
            },
            {
              "value": " Mutton Gongura",
              "name": " Mutton Gongura"
            },
            {
              "value": " Mutton Chintachiguru",
              "name": " Mutton Chintachiguru"
            },
            {
              "value": " Mutton Dosakaya",
              "name": " Mutton Dosakaya"
            },
            {
              "value": " Mutton Mulakaya",
              "name": " Mutton Mulakaya"
            },
            {
              "value": "Mutton Mango",
              "name": "Mutton Mango"
            },
            {
              "value": " Mutton Iguru",
              "name": " Mutton Iguru"
            },
            {
              "value": " Mutton Spicy Kurma",
              "name": " Mutton Spicy Kurma"
            },
            {
              "value": " Dum Ka Mutton",
              "name": " Dum Ka Mutton"
            },
            {
              "value": " Achari Mutton",
              "name": " Achari Mutton"
            },
            {
              "value": " Mutton Rogan Josh",
              "name": " Mutton Rogan Josh"
            },
            {
              "value": "Palak Mutton",
              "name": "Palak Mutton"
            },
            {
              "value": " Mutton Chops Masala",
              "name": " Mutton Chops Masala"
            },
            {
              "value": " Mutton Keema on tawa",
              "name": " Mutton Keema on tawa"
            },
            {
              "value": " Mutton Shahi Kurma",
              "name": " Mutton Shahi Kurma"
            },
            {
              "value": " Mutton Liver Fry",
              "name": " Mutton Liver Fry"
            },
            {
              "value": " Koramenu Chapala Pulusu",
              "name": " Koramenu Chapala Pulusu"
            },
            {
              "value": "Nellore Chapala Pulusu",
              "name": "Nellore Chapala Pulusu"
            },
            {
              "value": " Mango Chapala Pulusu",
              "name": " Mango Chapala Pulusu"
            },
            {
              "value": " Bommidyala Pulusu",
              "name": " Bommidyala Pulusu"
            },
            {
              "value": " Bommidyala Iguru",
              "name": " Bommidyala Iguru"
            },
            {
              "value": " Koramenu Iguru",
              "name": " Koramenu Iguru"
            },
            {
              "value": " Koramenu Fry ( with bone) on tawa",
              "name": " Koramenu Fry ( with bone) on tawa"
            },
            {
              "value": " Sorachapa Porutu",
              "name": " Sorachapa Porutu"
            },
            {
              "value": " Pandugappa Fry",
              "name": " Pandugappa Fry"
            },
            {
              "value": " Prawns Kobbari Iguru",
              "name": " Prawns Kobbari Iguru"
            },
            {
              "value": "Prawns Curry",
              "name": "Prawns Curry"
            },
            {
              "value": "Prawns Fry",
              "name": "Prawns Fry"
            },
            {
              "value": " Chintachiguru Prawns",
              "name": " Chintachiguru Prawns"
            },
            {
              "value": " Peethala Iguru",
              "name": " Peethala Iguru"
            },
            {
              "value": " Peethala Pulusu",
              "name": " Peethala Pulusu"
            },
            {
              "value": "  Stuffed Crab Iguru",
              "name": "  Stuffed Crab Iguru"
            },
            {
              "value": " Dosakaya Nethhalau",
              "name": " Dosakaya Nethhalau"
            },
            {
              "value": "Bilal Mutton Biryani",
              "name": "Bilal Mutton Biryani"
            },
            {
              "value": "   Hyderabadi Mugalai Mutton Biryani",
              "name": "   Hyderabadi Mugalai Mutton Biryani"
            },
            {
              "value": "Hyderabadi Chicken Dum Biryani",
              "name": "Hyderabadi Chicken Dum Biryani"
            },
            {
              "value": "  Vijawada Style Chicken Biryani",
              "name": "  Vijawada Style Chicken Biryani"
            },
            {
              "value": " Bilal Prawn Biryani",
              "name": " Bilal Prawn Biryani"
            },
            {
              "value": "Andhra Fish Biryani",
              "name": "Andhra Fish Biryani"
            },
            {
              "value": " Chicken Ulavacharu Dum Biryani",
              "name": " Chicken Ulavacharu Dum Biryani"
            },
            {
              "value": " Chettinadu Chicken Dum Biryani",
              "name": " Chettinadu Chicken Dum Biryani"
            },
            {
              "value": "  Chettinadu Mutton Dum Biryani",
              "name": "  Chettinadu Mutton Dum Biryani"
            },
            {
              "value": " Chicken Fry Piece Biryani",
              "name": " Chicken Fry Piece Biryani"
            }
          ]
        },
        {
          name: " Non-Veg Snacks - CHICKEN - SEA FOOD(ANY TWO) -  MUTTON (ANY ONE) -",
          items: [
            {
              "value": "Pepper Chicken",
              "name": "Pepper Chicken"
            },
            {
              "value": " Chicken Pakodi",
              "name": " Chicken Pakodi"
            },
            {
              "value": "Chilli Chicken",
              "name": "Chilli Chicken"
            },
            {
              "value": " Chicken Majestic",
              "name": " Chicken Majestic"
            },
            {
              "value": " Chicken 65",
              "name": " Chicken 65"
            },
            {
              "value": " Chicken Sate",
              "name": " Chicken Sate"
            },
            {
              "value": "  Chicken Afghani",
              "name": "  Chicken Afghani"
            },
            {
              "value": " Fried Chicken",
              "name": " Fried Chicken"
            },
            {
              "value": "  Chicken Drumsticks",
              "name": "  Chicken Drumsticks"
            },
            {
              "value": "  Chicken Lollypops",
              "name": "  Chicken Lollypops"
            },
            {
              "value": " Lemon Chicken",
              "name": " Lemon Chicken"
            },
            {
              "value": " Chicken Manchurian",
              "name": " Chicken Manchurian"
            },
            {
              "value": "Reshmi Chicken",
              "name": "Reshmi Chicken"
            },
            {
              "value": " Chicken Harialyali Tikka",
              "name": " Chicken Harialyali Tikka"
            },
            {
              "value": "  Chicken Mogali",
              "name": "  Chicken Mogali"
            },
            {
              "value": " Chicken Malai Tikka",
              "name": " Chicken Malai Tikka"
            },
            {
              "value": "Bar-be-que Chicken",
              "name": "Bar-be-que Chicken"
            },
            {
              "value": " Chicken Springli",
              "name": " Chicken Springli"
            },
            {
              "value": " Chicken Tandoori Kabab",
              "name": " Chicken Tandoori Kabab"
            },
            {
              "value": " Ginger Chicken",
              "name": " Ginger Chicken"
            },
            {
              "value": " Drums of Heaven",
              "name": " Drums of Heaven"
            },
            {
              "value": " Achari Murg Tikka",
              "name": " Achari Murg Tikka"
            },
            {
              "value": " Murg Gulafi Tikka",
              "name": " Murg Gulafi Tikka"
            },
            {
              "value": " Chicken Shashlik",
              "name": " Chicken Shashlik"
            },
            {
              "value": " Chicken Small Fingers",
              "name": " Chicken Small Fingers"
            },
            {
              "value": " Spicy Chicken",
              "name": " Spicy Chicken"
            },
            {
              "value": " Amritsari Chicken",
              "name": " Amritsari Chicken"
            },
            {
              "value": " Chicken Wings",
              "name": " Chicken Wings"
            },
            {
              "value": " Grilled Chicken",
              "name": " Grilled Chicken"
            },
            {
              "value": " Fried Corn Chicken",
              "name": " Fried Corn Chicken"
            },
            {
              "value": " Mutton Sheek Kabab",
              "name": " Mutton Sheek Kabab"
            },
            {
              "value": " Mutton Keema Balls",
              "name": " Mutton Keema Balls"
            },
            {
              "value": " Pattar ka Gosh",
              "name": " Pattar ka Gosh"
            },
            {
              "value": " Mutton Boti Kabab",
              "name": " Mutton Boti Kabab"
            },
            {
              "value": " Mutton Shami Kabab",
              "name": " Mutton Shami Kabab"
            },
            {
              "value": " Zingara Mutton Sheek",
              "name": " Zingara Mutton Sheek"
            },
            {
              "value": " Mutton Chops",
              "name": " Mutton Chops"
            },
            {
              "value": " Pepper Mutton",
              "name": " Pepper Mutton"
            },
            {
              "value": "  Spicy Fish Fry",
              "name": "  Spicy Fish Fry"
            },
            {
              "value": " Apollo Fish",
              "name": " Apollo Fish"
            },
            {
              "value": " Fired Fish",
              "name": " Fired Fish"
            },
            {
              "value": " Fish Fingers",
              "name": " Fish Fingers"
            },
            {
              "value": " Pepper Fish",
              "name": " Pepper Fish"
            },
            {
              "value": " Fish Bullets",
              "name": " Fish Bullets"
            },
            {
              "value": " Fish Lal Mirchi Tikka",
              "name": " Fish Lal Mirchi Tikka"
            },
            {
              "value": " Fish Amritsari Tikka",
              "name": " Fish Amritsari Tikka"
            },
            {
              "value": " Tawa Fish",
              "name": " Tawa Fish"
            },
            {
              "value": " Lady Fish Fingers",
              "name": " Lady Fish Fingers"
            },
            {
              "value": "  Fish Pomfret",
              "name": "  Fish Pomfret"
            },
            {
              "value": " Crispy Chilli Fish",
              "name": " Crispy Chilli Fish"
            },
            {
              "value": " Golden Fired Prawns",
              "name": " Golden Fired Prawns"
            },
            {
              "value": " Chilli Garlic Prawns",
              "name": " Chilli Garlic Prawns"
            },
            {
              "value": " Grilled Prawns",
              "name": " Grilled Prawns"
            },
            {
              "value": " Loose Prawns",
              "name": " Loose Prawns"
            },
            {
              "value": " Stuffed Crab",
              "name": " Stuffed Crab"
            },
            {
              "value": " Crab Keema Balls",
              "name": " Crab Keema Balls"
            }
          ]
          
        },
        {
          name: " PANS",
          items: [
            {
              "value": "Pan Sada",
              "name": "Pan Sada"
            },
            {
              "value": "Pan Sweet",
              "name": "Pan Sweet"
            },
            {
              "value": "Special Pan",
              "name": "Special Pan"
            }
          ]
        },
        {
          name: " MINERAL WATER",
          items: [
            {
              "value": "In Glasses",
              "name": "In Glasses"
            },
            {
              "value": "In 200 ml bottles @ Circulation extra cost.",
              "name": "In 200 ml bottles @ Circulation extra cost."
            }
          ]
        },
      ]
    },
    {
      name: "Gold",
      categories: [
        {
          name: " -- VEG GOLD -- BEVERAGES (ANY TWO)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": "Sugar Cane (Min. Gathering)",
              "name": "Sugar Cane (Min. Gathering)"
            },
            {
              "value": "Coconut Delight",
              "name": "Coconut Delight"
            },
            {
              "value": "Fruit Punch",
              "name": "Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": "Litchi Punch",
              "name": "Litchi Punch"
            },
            {
              "value": "Grapes Pulpy kulfi",
              "name": "Grapes Pulpy kulfi"
            },
            {
              "value": "Orange Punch",
              "name": "Orange Punch"
            },
            {
              "value": "Irish Milkshake",
              "name": "Irish Milkshake"
            },
            {
              "value": "Thatimunjala Milkshake (Seasonal)",
              "name": "Thatimunjala Milkshake (Seasonal)"
            },
            {
              "value": "Peach Apricot Delight",
              "name": "Peach Apricot Delight"
            },
            {
              "value": " Sharjah",
              "name": " Sharjah"
            },
            {
              "value": " Chicoo Milk shakes",
              "name": " Chicoo Milk shakes"
            },
            {
              "value": "Panakam",
              "name": "Panakam"
            },
            {
              "value": "Cold Badam Milk",
              "name": "Cold Badam Milk"
            },
            {
              "value": " Hot Badam Milk",
              "name": " Hot Badam Milk"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            }
          ]
        },
        {
          name: " WELCOME SWEETS (ANY TWO)",
          items: [
            {
              "value": "Choco Jewels",
              "name": "Choco Jewels"
            },
            {
              "value": " Anjeer Delight",
              "name": " Anjeer Delight"
            },
            {
              "value": " Pista Sandwich",
              "name": " Pista Sandwich"
            },
            {
              "value": " Kaju Basket",
              "name": " Kaju Basket"
            },
            {
              "value": " Fruit Choco's",
              "name": " Fruit Choco's"
            },
            {
              "value": " Fruit Tarts",
              "name": " Fruit Tarts"
            },
            {
              "value": " Dry Fruit Delight",
              "name": " Dry Fruit Delight"
            },
            {
              "value": " Anjeer Roll",
              "name": " Anjeer Roll"
            },
            {
              "value": " Orange Balls",
              "name": " Orange Balls"
            },
            {
              "value": " Kaju Pista",
              "name": " Kaju Pista"
            },
            {
              "value": " Breed Halva",
              "name": " Breed Halva"
            },
            {
              "value": " Carrot Green Mixed Halwa",
              "name": " Carrot Green Mixed Halwa"
            },
            {
              "value": " Chekkara Pongal",
              "name": " Chekkara Pongal"
            },
            {
              "value": " Chitti Areslu With Nuvvlu",
              "name": " Chitti Areslu With Nuvvlu"
            },
            {
              "value": " Double Ka Meetha",
              "name": " Double Ka Meetha"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": " Dry Fruit cone",
              "name": " Dry Fruit cone"
            },
            {
              "value": " Gulkan Gelory",
              "name": " Gulkan Gelory"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Kaju Gulbahar",
              "name": " Kaju Gulbahar"
            },
            {
              "value": " Litchi Wine",
              "name": " Litchi Wine"
            },
            {
              "value": " Malai Kaja",
              "name": " Malai Kaja"
            },
            {
              "value": " Mixed Fruit Halwa",
              "name": " Mixed Fruit Halwa"
            },
            {
              "value": " Nethi Bobbattlu",
              "name": " Nethi Bobbattlu"
            },
            {
              "value": " Pancharatna Halva",
              "name": " Pancharatna Halva"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Poornam",
              "name": " Poornam"
            },
            {
              "value": " Qhubani Ka Meetha",
              "name": " Qhubani Ka Meetha"
            },
            {
              "value": " Semiya Saggubiyam Kesar Payasam",
              "name": " Semiya Saggubiyam Kesar Payasam"
            },
            {
              "value": " Shai Tukara",
              "name": " Shai Tukara"
            },
            {
              "value": "American Mal Puri",
              "name": "American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Basundi",
              "name": " Basundi"
            },
            {
              "value": "Gajrela",
              "name": "Gajrela"
            },
            {
              "value": " Gulabi Chat",
              "name": " Gulabi Chat"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": " Jeedlu",
              "name": " Jeedlu"
            },
            {
              "value": "KesarJalebi",
              "name": "KesarJalebi"
            },
            {
              "value": " Navrang Pan",
              "name": " Navrang Pan"
            },
            {
              "value": " Pineapple Jalebi",
              "name": " Pineapple Jalebi"
            },
            {
              "value": " Supai Rapsam",
              "name": " Supai Rapsam"
            },
            {
              "value": "Tawa Mix Sweet",
              "name": "Tawa Mix Sweet"
            }
          ]
        },
        {
          name: " WELCOME SNACKS (ANY TWO)",
          items: [
            {
              "value": " Cottage Cheese Balls",
              "name": " Cottage Cheese Balls"
            },
            {
              "value": " Cheese Potato Wedges Melt",
              "name": " Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": " Cocktail corn samosa",
              "name": " Cocktail corn samosa"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Fried Red Pepper Kaju",
              "name": " Fried Red Pepper Kaju"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " Red Masala Kaju",
              "name": " Red Masala Kaju"
            },
            {
              "value": " Shangai Rolls",
              "name": " Shangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            },
            {
              "value": "Mint chutney",
              "name": "Mint chutney"
            },
            {
              "value": "Hot garlic sauce",
              "name": "Hot garlic sauce"
            },
            {
              "value": "Garlic mayo",
              "name": "Garlic mayo"
            },
            {
              "value": "Tomato ketchup",
              "name": "Tomato ketchup"
            },
            {
              "value": "Cocktail Sauce",
              "name": "Cocktail Sauce"
            }
          ]
        },
        {
          name: " SALAD (ANY THREE)",
          items: [
            {
              "value": "Garden Spring Green Salad",
              "name": "Garden Spring Green Salad"
            },
            {
              "value": "German Potato Salad",
              "name": "German Potato Salad"
            },
            {
              "value": " Sprouts",
              "name": " Sprouts"
            },
            {
              "value": "Tri Beans Salad with lemon chilly",
              "name": "Tri Beans Salad with lemon chilly"
            },
            {
              "value": "Green Apple Yoghurt Honey",
              "name": "Green Apple Yoghurt Honey"
            },
            {
              "value": "Cucumber Yoghurt Dill Salad",
              "name": "Cucumber Yoghurt Dill Salad"
            },
            {
              "value": "Italian Pasta with Cilantro",
              "name": "Italian Pasta with Cilantro"
            },
            {
              "value": "Pineapple Cheese Salad",
              "name": "Pineapple Cheese Salad"
            },
            {
              "value": "Aloo Chana chat",
              "name": "Aloo Chana chat"
            },
            {
              "value": "Russian Salad",
              "name": "Russian Salad"
            },
            {
              "value": "Coleslaw",
              "name": "Coleslaw"
            },
            {
              "value": "Waldorf Salad",
              "name": "Waldorf Salad"
            },
            {
              "value": "Caesar Salad",
              "name": "Caesar Salad"
            }
          ]
        },
        {
          name: " SOUPS (ANY ONE)",
          items: [
            {
              "value": " Cream of Mushroom Soup",
              "name": " Cream of Mushroom Soup"
            },
            {
              "value": " Cream of Tomato Soup",
              "name": " Cream of Tomato Soup"
            },
            {
              "value": "Lemon Coriander Soup",
              "name": "Lemon Coriander Soup"
            },
            {
              "value": "Minestrone Soup",
              "name": "Minestrone Soup"
            },
            {
              "value": "  Mulligatawny",
              "name": "  Mulligatawny"
            },
            {
              "value": " Potato leaks Soup",
              "name": " Potato leaks Soup"
            },
            {
              "value": "Pumpkin Soup",
              "name": "Pumpkin Soup"
            },
            {
              "value": " Sweet Corn Soup",
              "name": " Sweet Corn Soup"
            },
            {
              "value": "Tomato dhanya Shorba",
              "name": "Tomato dhanya Shorba"
            },
            {
              "value": " Veg. Hot & Sour Soup",
              "name": " Veg. Hot & Sour Soup"
            },
            {
              "value": "Veg. Manchow Soup",
              "name": "Veg. Manchow Soup"
            }
          ]
        },
        {
          name: " DAL (ANY TWO) ",
          items: [
            {
              "value": "Avakai Pappu",
              "name": "Avakai Pappu"
            },
            {
              "value": "Palakora Mamidikaya Pappu",
              "name": "Palakora Mamidikaya Pappu"
            },
            {
              "value": "Ooseri Kaya Pappu",
              "name": "Ooseri Kaya Pappu"
            },
            {
              "value": "Cucumber Dal",
              "name": "Cucumber Dal"
            },
            {
              "value": "Dal Makhani",
              "name": "Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": "Mango Dal",
              "name": "Mango Dal"
            },
            {
              "value": "Plain Dal + Dappadam",
              "name": "Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": "Dal Jaipuri",
              "name": "Dal Jaipuri"
            }
          ]
        },
        {
          name: " VEG FRIES(ANY THREE)",
          items: [
            {
              "value": "Thotakoora Liver Fry",
              "name": "Thotakoora Liver Fry"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Aloo Allam Pachi Mirchi Fry",
              "name": " Baby Aloo Allam Pachi Mirchi Fry"
            },
            {
              "value": " Baby Corn 65",
              "name": " Baby Corn 65"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": " Capsicum Sanaga Kaaram",
              "name": " Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Corn Liver Fry",
              "name": " Corn Liver Fry"
            },
            {
              "value": " Dam Aloo Kashmiri",
              "name": " Dam Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Kandi Liver Fry",
              "name": " Kandi Liver Fry"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Mushroom Hara Pyaz",
              "name": " Mushroom Hara Pyaz"
            },
            {
              "value": " Mushroom Ulavacharu Iguru",
              "name": " Mushroom Ulavacharu Iguru"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY ONE)",
          items: [
            {
              "value": " Baby corn, Cashew Full Nuts",
              "name": " Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": " Tomato, Drumstick",
              "name": " Tomato, Drumstick"
            }
          ]
        },
        {
          name: " STANDARD ITEMS (ANY FOUR)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": " Mysore Rasam",
              "name": " Mysore Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": " Mix Veg. Sambar",
              "name": " Mix Veg. Sambar"
            },
            {
              "value": " Madras Onion Sambar",
              "name": " Madras Onion Sambar"
            }
          ]
        },
        {
          name: " PICKLES (ANY TWO)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Dosakya Avakai",
              "name": "Dosakya Avakai"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": "Garlic Cashew Full nuts",
              "name": "Garlic Cashew Full nuts"
            },
            {
              "value": "Kotta Avakai",
              "name": "Kotta Avakai"
            },
            {
              "value": "Lemon",
              "name": "Lemon"
            },
            {
              "value": "Madras Onion",
              "name": "Madras Onion"
            },
            {
              "value": "Mixed Veg",
              "name": "Mixed Veg"
            },
            {
              "value": "Raw Papaya",
              "name": "Raw Papaya"
            }
          ]
        },
        {
          name: " POWDERS (ANY TWO)",
          items: [
            {
              "value": "Coconut Sanaga Kaaram",
              "name": "Coconut Sanaga Kaaram"
            },
            {
              "value": "Kandi",
              "name": "Kandi"
            },
            {
              "value": "Karivepaku",
              "name": "Karivepaku"
            },
            {
              "value": " Nalla Karam",
              "name": " Nalla Karam"
            },
            {
              "value": "Nuvvulu",
              "name": "Nuvvulu"
            }
          ]
        },
        {
          name: " GRINDED CHUTNIES (ANY TWO)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": " Brinjal, Tomato, Cucumber",
              "name": " Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Chukkakura Kandi Pachadi",
              "name": " Chukkakura Kandi Pachadi"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Cabbage",
              "name": " Cabbage"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": " Kandi Pachadi",
              "name": " Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": "  Pachi Tomato Chutney",
              "name": "  Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: " FRYUMS (ANY THREE)",
          items: [
            {
              "value": "AppadamPoolu",
              "name": "AppadamPoolu"
            },
            {
              "value": " Minapa Vadiyalu",
              "name": " Minapa Vadiyalu"
            },
            {
              "value": " Voora Mirapakayalu",
              "name": " Voora Mirapakayalu"
            },
            {
              "value": " Saggubiyam Vadiyalu",
              "name": " Saggubiyam Vadiyalu"
            },
            {
              "value": " Vamu Mirchi",
              "name": " Vamu Mirchi"
            }
          ]
        },
        {
          name: " CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            }
          ]
        },
        {
          name: " ICE CREAMS (ANY TWO)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": " Butter Scotch",
              "name": " Butter Scotch"
            },
            {
              "value": "Black Current",
              "name": "Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": " Caramel nuts",
              "name": " Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": "Kaju & Kismis",
              "name": "Kaju & Kismis"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Pista",
              "name": "Pista"
            },
            {
              "value": "Seetafal",
              "name": "Seetafal"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },
        {
          name: " DESSERTS (ANY THREE)",
          items: [
            {
              "value": "Blueberry Cheese Cake",
              "name": "Blueberry Cheese Cake"
            },
            {
              "value": "Black Forest Gateau",
              "name": "Black Forest Gateau"
            },
            {
              "value": " Mango Soufflé",
              "name": " Mango Soufflé"
            },
            {
              "value": "Chocolate Truffle",
              "name": "Chocolate Truffle"
            },
            {
              "value": " Chocolate Mousse",
              "name": " Chocolate Mousse"
            },
            {
              "value": " Kiwi Slice",
              "name": " Kiwi Slice"
            },
            {
              "value": "Tiramisu",
              "name": "Tiramisu"
            },
            {
              "value": "Chocolate Éclairs",
              "name": "Chocolate Éclairs"
            },
            {
              "value": " Lemon Chiffon Pie",
              "name": " Lemon Chiffon Pie"
            },
            {
              "value": "Chocolate Tarts",
              "name": "Chocolate Tarts"
            }
          ]
        },
        {
          name: " FRUITS INDIAN (ANY THREE)",
          items: [
            {
              "value": " Grapes",
              "name": " Grapes"
            },
            {
              "value": " Musk Melon",
              "name": " Musk Melon"
            },
            {
              "value": " Mango",
              "name": " Mango"
            },
            {
              "value": " Orange",
              "name": " Orange"
            },
            {
              "value": " Papaya",
              "name": " Papaya"
            },
            {
              "value": " Sapota",
              "name": " Sapota"
            },
            {
              "value": " Water Melon",
              "name": " Water Melon"
            },
            {
              "value": "  - IMPORTED (ANY FIVE) -",
              "name": "  - IMPORTED (ANY FIVE) -"
            },
            {
              "value": " Australian Grapes",
              "name": " Australian Grapes"
            },
            {
              "value": " Chile Pears",
              "name": " Chile Pears"
            },
            {
              "value": " Fuji Apple",
              "name": " Fuji Apple"
            },
            {
              "value": " Kimiya Dates",
              "name": " Kimiya Dates"
            },
            {
              "value": " Kiwi",
              "name": " Kiwi"
            },
            {
              "value": " Litchi",
              "name": " Litchi"
            },
            {
              "value": " Strawberry",
              "name": " Strawberry"
            },
            {
              "value": " Sweet Tamrind",
              "name": " Sweet Tamrind"
            }
          ]
        },
        {
          name: " HOTS (ANY ONE)",
          items: [
            {
              "value": "Ajwan Pakodi",
              "name": "Ajwan Pakodi"
            },
            {
              "value": " Capsicum Bhajji",
              "name": " Capsicum Bhajji"
            },
            {
              "value": " Gaare with tomato chutney",
              "name": " Gaare with tomato chutney"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Madras Pakodi (Round)",
              "name": " Madras Pakodi (Round)"
            },
            {
              "value": " Mealmaker Keema Wada",
              "name": " Mealmaker Keema Wada"
            },
            {
              "value": " Mini Alsanda Wada",
              "name": " Mini Alsanda Wada"
            },
            {
              "value": " Mini Corn Samosa",
              "name": " Mini Corn Samosa"
            },
            {
              "value": " Mini Perugu Aawada",
              "name": " Mini Perugu Aawada"
            },
            {
              "value": " Nellore Chitti Gaare",
              "name": " Nellore Chitti Gaare"
            },
            {
              "value": " Paneer Wada",
              "name": " Paneer Wada"
            },
            {
              "value": " Pudina Masala Wada",
              "name": " Pudina Masala Wada"
            },
            {
              "value": " Shangai Roll",
              "name": " Shangai Roll"
            },
            {
              "value": " Vamu Mirchi Bajji",
              "name": " Vamu Mirchi Bajji"
            },
            {
              "value": " Veg Bullet",
              "name": " Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Veg. Lolly Pop",
              "name": " Veg. Lolly Pop"
            },
            {
              "value": " Veg. Roll",
              "name": " Veg. Roll"
            },
            {
              "value": " Cucumber 65",
              "name": " Cucumber 65"
            }
          ]
        },
        {
          name: "ROTIES (ANY TWO)",
          items: [
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            },
            {
              "value": " Achari Roti",
              "name": " Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Besan Ke Roti",
              "name": "Besan Ke Roti"
            },
            {
              "value": " Butter Naan",
              "name": " Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": " Cheese Kulcha",
              "name": " Cheese Kulcha"
            },
            {
              "value": " Jonna Roti",
              "name": " Jonna Roti"
            },
            {
              "value": " Kottimeera Parota",
              "name": " Kottimeera Parota"
            },
            {
              "value": " Laccha Parota",
              "name": " Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": " Masala Parota",
              "name": " Masala Parota"
            },
            {
              "value": " Palak Parota",
              "name": " Palak Parota"
            },
            {
              "value": " Pista Parota",
              "name": " Pista Parota"
            },
            {
              "value": " Plain Kulcha",
              "name": " Plain Kulcha"
            },
            {
              "value": "  Plain Naan",
              "name": "  Plain Naan"
            },
            {
              "value": " Plain Parota",
              "name": " Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": " Pulkha",
              "name": " Pulkha"
            }
          ]
        },
        {
          name: " SPECIAL RICES - FLAVORED RICE - PULAO -BIRYANI’S -(ANY TWO)",
          items: [
            {
              "value": " Chintapandu Pulihora",
              "name": " Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": " Dabbakaya Pulihora",
              "name": " Dabbakaya Pulihora"
            },
            {
              "value": " Nimmakaya Pulihora",
              "name": " Nimmakaya Pulihora"
            },
            {
              "value": " Pudina Rice",
              "name": " Pudina Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Koemera Rice",
              "name": " Koemera Rice"
            },
            {
              "value": " Coconut Rice",
              "name": " Coconut Rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": "Corn Methi Pulao",
              "name": "Corn Methi Pulao"
            },
            {
              "value": "Veg Pulao",
              "name": "Veg Pulao"
            },
            {
              "value": "Kashmiri Pulao",
              "name": "Kashmiri Pulao"
            },
            {
              "value": "Fresh Green Peas Pulao",
              "name": "Fresh Green Peas Pulao"
            },
            {
              "value": "Veg SaffronPulao",
              "name": "Veg SaffronPulao"
            },
            {
              "value": " Bilal Mushroom Biryani with katta",
              "name": " Bilal Mushroom Biryani with katta"
            },
            {
              "value": " Bilal Panasakaya Biryani with Katta",
              "name": " Bilal Panasakaya Biryani with Katta"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": " Aloo Pudina Biryani",
              "name": " Aloo Pudina Biryani"
            },
            {
              "value": " Hyderabadi Ulavacharu dum Biryani",
              "name": " Hyderabadi Ulavacharu dum Biryani"
            },
            {
              "value": " Paneer & Baby corn Biryani",
              "name": " Paneer & Baby corn Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            }
          ]
        },
        {
          name: " PLAIN RICE ",
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: " KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "Butter Paneer Kurma",
              "name": "Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": " Methi Chaman",
              "name": " Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Tikka Masala",
              "name": " Paneer Tikka Masala"
            },
            {
              "value": " Paneer Moghlai Masala",
              "name": " Paneer Moghlai Masala"
            },
            {
              "value": "Paneer Sagwala",
              "name": "Paneer Sagwala"
            },
            {
              "value": " Palak Paneer",
              "name": " Palak Paneer"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": " PaneerButter Masala",
              "name": " PaneerButter Masala"
            },
            {
              "value": " Shahi Paneer Kurma",
              "name": " Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: " VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Kaju Kurma",
              "name": "Aloo Capsicum Kaju Kurma"
            },
            {
              "value": " Aloo Scoop Kurma",
              "name": " Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": " Mixed Veg Kurma",
              "name": " Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": " Nilgeri Kurma",
              "name": " Nilgeri Kurma"
            },
            {
              "value": " Pool Makkan Kurma",
              "name": " Pool Makkan Kurma"
            },
            {
              "value": " Thotakoora Cube Kurma",
              "name": " Thotakoora Cube Kurma"
            }
          ]
        },
        {
          name: "   SPECIALTY COUNTER ",
          items: [
            {
              "value": "KOMCHA CHAT (ANY FOUR)",
              "name": "KOMCHA CHAT (ANY FOUR)"
            },
            {
              "value": "Aloo Mutter chat",
              "name": "Aloo Mutter chat"
            },
            {
              "value": "Aloo Tikki",
              "name": "Aloo Tikki"
            },
            {
              "value": " Angoori Dahi Balle",
              "name": " Angoori Dahi Balle"
            },
            {
              "value": " Baby corn Matter",
              "name": " Baby corn Matter"
            },
            {
              "value": " Bhel Puri",
              "name": " Bhel Puri"
            },
            {
              "value": " Daal Muradabadi",
              "name": " Daal Muradabadi"
            },
            {
              "value": " Dahi Puri",
              "name": " Dahi Puri"
            },
            {
              "value": " Dal Chilla",
              "name": " Dal Chilla"
            },
            {
              "value": " Fruit Chat",
              "name": " Fruit Chat"
            },
            {
              "value": " Gudia ke Baal",
              "name": " Gudia ke Baal"
            },
            {
              "value": " Kachori Chat",
              "name": " Kachori Chat"
            },
            {
              "value": " Kaniji Pakodi",
              "name": " Kaniji Pakodi"
            },
            {
              "value": " Mini Kachori",
              "name": " Mini Kachori"
            },
            {
              "value": " Pani Puri 3 type of water",
              "name": " Pani Puri 3 type of water"
            },
            {
              "value": " Raj Kachori",
              "name": " Raj Kachori"
            },
            {
              "value": " Samosa Chat",
              "name": " Samosa Chat"
            },
            {
              "value": " Shaker Kandi Chat",
              "name": " Shaker Kandi Chat"
            },
            {
              "value": " Tomato Kachori",
              "name": " Tomato Kachori"
            }
          ]
        },
        {
          name: " CHINESE (ANY FOUR)",
          items: [
            {
              "value": "Veg Soft Noodles",
              "name": "Veg Soft Noodles"
            },
            {
              "value": " Veg Hakka Noodles",
              "name": " Veg Hakka Noodles"
            },
            {
              "value": "American Chopsue",
              "name": "American Chopsue"
            },
            {
              "value": "Stir Fried Vegetables",
              "name": "Stir Fried Vegetables"
            },
            {
              "value": " Veg Tawa Sizzler",
              "name": " Veg Tawa Sizzler"
            },
            {
              "value": " Chinese Fried Rice",
              "name": " Chinese Fried Rice"
            },
            {
              "value": " Bambina rice",
              "name": " Bambina rice"
            },
            {
              "value": " Corn Cubes",
              "name": " Corn Cubes"
            },
            {
              "value": " Paneer Corn",
              "name": " Paneer Corn"
            }
          ]
        },
        {
          name: " DOSA (ANY FOUR)",
          items: [
            {
              "value": "Plain Dosa",
              "name": "Plain Dosa"
            },
            {
              "value": " Onion Dosa",
              "name": " Onion Dosa"
            },
            {
              "value": "Carrot Dosav",
              "name": "Carrot Dosav"
            },
            {
              "value": " Karam Dosa",
              "name": " Karam Dosa"
            },
            {
              "value": " Neyya Dosa",
              "name": " Neyya Dosa"
            },
            {
              "value": "Butter Dosa",
              "name": "Butter Dosa"
            },
            {
              "value": " Masala Dosa",
              "name": " Masala Dosa"
            },
            {
              "value": "Paneer Dosa",
              "name": "Paneer Dosa"
            },
            {
              "value": "Ragi Dosa",
              "name": "Ragi Dosa"
            },
            {
              "value": " Pesarrarttu with Upma",
              "name": " Pesarrarttu with Upma"
            }
          ]
        },
        {
          name: " PANS",
          items: [
            {
              "value": "Pan Sada",
              "name": "Pan Sada"
            },
            {
              "value": "Pan Sweet",
              "name": "Pan Sweet"
            }
          ]
        },
        {
          name: " MINERAL WATER",
          items: [
            {
              "value": "In Glasses",
              "name": "In Glasses"
            },
            {
              "value": "In 200 ml bottles @ Circulation extra cost.",
              "name": "In 200 ml bottles @ Circulation extra cost."
            }
          ]
        },
      ],
      nonVegCategories: [
        {
          name: " -- NON-VEG GOLD -- BEVERAGES (ANY TWO)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": "Sugar Cane (Min. Gathering)",
              "name": "Sugar Cane (Min. Gathering)"
            },
            {
              "value": "Coconut Delight",
              "name": "Coconut Delight"
            },
            {
              "value": "Fruit Punch",
              "name": "Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": "Litchi Punch",
              "name": "Litchi Punch"
            },
            {
              "value": "Grapes Pulpy kulfi",
              "name": "Grapes Pulpy kulfi"
            },
            {
              "value": "Orange Punch",
              "name": "Orange Punch"
            },
            {
              "value": "Irish Milkshake",
              "name": "Irish Milkshake"
            },
            {
              "value": "Thatimunjala Milkshake (Seasonal)",
              "name": "Thatimunjala Milkshake (Seasonal)"
            },
            {
              "value": "Peach Apricot Delight",
              "name": "Peach Apricot Delight"
            },
            {
              "value": " Sharjah",
              "name": " Sharjah"
            },
            {
              "value": " Chicoo Milk shakes",
              "name": " Chicoo Milk shakes"
            },
            {
              "value": "Panakam",
              "name": "Panakam"
            },
            {
              "value": "Cold Badam Milk",
              "name": "Cold Badam Milk"
            },
            {
              "value": " Hot Badam Milk",
              "name": " Hot Badam Milk"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            }
          ]
        },
        {
          name: " WELCOME SWEETS (ANY TWO)",
          items: [
            {
              "value": "Choco Jewels",
              "name": "Choco Jewels"
            },
            {
              "value": " Anjeer Delight",
              "name": " Anjeer Delight"
            },
            {
              "value": " Pista Sandwich",
              "name": " Pista Sandwich"
            },
            {
              "value": " Kaju Basket",
              "name": " Kaju Basket"
            },
            {
              "value": " Fruit Choco's",
              "name": " Fruit Choco's"
            },
            {
              "value": " Fruit Tarts",
              "name": " Fruit Tarts"
            },
            {
              "value": " Dry Fruit Delight",
              "name": " Dry Fruit Delight"
            },
            {
              "value": " Anjeer Roll",
              "name": " Anjeer Roll"
            },
            {
              "value": " Orange Balls",
              "name": " Orange Balls"
            },
            {
              "value": " Kaju Pista",
              "name": " Kaju Pista"
            },
            {
              "value": " Breed Halva",
              "name": " Breed Halva"
            },
            {
              "value": " Carrot Green Mixed Halwa",
              "name": " Carrot Green Mixed Halwa"
            },
            {
              "value": " Chekkara Pongal",
              "name": " Chekkara Pongal"
            },
            {
              "value": " Chitti Areslu With Nuvvlu",
              "name": " Chitti Areslu With Nuvvlu"
            },
            {
              "value": " Double Ka Meetha",
              "name": " Double Ka Meetha"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": " Dry Fruit cone",
              "name": " Dry Fruit cone"
            },
            {
              "value": " Gulkan Gelory",
              "name": " Gulkan Gelory"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Kaju Gulbahar",
              "name": " Kaju Gulbahar"
            },
            {
              "value": " Litchi Wine",
              "name": " Litchi Wine"
            },
            {
              "value": " Malai Kaja",
              "name": " Malai Kaja"
            },
            {
              "value": " Mixed Fruit Halwa",
              "name": " Mixed Fruit Halwa"
            },
            {
              "value": " Nethi Bobbattlu",
              "name": " Nethi Bobbattlu"
            },
            {
              "value": " Pancharatna Halva",
              "name": " Pancharatna Halva"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Poornam",
              "name": " Poornam"
            },
            {
              "value": " Qhubani Ka Meetha",
              "name": " Qhubani Ka Meetha"
            },
            {
              "value": " Semiya Saggubiyam Kesar Payasam",
              "name": " Semiya Saggubiyam Kesar Payasam"
            },
            {
              "value": " Shai Tukara",
              "name": " Shai Tukara"
            },
            {
              "value": "American Mal Puri",
              "name": "American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Basundi",
              "name": " Basundi"
            },
            {
              "value": "Gajrela",
              "name": "Gajrela"
            },
            {
              "value": " Gulabi Chat",
              "name": " Gulabi Chat"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": " Jeedlu",
              "name": " Jeedlu"
            },
            {
              "value": "KesarJalebi",
              "name": "KesarJalebi"
            },
            {
              "value": " Navrang Pan",
              "name": " Navrang Pan"
            },
            {
              "value": " Pineapple Jalebi",
              "name": " Pineapple Jalebi"
            },
            {
              "value": " Supai Rapsam",
              "name": " Supai Rapsam"
            },
            {
              "value": "Tawa Mix Sweet",
              "name": "Tawa Mix Sweet"
            }
          ]
        },
        {
          name: " WELCOME SNACKS (ANY TWO)",
          items: [
            {
              "value": " Cottage Cheese Balls",
              "name": " Cottage Cheese Balls"
            },
            {
              "value": " Cheese Potato Wedges Melt",
              "name": " Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": " Cocktail corn samosa",
              "name": " Cocktail corn samosa"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Fried Red Pepper Kaju",
              "name": " Fried Red Pepper Kaju"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " Red Masala Kaju",
              "name": " Red Masala Kaju"
            },
            {
              "value": " Shangai Rolls",
              "name": " Shangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            },
            {
              "value": "Mint chutney",
              "name": "Mint chutney"
            },
            {
              "value": "Hot garlic sauce",
              "name": "Hot garlic sauce"
            },
            {
              "value": "Garlic mayo",
              "name": "Garlic mayo"
            },
            {
              "value": "Tomato ketchup",
              "name": "Tomato ketchup"
            },
            {
              "value": "Cocktail Sauce",
              "name": "Cocktail Sauce"
            }
          ]
        },
        {
          name: " SALAD (ANY THREE)",
          items: [
            {
              "value": "Garden Spring Green Salad",
              "name": "Garden Spring Green Salad"
            },
            {
              "value": "German Potato Salad",
              "name": "German Potato Salad"
            },
            {
              "value": " Sprouts",
              "name": " Sprouts"
            },
            {
              "value": "Tri Beans Salad with lemon chilly",
              "name": "Tri Beans Salad with lemon chilly"
            },
            {
              "value": "Green Apple Yoghurt Honey",
              "name": "Green Apple Yoghurt Honey"
            },
            {
              "value": "Cucumber Yoghurt Dill Salad",
              "name": "Cucumber Yoghurt Dill Salad"
            },
            {
              "value": "Italian Pasta with Cilantro",
              "name": "Italian Pasta with Cilantro"
            },
            {
              "value": "Pineapple Cheese Salad",
              "name": "Pineapple Cheese Salad"
            },
            {
              "value": "Aloo Chana chat",
              "name": "Aloo Chana chat"
            },
            {
              "value": "Russian Salad",
              "name": "Russian Salad"
            },
            {
              "value": "Coleslaw",
              "name": "Coleslaw"
            },
            {
              "value": "Waldorf Salad",
              "name": "Waldorf Salad"
            },
            {
              "value": "Caesar Salad",
              "name": "Caesar Salad"
            }
          ]
        },
        {
          name: " SOUPS (ANY ONE)",
          items: [
            {
              "value": " Cream of Mushroom Soup",
              "name": " Cream of Mushroom Soup"
            },
            {
              "value": " Cream of Tomato Soup",
              "name": " Cream of Tomato Soup"
            },
            {
              "value": "Lemon Coriander Soup",
              "name": "Lemon Coriander Soup"
            },
            {
              "value": "Minestrone Soup",
              "name": "Minestrone Soup"
            },
            {
              "value": "  Mulligatawny",
              "name": "  Mulligatawny"
            },
            {
              "value": " Potato leaks Soup",
              "name": " Potato leaks Soup"
            },
            {
              "value": "Pumpkin Soup",
              "name": "Pumpkin Soup"
            },
            {
              "value": " Sweet Corn Soup",
              "name": " Sweet Corn Soup"
            },
            {
              "value": "Tomato dhanya Shorba",
              "name": "Tomato dhanya Shorba"
            },
            {
              "value": " Veg. Hot & Sour Soup",
              "name": " Veg. Hot & Sour Soup"
            },
            {
              "value": "Veg. Manchow Soup",
              "name": "Veg. Manchow Soup"
            }
          ]
        },
        {
          name: " DAL (ANY TWO) ",
          items: [
            {
              "value": "Avakai Pappu",
              "name": "Avakai Pappu"
            },
            {
              "value": "Palakora Mamidikaya Pappu",
              "name": "Palakora Mamidikaya Pappu"
            },
            {
              "value": "Ooseri Kaya Pappu",
              "name": "Ooseri Kaya Pappu"
            },
            {
              "value": "Cucumber Dal",
              "name": "Cucumber Dal"
            },
            {
              "value": "Dal Makhani",
              "name": "Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": "Mango Dal",
              "name": "Mango Dal"
            },
            {
              "value": "Plain Dal + Dappadam",
              "name": "Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": "Dal Jaipuri",
              "name": "Dal Jaipuri"
            },
            {
              "value": "Veg. Manchow Soup",
              "name": "Veg. Manchow Soup"
            }
          ]
        },
        {
          name: " VEG FRIES(ANY THREE)",
          items: [
            {
              "value": "Thotakoora Liver Fry",
              "name": "Thotakoora Liver Fry"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Aloo Allam Pachi Mirchi Fry",
              "name": " Baby Aloo Allam Pachi Mirchi Fry"
            },
            {
              "value": " Baby Corn 65",
              "name": " Baby Corn 65"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": " Capsicum Sanaga Kaaram",
              "name": " Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Corn Liver Fry",
              "name": " Corn Liver Fry"
            },
            {
              "value": " Dam Aloo Kashmiri",
              "name": " Dam Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Kandi Liver Fry",
              "name": " Kandi Liver Fry"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Mushroom Hara Pyaz",
              "name": " Mushroom Hara Pyaz"
            },
            {
              "value": " Mushroom Ulavacharu Iguru",
              "name": " Mushroom Ulavacharu Iguru"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY ONE)",
          items: [
            {
              "value": " Baby corn, Cashew Full Nuts",
              "name": " Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": " Tomato, Drumstick",
              "name": " Tomato, Drumstick"
            }
          ]
        },
        {
          name: " STANDARD ITEMS (ANY FOUR)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": " Mysore Rasam",
              "name": " Mysore Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": " Mix Veg. Sambar",
              "name": " Mix Veg. Sambar"
            },
            {
              "value": " Madras Onion Sambar",
              "name": " Madras Onion Sambar"
            }
          ]
        },
        {
          name: " PICKLES (ANY TWO)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Dosakya Avakai",
              "name": "Dosakya Avakai"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": "Garlic Cashew Full nuts",
              "name": "Garlic Cashew Full nuts"
            },
            {
              "value": "Kotta Avakai",
              "name": "Kotta Avakai"
            },
            {
              "value": "Lemon",
              "name": "Lemon"
            },
            {
              "value": "Madras Onion",
              "name": "Madras Onion"
            },
            {
              "value": "Mixed Veg",
              "name": "Mixed Veg"
            },
            {
              "value": "Raw Papaya",
              "name": "Raw Papaya"
            }
          ]
        },
        {
          name: " POWDERS (ANY TWO)",
          items: [
            {
              "value": "Coconut Sanaga Kaaram",
              "name": "Coconut Sanaga Kaaram"
            },
            {
              "value": "Kandi",
              "name": "Kandi"
            },
            {
              "value": "Karivepaku",
              "name": "Karivepaku"
            },
            {
              "value": " Nalla Karam",
              "name": " Nalla Karam"
            },
            {
              "value": "Nuvvulu",
              "name": "Nuvvulu"
            }
          ]
        },
        {
          name: " GRINDED CHUTNIES (ANY TWO)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": " Brinjal, Tomato, Cucumber",
              "name": " Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Chukkakura Kandi Pachadi",
              "name": " Chukkakura Kandi Pachadi"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Cabbage",
              "name": " Cabbage"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": " Kandi Pachadi",
              "name": " Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": "  Pachi Tomato Chutney",
              "name": "  Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: " FRYUMS (ANY THREE)",
          items: [
            {
              "value": "AppadamPoolu",
              "name": "AppadamPoolu"
            },
            {
              "value": " Minapa Vadiyalu",
              "name": " Minapa Vadiyalu"
            },
            {
              "value": " Voora Mirapakayalu",
              "name": " Voora Mirapakayalu"
            },
            {
              "value": " Saggubiyam Vadiyalu",
              "name": " Saggubiyam Vadiyalu"
            },
            {
              "value": " Vamu Mirchi",
              "name": " Vamu Mirchi"
            }
          ]
        },
        {
          name: " CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            }
          ]
        },
        {
          name: " ICE CREAMS (ANY TWO)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": " Butter Scotch",
              "name": " Butter Scotch"
            },
            {
              "value": "Black Current",
              "name": "Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": " Caramel nuts",
              "name": " Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": "Kaju & Kismis",
              "name": "Kaju & Kismis"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Pista",
              "name": "Pista"
            },
            {
              "value": "Seetafal",
              "name": "Seetafal"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },
        {
          name: " DESSERTS (ANY THREE)",
          items: [
            {
              "value": "Blueberry Cheese Cake",
              "name": "Blueberry Cheese Cake"
            },
            {
              "value": "Black Forest Gateau",
              "name": "Black Forest Gateau"
            },
            {
              "value": " Mango Soufflé",
              "name": " Mango Soufflé"
            },
            {
              "value": "Chocolate Truffle",
              "name": "Chocolate Truffle"
            },
            {
              "value": " Chocolate Mousse",
              "name": " Chocolate Mousse"
            },
            {
              "value": " Kiwi Slice",
              "name": " Kiwi Slice"
            },
            {
              "value": "Tiramisu",
              "name": "Tiramisu"
            },
            {
              "value": "Chocolate Éclairs",
              "name": "Chocolate Éclairs"
            },
            {
              "value": " Lemon Chiffon Pie",
              "name": " Lemon Chiffon Pie"
            },
            {
              "value": "Chocolate Tarts",
              "name": "Chocolate Tarts"
            }
          ]
        },
        {
          name: " FRUITS INDIAN (ANY THREE)",
          items: [
            {
              "value": " Grapes",
              "name": " Grapes"
            },
            {
              "value": " Musk Melon",
              "name": " Musk Melon"
            },
            {
              "value": " Mango",
              "name": " Mango"
            },
            {
              "value": " Orange",
              "name": " Orange"
            },
            {
              "value": " Papaya",
              "name": " Papaya"
            },
            {
              "value": " Sapota",
              "name": " Sapota"
            },
            {
              "value": " Water Melon",
              "name": " Water Melon"
            },
            {
              "value": " Australian Grapes",
              "name": " Australian Grapes"
            },
            {
              "value": " Chile Pears",
              "name": " Chile Pears"
            },
            {
              "value": " Fuji Apple",
              "name": " Fuji Apple"
            },
            {
              "value": " Kimiya Dates",
              "name": " Kimiya Dates"
            },
            {
              "value": " Kiwi",
              "name": " Kiwi"
            },
            {
              "value": " Litchi",
              "name": " Litchi"
            },
            {
              "value": " Strawberry",
              "name": " Strawberry"
            },
            {
              "value": " Sweet Tamrind",
              "name": " Sweet Tamrind"
            }
          ]
        },
        {
          name: " HOTS (ANY ONE)",
          items: [
            {
              "value": "Ajwan Pakodi",
              "name": "Ajwan Pakodi"
            },
            {
              "value": " Capsicum Bhajji",
              "name": " Capsicum Bhajji"
            },
            {
              "value": " Gaare with tomato chutney",
              "name": " Gaare with tomato chutney"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Madras Pakodi (Round)",
              "name": " Madras Pakodi (Round)"
            },
            {
              "value": " Mealmaker Keema Wada",
              "name": " Mealmaker Keema Wada"
            },
            {
              "value": " Mini Alsanda Wada",
              "name": " Mini Alsanda Wada"
            },
            {
              "value": " Mini Corn Samosa",
              "name": " Mini Corn Samosa"
            },
            {
              "value": " Mini Perugu Aawada",
              "name": " Mini Perugu Aawada"
            },
            {
              "value": " Nellore Chitti Gaare",
              "name": " Nellore Chitti Gaare"
            },
            {
              "value": " Paneer Wada",
              "name": " Paneer Wada"
            },
            {
              "value": " Pudina Masala Wada",
              "name": " Pudina Masala Wada"
            },
            {
              "value": " Shangai Roll",
              "name": " Shangai Roll"
            },
            {
              "value": " Vamu Mirchi Bajji",
              "name": " Vamu Mirchi Bajji"
            },
            {
              "value": " Veg Bullet",
              "name": " Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Veg. Lolly Pop",
              "name": " Veg. Lolly Pop"
            },
            {
              "value": " Veg. Roll",
              "name": " Veg. Roll"
            },
            {
              "value": " Cucumber 65",
              "name": " Cucumber 65"
            }
          ]
        },
        {
          name: "ROTIES (ANY TWO)",
          items: [
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            },
            {
              "value": " Achari Roti",
              "name": " Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Besan Ke Roti",
              "name": "Besan Ke Roti"
            },
            {
              "value": " Butter Naan",
              "name": " Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": " Cheese Kulcha",
              "name": " Cheese Kulcha"
            },
            {
              "value": " Jonna Roti",
              "name": " Jonna Roti"
            },
            {
              "value": " Kottimeera Parota",
              "name": " Kottimeera Parota"
            },
            {
              "value": " Laccha Parota",
              "name": " Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": " Masala Parota",
              "name": " Masala Parota"
            },
            {
              "value": " Palak Parota",
              "name": " Palak Parota"
            },
            {
              "value": " Pista Parota",
              "name": " Pista Parota"
            },
            {
              "value": " Plain Kulcha",
              "name": " Plain Kulcha"
            },
            {
              "value": "  Plain Naan",
              "name": "  Plain Naan"
            },
            {
              "value": " Plain Parota",
              "name": " Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": " Pulkha",
              "name": " Pulkha"
            }
          ]
        },
        {
          name: " Non-Veg Snacks -CHICKEN- MUTTON- SEA FOOD(ANY TWO)",
          items: [
            {
              "value": "Pepper Chicken",
              "name": "Pepper Chicken"
            },
            {
              "value": " Chicken Pakodi",
              "name": " Chicken Pakodi"
            },
            {
              "value": "Chilli Chicken",
              "name": "Chilli Chicken"
            },
            {
              "value": " Chicken Majestic",
              "name": " Chicken Majestic"
            },
            {
              "value": " Chicken 65",
              "name": " Chicken 65"
            },
            {
              "value": " Chicken Sate",
              "name": " Chicken Sate"
            },
            {
              "value": "  Chicken Afghani",
              "name": "  Chicken Afghani"
            },
            {
              "value": " Fried Chicken",
              "name": " Fried Chicken"
            },
            {
              "value": "  Chicken Drumsticks",
              "name": "  Chicken Drumsticks"
            },
            {
              "value": "  Chicken Lollypops",
              "name": "  Chicken Lollypops"
            },
            {
              "value": " Lemon Chicken",
              "name": " Lemon Chicken"
            },
            {
              "value": " Chicken Manchurian",
              "name": " Chicken Manchurian"
            },
            {
              "value": "Reshmi Chicken",
              "name": "Reshmi Chicken"
            },
            {
              "value": " Chicken Harialyali Tikka",
              "name": " Chicken Harialyali Tikka"
            },
            {
              "value": "  Chicken Mogali",
              "name": "  Chicken Mogali"
            },
            {
              "value": " Chicken Malai Tikka",
              "name": " Chicken Malai Tikka"
            },
            {
              "value": "Bar-be-que Chicken",
              "name": "Bar-be-que Chicken"
            },
            {
              "value": " Chicken Springli",
              "name": " Chicken Springli"
            },
            {
              "value": " Chicken Tandoori Kabab",
              "name": " Chicken Tandoori Kabab"
            },
            {
              "value": " Ginger Chicken",
              "name": " Ginger Chicken"
            },
            {
              "value": " Drums of Heaven",
              "name": " Drums of Heaven"
            },
            {
              "value": " Achari Murg Tikka",
              "name": " Achari Murg Tikka"
            },
            {
              "value": " Murg Gulafi Tikka",
              "name": " Murg Gulafi Tikka"
            },
            {
              "value": " Chicken Shashlik",
              "name": " Chicken Shashlik"
            },
            {
              "value": " Chicken Small Fingers",
              "name": " Chicken Small Fingers"
            },
            {
              "value": " Spicy Chicken",
              "name": " Spicy Chicken"
            },
            {
              "value": " Amritsari Chicken",
              "name": " Amritsari Chicken"
            },
            {
              "value": " Chicken Wings",
              "name": " Chicken Wings"
            },
            {
              "value": " Grilled Chicken",
              "name": " Grilled Chicken"
            },
            {
              "value": " Fried Corn Chicken",
              "name": " Fried Corn Chicken"
            },
            {
              "value": " Mutton Sheek Kabab",
              "name": " Mutton Sheek Kabab"
            },
            {
              "value": " Mutton Keema Balls",
              "name": " Mutton Keema Balls"
            },
            {
              "value": " Pattar ka Gosh",
              "name": " Pattar ka Gosh"
            },
            {
              "value": " Mutton Boti Kabab",
              "name": " Mutton Boti Kabab"
            },
            {
              "value": " Mutton Shami Kabab",
              "name": " Mutton Shami Kabab"
            },
            {
              "value": " Zingara Mutton Sheek",
              "name": " Zingara Mutton Sheek"
            },
            {
              "value": " Mutton Chops",
              "name": " Mutton Chops"
            },
            {
              "value": " Pepper Mutton",
              "name": " Pepper Mutton"
            },
            {
              "value": "  Spicy Fish Fry",
              "name": "  Spicy Fish Fry"
            },
            {
              "value": " Apollo Fish",
              "name": " Apollo Fish"
            },
            {
              "value": " Fired Fish",
              "name": " Fired Fish"
            },
            {
              "value": " Fish Fingers",
              "name": " Fish Fingers"
            },
            {
              "value": " Pepper Fish",
              "name": " Pepper Fish"
            },
            {
              "value": " Fish Bullets",
              "name": " Fish Bullets"
            },
            {
              "value": " Fish Lal Mirchi Tikka",
              "name": " Fish Lal Mirchi Tikka"
            },
            {
              "value": " Fish Amritsari Tikka",
              "name": " Fish Amritsari Tikka"
            },
            {
              "value": " Tawa Fish",
              "name": " Tawa Fish"
            },
            {
              "value": " Lady Fish Fingers",
              "name": " Lady Fish Fingers"
            },
            {
              "value": "  Fish Pomfret",
              "name": "  Fish Pomfret"
            },
            {
              "value": " Crispy Chilli Fish",
              "name": " Crispy Chilli Fish"
            },
            {
              "value": " Golden Fired Prawns",
              "name": " Golden Fired Prawns"
            },
            {
              "value": " Chilli Garlic Prawns",
              "name": " Chilli Garlic Prawns"
            },
            {
              "value": " Grilled Prawns",
              "name": " Grilled Prawns"
            },
            {
              "value": " Loose Prawns",
              "name": " Loose Prawns"
            },
            {
              "value": " Stuffed Crab",
              "name": " Stuffed Crab"
            },
            {
              "value": " Crab Keema Balls",
              "name": " Crab Keema Balls"
            }
          ]
        },
        {
          name: " Non-Veg MAIN COURSES -CHICKEN - MUTTON - SEA FOOD (ANY ONE) -",
          items: [
            {
              "value": "Andhra Chicken Curry",
              "name": "Andhra Chicken Curry"
            },
            {
              "value": " Chicken Fry",
              "name": " Chicken Fry"
            },
            {
              "value": " Butter Chicken Curry",
              "name": " Butter Chicken Curry"
            },
            {
              "value": "Dum ka Chicken",
              "name": "Dum ka Chicken"
            },
            {
              "value": " Boneless Chicken Curry",
              "name": " Boneless Chicken Curry"
            },
            {
              "value": " Kadai Chicken",
              "name": " Kadai Chicken"
            },
            {
              "value": " Mogali Chicken Curry",
              "name": " Mogali Chicken Curry"
            },
            {
              "value": " Chicken Iguru",
              "name": " Chicken Iguru"
            },
            {
              "value": " Natukodi Pulusu",
              "name": " Natukodi Pulusu"
            },
            {
              "value": "Natukodi Iguru",
              "name": "Natukodi Iguru"
            },
            {
              "value": " Chicken Chintachiguru",
              "name": " Chicken Chintachiguru"
            },
            {
              "value": "Ginger Chicken Masala",
              "name": "Ginger Chicken Masala"
            },
            {
              "value": " Chicken Do Pyaza",
              "name": " Chicken Do Pyaza"
            },
            {
              "value": " Spicy Chicken Kurma",
              "name": " Spicy Chicken Kurma"
            },
            {
              "value": "  Chicken Sagwala curry",
              "name": "  Chicken Sagwala curry"
            },
            {
              "value": " Chicken Liver Fry",
              "name": " Chicken Liver Fry"
            },
            {
              "value": " Palak Chicken Curry",
              "name": " Palak Chicken Curry"
            },
            {
              "value": " Chicken Mirayala Vepudu",
              "name": " Chicken Mirayala Vepudu"
            },
            {
              "value": " Arakodi Fry",
              "name": " Arakodi Fry"
            },
            {
              "value": " Mutton Curry",
              "name": " Mutton Curry"
            },
            {
              "value": " Mutton Gongura",
              "name": " Mutton Gongura"
            },
            {
              "value": " Mutton Chintachiguru",
              "name": " Mutton Chintachiguru"
            },
            {
              "value": " Mutton Dosakaya",
              "name": " Mutton Dosakaya"
            },
            {
              "value": " Mutton Mulakaya",
              "name": " Mutton Mulakaya"
            },
            {
              "value": " Mutton Mango",
              "name": " Mutton Mango"
            },
            {
              "value": " Mutton Iguru",
              "name": " Mutton Iguru"
            },
            {
              "value": " Mutton Spicy Kurma",
              "name": " Mutton Spicy Kurma"
            },
            {
              "value": " Dum Ka Mutton",
              "name": " Dum Ka Mutton"
            },
            {
              "value": "Achari Mutton",
              "name": "Achari Mutton"
            },
            {
              "value": " Mutton Rogan Josh",
              "name": " Mutton Rogan Josh"
            },
            {
              "value": " Palak Mutton",
              "name": " Palak Mutton"
            },
            {
              "value": " Mutton Chops Masala",
              "name": " Mutton Chops Masala"
            },
            {
              "value": " Mutton Keema on tawa",
              "name": " Mutton Keema on tawa"
            },
            {
              "value": " Mutton Shahi Kurma",
              "name": " Mutton Shahi Kurma"
            },
            {
              "value": " Mutton Liver Fry",
              "name": " Mutton Liver Fry"
            },
            {
              "value": " Koramenu Chapala Pulusu",
              "name": " Koramenu Chapala Pulusu"
            },
            {
              "value": " Nellore Chapala Pulusu",
              "name": " Nellore Chapala Pulusu"
            },
            {
              "value": " Mango Chapala Pulusu",
              "name": " Mango Chapala Pulusu"
            },
            {
              "value": " Bommidyala Pulusu",
              "name": " Bommidyala Pulusu"
            },
            {
              "value": " Bommidyala Iguru",
              "name": " Bommidyala Iguru"
            },
            {
              "value": " Koramenu Iguru",
              "name": " Koramenu Iguru"
            },
            {
              "value": " Koramenu Fry ( with bone) on tawa",
              "name": " Koramenu Fry ( with bone) on tawa"
            },
            {
              "value": " Sorachapa Porutu",
              "name": " Sorachapa Porutu"
            },
            {
              "value": " Pandugappa Fry",
              "name": " Pandugappa Fry"
            },
            {
              "value": " Prawns Kobbari Iguru",
              "name": " Prawns Kobbari Iguru"
            },
            {
              "value": " Prawns Curry",
              "name": " Prawns Curry"
            },
            {
              "value": " Prawns Fry",
              "name": " Prawns Fry"
            },
            {
              "value": " Chintachiguru Prawns",
              "name": " Chintachiguru Prawns"
            },
            {
              "value": " Peethala Iguru",
              "name": " Peethala Iguru"
            },
            {
              "value": " Peethala Pulusu",
              "name": " Peethala Pulusu"
            },
            {
              "value": " Stuffed Crab Iguru",
              "name": " Stuffed Crab Iguru"
            },
            {
              "value": " Dosakaya Nethhalau",
              "name": " Dosakaya Nethhalau"
            },
            {
              "value": " BIRYANI’S (ANY ONE)",
              "name": " BIRYANI’S (ANY ONE)"
            },
            {
              "value": " Bilal Mutton Biryani",
              "name": " Bilal Mutton Biryani"
            },
            {
              "value": " Hyderabadi Mugalai Mutton Biryani",
              "name": " Hyderabadi Mugalai Mutton Biryani"
            },
            {
              "value": " Hyderabadi Chicken Dum Biryani",
              "name": " Hyderabadi Chicken Dum Biryani"
            },
            {
              "value": " Vijawada Style Chicken Biryani",
              "name": " Vijawada Style Chicken Biryani"
            },
            {
              "value": " Bilal Prawn Biryani",
              "name": " Bilal Prawn Biryani"
            },
            {
              "value": " Andhra Fish Biryani",
              "name": " Andhra Fish Biryani"
            },
            {
              "value": " Chicken Ulavacharu Dum Biryani",
              "name": " Chicken Ulavacharu Dum Biryani"
            },
            {
              "value": " Chettinadu Chicken Dum Biryani",
              "name": " Chettinadu Chicken Dum Biryani"
            },
            {
              "value": " Chettinadu Mutton Dum Biryani",
              "name": " Chettinadu Mutton Dum Biryani"
            },
            {
              "value": "Chicken Fry Piece Biryani",
              "name": "Chicken Fry Piece Biryani"
            }
          ]
        },
        {
          name: " SPECIAL RICES (ANY TWO)",
          items: [
            {
              "value": " Chintapandu Pulihora",
              "name": " Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": " Dabbakaya Pulihora",
              "name": " Dabbakaya Pulihora"
            },
            {
              "value": " Nimmakaya Pulihora",
              "name": " Nimmakaya Pulihora"
            },
            {
              "value": " Pudina Rice",
              "name": " Pudina Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Koemera Rice",
              "name": " Koemera Rice"
            },
            {
              "value": " Coconut Rice",
              "name": " Coconut Rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": "Corn Methi Pulao",
              "name": "Corn Methi Pulao"
            },
            {
              "value": "Veg Pulao",
              "name": "Veg Pulao"
            },
            {
              "value": "Kashmiri Pulao",
              "name": "Kashmiri Pulao"
            },
            {
              "value": "Fresh Green Peas Pulao",
              "name": "Fresh Green Peas Pulao"
            },
            {
              "value": "Veg SaffronPulao",
              "name": "Veg SaffronPulao"
            },
            {
              "value": " Bilal Mushroom Biryani with katta",
              "name": " Bilal Mushroom Biryani with katta"
            },
            {
              "value": " Bilal Panasakaya Biryani with Katta",
              "name": " Bilal Panasakaya Biryani with Katta"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": " Aloo Pudina Biryani",
              "name": " Aloo Pudina Biryani"
            },
            {
              "value": " Hyderabadi Ulavacharu dum Biryani",
              "name": " Hyderabadi Ulavacharu dum Biryani"
            },
            {
              "value": " Paneer & Baby corn Biryani",
              "name": " Paneer & Baby corn Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            }
          ]
        },
        {
          name: " PLAIN RICE ",
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: " KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "Butter Paneer Kurma",
              "name": "Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": " Methi Chaman",
              "name": " Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Tikka Masala",
              "name": " Paneer Tikka Masala"
            },
            {
              "value": " Paneer Moghlai Masala",
              "name": " Paneer Moghlai Masala"
            },
            {
              "value": "Paneer Sagwala",
              "name": "Paneer Sagwala"
            },
            {
              "value": " Palak Paneer",
              "name": " Palak Paneer"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": " PaneerButter Masala",
              "name": " PaneerButter Masala"
            },
            {
              "value": " Shahi Paneer Kurma",
              "name": " Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: " VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Kaju Kurma",
              "name": "Aloo Capsicum Kaju Kurma"
            },
            {
              "value": " Aloo Scoop Kurma",
              "name": " Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": " Mixed Veg Kurma",
              "name": " Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": " Nilgeri Kurma",
              "name": " Nilgeri Kurma"
            },
            {
              "value": " Pool Makkan Kurma",
              "name": " Pool Makkan Kurma"
            },
            {
              "value": " Thotakoora Cube Kurma",
              "name": " Thotakoora Cube Kurma"
            }
          ]
        },
        {
          name: "   SPECIALTY COUNTER ",
          items: [
            {
              "value": "KOMCHA CHAT (ANY FOUR)",
              "name": "KOMCHA CHAT (ANY FOUR)"
            },
            {
              "value": "Aloo Mutter chat",
              "name": "Aloo Mutter chat"
            },
            {
              "value": "Aloo Tikki",
              "name": "Aloo Tikki"
            },
            {
              "value": " Angoori Dahi Balle",
              "name": " Angoori Dahi Balle"
            },
            {
              "value": " Baby corn Matter",
              "name": " Baby corn Matter"
            },
            {
              "value": " Bhel Puri",
              "name": " Bhel Puri"
            },
            {
              "value": " Daal Muradabadi",
              "name": " Daal Muradabadi"
            },
            {
              "value": " Dahi Puri",
              "name": " Dahi Puri"
            },
            {
              "value": " Dal Chilla",
              "name": " Dal Chilla"
            },
            {
              "value": " Fruit Chat",
              "name": " Fruit Chat"
            },
            {
              "value": " Gudia ke Baal",
              "name": " Gudia ke Baal"
            },
            {
              "value": " Kachori Chat",
              "name": " Kachori Chat"
            },
            {
              "value": " Kaniji Pakodi",
              "name": " Kaniji Pakodi"
            },
            {
              "value": " Mini Kachori",
              "name": " Mini Kachori"
            },
            {
              "value": " Pani Puri 3 type of water",
              "name": " Pani Puri 3 type of water"
            },
            {
              "value": " Raj Kachori",
              "name": " Raj Kachori"
            },
            {
              "value": " Samosa Chat",
              "name": " Samosa Chat"
            },
            {
              "value": " Shaker Kandi Chat",
              "name": " Shaker Kandi Chat"
            },
            {
              "value": " Tomato Kachori",
              "name": " Tomato Kachori"
            }
          ]
        },
        {
          name: " CHINESE (ANY FOUR)",
          items: [
            {
              "value": "Veg Soft Noodles",
              "name": "Veg Soft Noodles"
            },
            {
              "value": " Veg Hakka Noodles",
              "name": " Veg Hakka Noodles"
            },
            {
              "value": "American Chopsue",
              "name": "American Chopsue"
            },
            {
              "value": "Stir Fried Vegetables",
              "name": "Stir Fried Vegetables"
            },
            {
              "value": " Veg Tawa Sizzler",
              "name": " Veg Tawa Sizzler"
            },
            {
              "value": " Chinese Fried Rice",
              "name": " Chinese Fried Rice"
            },
            {
              "value": " Bambina rice",
              "name": " Bambina rice"
            },
            {
              "value": " Corn Cubes",
              "name": " Corn Cubes"
            },
            {
              "value": " Paneer Corn",
              "name": " Paneer Corn"
            }
          ]
        },
        {
          name: " DOSA (ANY FOUR)",
          items:[
            {
              "value": "Plain Dosa",
              "name": "Plain Dosa"
            },
            {
              "value": " Onion Dosa",
              "name": " Onion Dosa"
            },
            {
              "value": "Carrot Dosav",
              "name": "Carrot Dosav"
            },
            {
              "value": " Karam Dosa",
              "name": " Karam Dosa"
            },
            {
              "value": " Neyya Dosa",
              "name": " Neyya Dosa"
            },
            {
              "value": "Butter Dosa",
              "name": "Butter Dosa"
            },
            {
              "value": " Masala Dosa",
              "name": " Masala Dosa"
            },
            {
              "value": "Paneer Dosa",
              "name": "Paneer Dosa"
            },
            {
              "value": "Ragi Dosa",
              "name": "Ragi Dosa"
            },
            {
              "value": " Pesarrarttu with Upma",
              "name": " Pesarrarttu with Upma"
            }
          ]
        },
        
        {
          name: " PANS",
          items: [
            {
              "value": "Pan Sada",
              "name": "Pan Sada"
            },
            {
              "value": "Pan Sweet",
              "name": "Pan Sweet"
            }
          ]
        },
        {
          name: " MINERAL WATER",
          items: [
            {
              "value": "In Glasses",
              "name": "In Glasses"
            },
            {
              "value": "In 200 ml bottles @ Circulation extra cost.",
              "name": "In 200 ml bottles @ Circulation extra cost."
            }
          ]
        },
        
      ]
    },
    {
      name: "Silver",
      categories: [
        {
          name: " -- VEG GOLD -- BEVERAGES (ANY ONE)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": "Sugar Cane (Min. Gathering)",
              "name": "Sugar Cane (Min. Gathering)"
            },
            {
              "value": "Coconut Delight",
              "name": "Coconut Delight"
            },
            {
              "value": "Fruit Punch",
              "name": "Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": "Litchi Punch",
              "name": "Litchi Punch"
            },
            {
              "value": "Grapes Pulpy kulfi",
              "name": "Grapes Pulpy kulfi"
            },
            {
              "value": "Orange Punch",
              "name": "Orange Punch"
            },
            {
              "value": "Irish Milkshake",
              "name": "Irish Milkshake"
            },
            {
              "value": "Thatimunjala Milkshake (Seasonal)",
              "name": "Thatimunjala Milkshake (Seasonal)"
            },
            {
              "value": "Peach Apricot Delight",
              "name": "Peach Apricot Delight"
            },
            {
              "value": " Sharjah",
              "name": " Sharjah"
            },
            {
              "value": " Chicoo Milk shakes",
              "name": " Chicoo Milk shakes"
            },
            {
              "value": "Panakam",
              "name": "Panakam"
            },
            {
              "value": "Cold Badam Milk",
              "name": "Cold Badam Milk"
            },
            {
              "value": " Hot Badam Milk",
              "name": " Hot Badam Milk"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            }
          ]
        },
        {
          name: " WELCOME SWEETS (ANY ONE)",
          items: [
            {
              "value": "Chekkara Pongal",
              "name": "Chekkara Pongal"
            },
            {
              "value": "Poornam",
              "name": "Poornam"
            },
            {
              "value": "Nethi Bobbattlu",
              "name": "Nethi Bobbattlu"
            },
            {
              "value": "Palathalikalu",
              "name": "Palathalikalu"
            },
            {
              "value": "Semiya Saggubiyam Kesar Payasam",
              "name": "Semiya Saggubiyam Kesar Payasam"
            },
            {
              "value": "Chitti Areslu With Nuvvlu",
              "name": "Chitti Areslu With Nuvvlu"
            },
            {
              "value": "Badam Halwa",
              "name": "Badam Halwa"
            },
            {
              "value": "Mixed Fruit Halwa",
              "name": "Mixed Fruit Halwa"
            },
            {
              "value": "Double Ka Meetha",
              "name": "Double Ka Meetha"
            },
            {
              "value": "Carrot Green Mixed Halwa",
              "name": "Carrot Green Mixed Halwa"
            },
            {
              "value": " Qhubani Ka Meetha",
              "name": " Qhubani Ka Meetha"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Litchi Wine",
              "name": " Litchi Wine"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": "Pineapple Jalebi",
              "name": "Pineapple Jalebi"
            },
            {
              "value": " Tawa Mix Sweet",
              "name": " Tawa Mix Sweet"
            },
            {
              "value": " American Mal Puri",
              "name": " American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Gajrela",
              "name": " Gajrela"
            },
            {
              "value": " Basundi Navrang Pan",
              "name": " Basundi Navrang Pan"
            }
          ]
        },
        {
          name: " WELCOME SNACKS (ANY TWO)",
          items: [
            {
              "value": " Cottage Cheese Balls",
              "name": " Cottage Cheese Balls"
            },
            {
              "value": " Cheese Potato Wedges Melt",
              "name": " Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": " Cocktail corn samosa",
              "name": " Cocktail corn samosa"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Fried Red Pepper Kaju",
              "name": " Fried Red Pepper Kaju"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " Red Masala Kaju",
              "name": " Red Masala Kaju"
            },
            {
              "value": " Shangai Rolls",
              "name": " Shangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            },
            {
              "value": "Mint chutney",
              "name": "Mint chutney"
            },
            {
              "value": "Hot garlic sauce",
              "name": "Hot garlic sauce"
            },
            {
              "value": "Garlic mayo",
              "name": "Garlic mayo"
            },
            {
              "value": "Tomato ketchup",
              "name": "Tomato ketchup"
            },
            {
              "value": "Cocktail Sauce",
              "name": "Cocktail Sauce"
            }
          ]
        },
        {
          name: " SALAD ",
          items: [
            {
              "value": "Garden Spring Green Salad",
              "name": "Garden Spring Green Salad"
            },
            {
              "value": "German Potato Salad",
              "name": "German Potato Salad"
            },
            {
              "value": " Sprouts",
              "name": " Sprouts"
            }
          ]
        },
        {
          name: " SOUPS (ANY ONE)",
          items: [
            {
              "value": " Cream of Mushroom Soup",
              "name": " Cream of Mushroom Soup"
            },
            {
              "value": " Cream of Tomato Soup",
              "name": " Cream of Tomato Soup"
            },
            {
              "value": "Lemon Coriander Soup",
              "name": "Lemon Coriander Soup"
            },
            {
              "value": "Minestrone Soup",
              "name": "Minestrone Soup"
            },
            {
              "value": "  Mulligatawny",
              "name": "  Mulligatawny"
            },
            {
              "value": " Potato leaks Soup",
              "name": " Potato leaks Soup"
            },
            {
              "value": "Pumpkin Soup",
              "name": "Pumpkin Soup"
            },
            {
              "value": " Sweet Corn Soup",
              "name": " Sweet Corn Soup"
            },
            {
              "value": "Tomato dhanya Shorba",
              "name": "Tomato dhanya Shorba"
            },
            {
              "value": " Veg. Hot & Sour Soup",
              "name": " Veg. Hot & Sour Soup"
            },
            {
              "value": "Veg. Manchow Soup",
              "name": "Veg. Manchow Soup"
            }
          ]
        },
        {
          name: " DAL (ANY TWO) ",
          items: [
            {
              "value": "Avakai Pappu",
              "name": "Avakai Pappu"
            },
            {
              "value": "Palakora Mamidikaya Pappu",
              "name": "Palakora Mamidikaya Pappu"
            },
            {
              "value": "Ooseri Kaya Pappu",
              "name": "Ooseri Kaya Pappu"
            },
            {
              "value": "Cucumber Dal",
              "name": "Cucumber Dal"
            },
            {
              "value": "Dal Makhani",
              "name": "Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": "Mango Dal",
              "name": "Mango Dal"
            },
            {
              "value": "Plain Dal + Dappadam",
              "name": "Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": "Dal Jaipuri",
              "name": "Dal Jaipuri"
            }
          ]
        },
        {
          name: " VEG FRIES(ANY ONE)",
          items: [
            {
              "value": "Thotakoora Liver Fry",
              "name": "Thotakoora Liver Fry"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Aloo Allam Pachi Mirchi Fry",
              "name": " Baby Aloo Allam Pachi Mirchi Fry"
            },
            {
              "value": " Baby Corn 65",
              "name": " Baby Corn 65"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": " Capsicum Sanaga Kaaram",
              "name": " Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Corn Liver Fry",
              "name": " Corn Liver Fry"
            },
            {
              "value": " Dam Aloo Kashmiri",
              "name": " Dam Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Kandi Liver Fry",
              "name": " Kandi Liver Fry"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Mushroom Hara Pyaz",
              "name": " Mushroom Hara Pyaz"
            },
            {
              "value": " Mushroom Ulavacharu Iguru",
              "name": " Mushroom Ulavacharu Iguru"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY ONE)",
          items: [
            {
              "value": " Baby corn, Cashew Full Nuts",
              "name": " Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": " Tomato, Drumstick",
              "name": " Tomato, Drumstick"
            }
          ]
        },
        {
          name: " STANDARD ITEMS (ANY TWO)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": " Mysore Rasam",
              "name": " Mysore Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": " Mix Veg. Sambar",
              "name": " Mix Veg. Sambar"
            },
            {
              "value": " Madras Onion Sambar",
              "name": " Madras Onion Sambar"
            }
          ]
        },
        {
          name: " PICKLES (ANY TWO)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Dosakya Avakai",
              "name": "Dosakya Avakai"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": "Garlic Cashew Full nuts",
              "name": "Garlic Cashew Full nuts"
            },
            {
              "value": "Kotta Avakai",
              "name": "Kotta Avakai"
            },
            {
              "value": "Lemon",
              "name": "Lemon"
            },
            {
              "value": "Madras Onion",
              "name": "Madras Onion"
            },
            {
              "value": "Mixed Veg",
              "name": "Mixed Veg"
            },
            {
              "value": "Raw Papaya",
              "name": "Raw Papaya"
            }
          ]
        },
        {
          name: " GRINDED CHUTNIES (ANY TWO)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": " Brinjal, Tomato, Cucumber",
              "name": " Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Chukkakura Kandi Pachadi",
              "name": " Chukkakura Kandi Pachadi"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Cabbage",
              "name": " Cabbage"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": " Kandi Pachadi",
              "name": " Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": "  Pachi Tomato Chutney",
              "name": "  Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: " FRYUMS",
          items: [
            {
              "value": "AppadamPoolu",
              "name": "AppadamPoolu"
            },
            {
              "value": " Minapa Vadiyalu",
              "name": " Minapa Vadiyalu"
            },
            {
              "value": " Voora Mirapakayalu",
              "name": " Voora Mirapakayalu"
            }
          ]
        },
        {
          name: " CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            }
          ]
        },
        {
          name: " ICE CREAMS (ANY TWO)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": " Butter Scotch",
              "name": " Butter Scotch"
            },
            {
              "value": "Black Current",
              "name": "Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": " Caramel nuts",
              "name": " Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": "Kaju & Kismis",
              "name": "Kaju & Kismis"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Pista",
              "name": "Pista"
            },
            {
              "value": "Seetafal",
              "name": "Seetafal"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },

        {
          name: " HOTS (ANY ONE)",
          items: [
            {
              "value": "Ajwan Pakodi",
              "name": "Ajwan Pakodi"
            },
            {
              "value": " Capsicum Bhajji",
              "name": " Capsicum Bhajji"
            },
            {
              "value": " Gaare with tomato chutney",
              "name": " Gaare with tomato chutney"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Madras Pakodi (Round)",
              "name": " Madras Pakodi (Round)"
            },
            {
              "value": " Mealmaker Keema Wada",
              "name": " Mealmaker Keema Wada"
            },
            {
              "value": " Mini Alsanda Wada",
              "name": " Mini Alsanda Wada"
            },
            {
              "value": " Mini Corn Samosa",
              "name": " Mini Corn Samosa"
            },
            {
              "value": " Mini Perugu Aawada",
              "name": " Mini Perugu Aawada"
            },
            {
              "value": " Nellore Chitti Gaare",
              "name": " Nellore Chitti Gaare"
            },
            {
              "value": " Paneer Wada",
              "name": " Paneer Wada"
            },
            {
              "value": " Pudina Masala Wada",
              "name": " Pudina Masala Wada"
            },
            {
              "value": " Shangai Roll",
              "name": " Shangai Roll"
            },
            {
              "value": " Vamu Mirchi Bajji",
              "name": " Vamu Mirchi Bajji"
            },
            {
              "value": " Veg Bullet",
              "name": " Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Veg. Lolly Pop",
              "name": " Veg. Lolly Pop"
            },
            {
              "value": " Veg. Roll",
              "name": " Veg. Roll"
            },
            {
              "value": " Cucumber 65",
              "name": " Cucumber 65"
            }
          ]
        },
        {
          name: "ROTIES (ANY ONE)",
          items: [
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            },
            {
              "value": " Achari Roti",
              "name": " Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Besan Ke Roti",
              "name": "Besan Ke Roti"
            },
            {
              "value": " Butter Naan",
              "name": " Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": " Cheese Kulcha",
              "name": " Cheese Kulcha"
            },
            {
              "value": " Jonna Roti",
              "name": " Jonna Roti"
            },
            {
              "value": " Kottimeera Parota",
              "name": " Kottimeera Parota"
            },
            {
              "value": " Laccha Parota",
              "name": " Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": " Masala Parota",
              "name": " Masala Parota"
            },
            {
              "value": " Palak Parota",
              "name": " Palak Parota"
            },
            {
              "value": " Pista Parota",
              "name": " Pista Parota"
            },
            {
              "value": " Plain Kulcha",
              "name": " Plain Kulcha"
            },
            {
              "value": "  Plain Naan",
              "name": "  Plain Naan"
            },
            {
              "value": " Plain Parota",
              "name": " Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": " Pulkha",
              "name": " Pulkha"
            }
          ]
        },
        {
          name: " SPECIAL RICES - FLAVORED RICE - PULAO - BIRYANI’S -(ANY ONE)",
          items: [
            {
              "value": " Chintapandu Pulihora",
              "name": " Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": " Dabbakaya Pulihora",
              "name": " Dabbakaya Pulihora"
            },
            {
              "value": " Nimmakaya Pulihora",
              "name": " Nimmakaya Pulihora"
            },
            {
              "value": " Pudina Rice",
              "name": " Pudina Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Koemera Rice",
              "name": " Koemera Rice"
            },
            {
              "value": " Coconut Rice",
              "name": " Coconut Rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": "Corn Methi Pulao",
              "name": "Corn Methi Pulao"
            },
            {
              "value": "Veg Pulao",
              "name": "Veg Pulao"
            },
            {
              "value": "Kashmiri Pulao",
              "name": "Kashmiri Pulao"
            },
            {
              "value": "Fresh Green Peas Pulao",
              "name": "Fresh Green Peas Pulao"
            },
            {
              "value": "Veg SaffronPulao",
              "name": "Veg SaffronPulao"
            },
            {
              "value": " Bilal Mushroom Biryani with katta",
              "name": " Bilal Mushroom Biryani with katta"
            },
            {
              "value": " Bilal Panasakaya Biryani with Katta",
              "name": " Bilal Panasakaya Biryani with Katta"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": " Aloo Pudina Biryani",
              "name": " Aloo Pudina Biryani"
            },
            {
              "value": " Hyderabadi Ulavacharu dum Biryani",
              "name": " Hyderabadi Ulavacharu dum Biryani"
            },
            {
              "value": " Paneer & Baby corn Biryani",
              "name": " Paneer & Baby corn Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            }
          ]
        },
        {
          name: " PLAIN RICE ",
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: " KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "Butter Paneer Kurma",
              "name": "Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": " Methi Chaman",
              "name": " Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Tikka Masala",
              "name": " Paneer Tikka Masala"
            },
            {
              "value": " Paneer Moghlai Masala",
              "name": " Paneer Moghlai Masala"
            },
            {
              "value": "Paneer Sagwala",
              "name": "Paneer Sagwala"
            },
            {
              "value": " Palak Paneer",
              "name": " Palak Paneer"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": " PaneerButter Masala",
              "name": " PaneerButter Masala"
            },
            {
              "value": " Shahi Paneer Kurma",
              "name": " Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: " VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Kaju Kurma",
              "name": "Aloo Capsicum Kaju Kurma"
            },
            {
              "value": " Aloo Scoop Kurma",
              "name": " Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": " Mixed Veg Kurma",
              "name": " Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": " Nilgeri Kurma",
              "name": " Nilgeri Kurma"
            },
            {
              "value": " Pool Makkan Kurma",
              "name": " Pool Makkan Kurma"
            },
            {
              "value": " Thotakoora Cube Kurma",
              "name": " Thotakoora Cube Kurma"
            }
          ]
        },
        {
          name: " MINERAL WATER",
          items: [
            {
              "value": "In Glasses",
              "name": "In Glasses"
            },
            {
              "value": "In 200 ml bottles @ Circulation extra cost.",
              "name": "In 200 ml bottles @ Circulation extra cost."
            }
          ]
        },
      ],
      nonVegCategories: [
        {
          name: " -- VEG GOLD -- BEVERAGES (ANY ONE)",
          items: [
            {
              "value": "Water Melon",
              "name": "Water Melon"
            },
            {
              "value": "Pineapple",
              "name": "Pineapple"
            },
            {
              "value": "Musk Melon",
              "name": "Musk Melon"
            },
            {
              "value": "Sugar Cane (Min. Gathering)",
              "name": "Sugar Cane (Min. Gathering)"
            },
            {
              "value": "Coconut Delight",
              "name": "Coconut Delight"
            },
            {
              "value": "Fruit Punch",
              "name": "Fruit Punch"
            },
            {
              "value": "Mango Masti",
              "name": "Mango Masti"
            },
            {
              "value": "Litchi Punch",
              "name": "Litchi Punch"
            },
            {
              "value": "Grapes Pulpy kulfi",
              "name": "Grapes Pulpy kulfi"
            },
            {
              "value": "Orange Punch",
              "name": "Orange Punch"
            },
            {
              "value": "Irish Milkshake",
              "name": "Irish Milkshake"
            },
            {
              "value": "Thatimunjala Milkshake (Seasonal)",
              "name": "Thatimunjala Milkshake (Seasonal)"
            },
            {
              "value": "Peach Apricot Delight",
              "name": "Peach Apricot Delight"
            },
            {
              "value": " Sharjah",
              "name": " Sharjah"
            },
            {
              "value": " Chicoo Milk shakes",
              "name": " Chicoo Milk shakes"
            },
            {
              "value": "Panakam",
              "name": "Panakam"
            },
            {
              "value": "Cold Badam Milk",
              "name": "Cold Badam Milk"
            },
            {
              "value": " Hot Badam Milk",
              "name": " Hot Badam Milk"
            },
            {
              "value": " Soft drinks",
              "name": " Soft drinks"
            }
          ]
        },
        {
          name: " WELCOME SWEETS (ANY ONE)",
          items: [
            {
              "value": "Chekkara Pongal",
              "name": "Chekkara Pongal"
            },
            {
              "value": "Poornam",
              "name": "Poornam"
            },
            {
              "value": "Nethi Bobbattlu",
              "name": "Nethi Bobbattlu"
            },
            {
              "value": "Palathalikalu",
              "name": "Palathalikalu"
            },
            {
              "value": "Semiya Saggubiyam Kesar Payasam",
              "name": "Semiya Saggubiyam Kesar Payasam"
            },
            {
              "value": "Chitti Areslu With Nuvvlu",
              "name": "Chitti Areslu With Nuvvlu"
            },
            {
              "value": "Badam Halwa",
              "name": "Badam Halwa"
            },
            {
              "value": "Mixed Fruit Halwa",
              "name": "Mixed Fruit Halwa"
            },
            {
              "value": "Double Ka Meetha",
              "name": "Double Ka Meetha"
            },
            {
              "value": "Carrot Green Mixed Halwa",
              "name": "Carrot Green Mixed Halwa"
            },
            {
              "value": " Qhubani Ka Meetha",
              "name": " Qhubani Ka Meetha"
            },
            {
              "value": " Junnu",
              "name": " Junnu"
            },
            {
              "value": " Litchi Wine",
              "name": " Litchi Wine"
            },
            {
              "value": " Pistabhog",
              "name": " Pistabhog"
            },
            {
              "value": " Dry Chum Chum",
              "name": " Dry Chum Chum"
            },
            {
              "value": " Honey Belam Jalebi",
              "name": " Honey Belam Jalebi"
            },
            {
              "value": "Pineapple Jalebi",
              "name": "Pineapple Jalebi"
            },
            {
              "value": " Tawa Mix Sweet",
              "name": " Tawa Mix Sweet"
            },
            {
              "value": " American Mal Puri",
              "name": " American Mal Puri"
            },
            {
              "value": " Baked Rasgulla",
              "name": " Baked Rasgulla"
            },
            {
              "value": " Gajrela",
              "name": " Gajrela"
            },
            {
              "value": " Basundi Navrang Pan",
              "name": " Basundi Navrang Pan"
            }
          ]
        },
        {
          name: "VEG WELCOME SNACKS (ANY TWO) - DIPS & SPREADS -",
          items: [
            {
              "value": " Cottage Cheese Balls",
              "name": " Cottage Cheese Balls"
            },
            {
              "value": " Cheese Potato Wedges Melt",
              "name": " Cheese Potato Wedges Melt"
            },
            {
              "value": " Cheese Tart",
              "name": " Cheese Tart"
            },
            {
              "value": " Cocktail corn samosa",
              "name": " Cocktail corn samosa"
            },
            {
              "value": " Corn Palak Roll",
              "name": " Corn Palak Roll"
            },
            {
              "value": " Crunchy Baby Corn",
              "name": " Crunchy Baby Corn"
            },
            {
              "value": " Cut Mirchi",
              "name": " Cut Mirchi"
            },
            {
              "value": " Fried Red Pepper Kaju",
              "name": " Fried Red Pepper Kaju"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Golden Fried Baby Corn",
              "name": " Golden Fried Baby Corn"
            },
            {
              "value": " Hara bhara Kabab",
              "name": " Hara bhara Kabab"
            },
            {
              "value": " Masala Potato Fingers",
              "name": " Masala Potato Fingers"
            },
            {
              "value": " Paneer Kesar Tikka",
              "name": " Paneer Kesar Tikka"
            },
            {
              "value": " Paneer Shashlik",
              "name": " Paneer Shashlik"
            },
            {
              "value": " Potato Croquettes",
              "name": " Potato Croquettes"
            },
            {
              "value": " Red Masala Kaju",
              "name": " Red Masala Kaju"
            },
            {
              "value": " Shangai Rolls",
              "name": " Shangai Rolls"
            },
            {
              "value": " Smile Hearts",
              "name": " Smile Hearts"
            },
            {
              "value": " Veg. Corn Rolls",
              "name": " Veg. Corn Rolls"
            },
            {
              "value": " Veg. Seekh Kabab",
              "name": " Veg. Seekh Kabab"
            },
            {
              "value": " Veg. Shashlik",
              "name": " Veg. Shashlik"
            },
            {
              "value": " Veg. Tart",
              "name": " Veg. Tart"
            },
            {
              "value": "Mint chutney",
              "name": "Mint chutney"
            },
            {
              "value": "Hot garlic sauce",
              "name": "Hot garlic sauce"
            },
            {
              "value": "Garlic mayo",
              "name": "Garlic mayo"
            },
            {
              "value": "Tomato ketchup",
              "name": "Tomato ketchup"
            },
            {
              "value": "Cocktail Sauce",
              "name": "Cocktail Sauce"
            }
          ]
        },
        {
          name: " -SEA FOOD SNACKS CHICKEN SNACKS (ANY TWO) - MUTTON SNACKS (ANY ONE) -",
          items: [
            {
              "value": " Pepper Chicken",
              "name": " Pepper Chicken"
            },
            {
              "value": " Chicken Pakodi",
              "name": " Chicken Pakodi"
            },
            {
              "value": " Chilli Chicken",
              "name": " Chilli Chicken"
            },
            {
              "value": " Chicken Majestic",
              "name": " Chicken Majestic"
            },
            {
              "value": " Chicken 65",
              "name": " Chicken 65"
            },
            {
              "value": " Chicken Sate",
              "name": " Chicken Sate"
            },
            {
              "value": " Chicken Afghani",
              "name": " Chicken Afghani"
            },
            {
              "value": " Fried Chicken",
              "name": " Fried Chicken"
            },
            {
              "value": " Chicken Drumsticks",
              "name": " Chicken Drumsticks"
            },
            {
              "value": " Chicken Lollypops",
              "name": " Chicken Lollypops"
            },
            {
              "value": " Lemon Chicken",
              "name": " Lemon Chicken"
            },
            {
              "value": " Chicken Manchurian",
              "name": " Chicken Manchurian"
            },
            {
              "value": " Reshmi Chicken",
              "name": " Reshmi Chicken"
            },
            {
              "value": " Chicken Harialyali Tikka",
              "name": " Chicken Harialyali Tikka"
            },
            {
              "value": " Chicken Mogali",
              "name": " Chicken Mogali"
            },
            {
              "value": " Chicken Malai Tikka",
              "name": " Chicken Malai Tikka"
            },
            {
              "value": " Bar-be-que Chicken",
              "name": " Bar-be-que Chicken"
            },
            {
              "value": " Chicken Springli",
              "name": " Chicken Springli"
            },
            {
              "value": " Chicken Tandoori Kabab",
              "name": " Chicken Tandoori Kabab"
            },
            {
              "value": " Ginger Chicken",
              "name": " Ginger Chicken"
            },
            {
              "value": " Drums of Heaven",
              "name": " Drums of Heaven"
            },
            {
              "value": " Achari Murg Tikka",
              "name": " Achari Murg Tikka"
            },
            {
              "value": " Murg Gulafi Tikka",
              "name": " Murg Gulafi Tikka"
            },
            {
              "value": "  Chicken Shashlik",
              "name": "  Chicken Shashlik"
            },
            {
              "value": "  Chicken Small Fingers",
              "name": "  Chicken Small Fingers"
            },
            {
              "value": " Spicy Chicken",
              "name": " Spicy Chicken"
            },
            {
              "value": " Amritsari Chicken",
              "name": " Amritsari Chicken"
            },
            {
              "value": " Chicken Wings",
              "name": " Chicken Wings"
            },
            {
              "value": " Grilled Chicken",
              "name": " Grilled Chicken"
            },
            {
              "value": " Fried Corn Chicken",
              "name": " Fried Corn Chicken"
            },
            {
              "value": " Mutton Sheek Kabab",
              "name": " Mutton Sheek Kabab"
            },
            {
              "value": " Mutton Keema Balls",
              "name": " Mutton Keema Balls"
            },
            {
              "value": " Pattar ka Gosh",
              "name": " Pattar ka Gosh"
            },
            {
              "value": " Mutton Boti Kabab",
              "name": " Mutton Boti Kabab"
            },
            {
              "value": " Mutton Shami Kabab",
              "name": " Mutton Shami Kabab"
            },
            {
              "value": " Zingara Mutton Sheek",
              "name": " Zingara Mutton Sheek"
            },
            {
              "value": " Mutton Chops",
              "name": " Mutton Chops"
            },
            {
              "value": " Pepper Mutton",
              "name": " Pepper Mutton"
            },
            {
              "value": " Spicy Fish Fry",
              "name": " Spicy Fish Fry"
            },
            {
              "value": " Apollo Fish",
              "name": " Apollo Fish"
            },
            {
              "value": " Fired Fish",
              "name": " Fired Fish"
            },
            {
              "value": " Fish Fingers",
              "name": " Fish Fingers"
            },
            {
              "value": " Pepper Fish",
              "name": " Pepper Fish"
            },
            {
              "value": " Fish Bullets",
              "name": " Fish Bullets"
            },
            {
              "value": " Fish Lal Mirchi Tikka",
              "name": " Fish Lal Mirchi Tikka"
            },
            {
              "value": " Fish Amritsari Tikka",
              "name": " Fish Amritsari Tikka"
            },
            {
              "value": " Tawa Fish",
              "name": " Tawa Fish"
            },
            {
              "value": " Lady Fish Fingers",
              "name": " Lady Fish Fingers"
            },
            {
              "value": " Fish Pomfret",
              "name": " Fish Pomfret"
            },
            {
              "value": " Crispy Chilli Fish",
              "name": " Crispy Chilli Fish"
            },
            {
              "value": " Golden Fired Prawns",
              "name": " Golden Fired Prawns"
            },
            {
              "value": " Prawns Pakodi",
              "name": " Prawns Pakodi"
            },
            {
              "value": " Chilli Garlic Prawns",
              "name": " Chilli Garlic Prawns"
            },
            {
              "value": " Grilled Prawns",
              "name": " Grilled Prawns"
            },
            {
              "value": "Loose Prawns",
              "name": "Loose Prawns"
            },
            {
              "value": " Stuffed Crab",
              "name": " Stuffed Crab"
            },
            {
              "value": " Crab Keema Balls",
              "name": " Crab Keema Balls"
            }
          ]
        },
        {
          name: " SALAD ",
          items: [
            {
              "value": "Garden Spring Green Salad",
              "name": "Garden Spring Green Salad"
            },
            {
              "value": "German Potato Salad",
              "name": "German Potato Salad"
            },
            {
              "value": " Sprouts",
              "name": " Sprouts"
            }
          ]
        },
        {
          name: " SOUPS (ANY ONE)",
          items: [
            {
              "value": " Cream of Mushroom Soup",
              "name": " Cream of Mushroom Soup"
            },
            {
              "value": " Cream of Tomato Soup",
              "name": " Cream of Tomato Soup"
            },
            {
              "value": "Lemon Coriander Soup",
              "name": "Lemon Coriander Soup"
            },
            {
              "value": "Minestrone Soup",
              "name": "Minestrone Soup"
            },
            {
              "value": "  Mulligatawny",
              "name": "  Mulligatawny"
            },
            {
              "value": " Potato leaks Soup",
              "name": " Potato leaks Soup"
            },
            {
              "value": "Pumpkin Soup",
              "name": "Pumpkin Soup"
            },
            {
              "value": " Sweet Corn Soup",
              "name": " Sweet Corn Soup"
            },
            {
              "value": "Tomato dhanya Shorba",
              "name": "Tomato dhanya Shorba"
            },
            {
              "value": " Veg. Hot & Sour Soup",
              "name": " Veg. Hot & Sour Soup"
            },
            {
              "value": "Veg. Manchow Soup",
              "name": "Veg. Manchow Soup"
            }
          ]
        },
        {
          name: " DAL (ANY TWO) ",
          items: [
            {
              "value": "Avakai Pappu",
              "name": "Avakai Pappu"
            },
            {
              "value": "Palakora Mamidikaya Pappu",
              "name": "Palakora Mamidikaya Pappu"
            },
            {
              "value": "Ooseri Kaya Pappu",
              "name": "Ooseri Kaya Pappu"
            },
            {
              "value": "Cucumber Dal",
              "name": "Cucumber Dal"
            },
            {
              "value": "Dal Makhani",
              "name": "Dal Makhani"
            },
            {
              "value": "Dal Tadka",
              "name": "Dal Tadka"
            },
            {
              "value": "Leaf Dal",
              "name": "Leaf Dal"
            },
            {
              "value": "Mango Dal",
              "name": "Mango Dal"
            },
            {
              "value": "Plain Dal + Dappadam",
              "name": "Plain Dal + Dappadam"
            },
            {
              "value": "Tomato Dal",
              "name": "Tomato Dal"
            },
            {
              "value": "Dal Pancharangi",
              "name": "Dal Pancharangi"
            },
            {
              "value": "Dal Jaipuri",
              "name": "Dal Jaipuri"
            }
          ]
        },
        {
          name: " VEG FRIES(ANY ONE)",
          items: [
            {
              "value": "Thotakoora Liver Fry",
              "name": "Thotakoora Liver Fry"
            },
            {
              "value": " Aloo Jeera",
              "name": " Aloo Jeera"
            },
            {
              "value": " Aloo Methi",
              "name": " Aloo Methi"
            },
            {
              "value": " Aratikaya, Allam Green Mirchi Fry",
              "name": " Aratikaya, Allam Green Mirchi Fry"
            },
            {
              "value": " Baby Aloo Allam Pachi Mirchi Fry",
              "name": " Baby Aloo Allam Pachi Mirchi Fry"
            },
            {
              "value": " Baby Corn 65",
              "name": " Baby Corn 65"
            },
            {
              "value": " Baby Corn Aloo Ullibonda, Fry",
              "name": " Baby Corn Aloo Ullibonda, Fry"
            },
            {
              "value": " Baby Corn Ulavacharu Iguru",
              "name": " Baby Corn Ulavacharu Iguru"
            },
            {
              "value": " Baru Vankaya Masala",
              "name": " Baru Vankaya Masala"
            },
            {
              "value": " Beans,Carrot,Aloo Ullibonda Fry",
              "name": " Beans,Carrot,Aloo Ullibonda Fry"
            },
            {
              "value": " Bendi Jaipuri",
              "name": " Bendi Jaipuri"
            },
            {
              "value": " Bendi, Kobbari, Cashew fry",
              "name": " Bendi, Kobbari, Cashew fry"
            },
            {
              "value": " Beerakaya Meal Maker Keema Fry",
              "name": " Beerakaya Meal Maker Keema Fry"
            },
            {
              "value": " Brinjal Pakodi Fry",
              "name": " Brinjal Pakodi Fry"
            },
            {
              "value": " Capsicum Sanaga Kaaram",
              "name": " Capsicum Sanaga Kaaram"
            },
            {
              "value": " Carrot, Beans, Aalu, Paneer Fry",
              "name": " Carrot, Beans, Aalu, Paneer Fry"
            },
            {
              "value": " Chemadumpa Finger Chips",
              "name": " Chemadumpa Finger Chips"
            },
            {
              "value": " Corn Liver Fry",
              "name": " Corn Liver Fry"
            },
            {
              "value": " Dam Aloo Kashmiri",
              "name": " Dam Aloo Kashmiri"
            },
            {
              "value": " Dondakai Cheelikala Pakodi Fry",
              "name": " Dondakai Cheelikala Pakodi Fry"
            },
            {
              "value": " Gobi 65",
              "name": " Gobi 65"
            },
            {
              "value": " Gobi Adraki",
              "name": " Gobi Adraki"
            },
            {
              "value": " Kanda Porutu",
              "name": " Kanda Porutu"
            },
            {
              "value": " Kandi Liver Fry",
              "name": " Kandi Liver Fry"
            },
            {
              "value": " Makai Palak",
              "name": " Makai Palak"
            },
            {
              "value": " Methi Malai Mutter",
              "name": " Methi Malai Mutter"
            },
            {
              "value": " Mushroom Fry",
              "name": " Mushroom Fry"
            },
            {
              "value": " Mushroom Hara Pyaz",
              "name": " Mushroom Hara Pyaz"
            },
            {
              "value": " Mushroom Ulavacharu Iguru",
              "name": " Mushroom Ulavacharu Iguru"
            },
            {
              "value": " Paneer Porutu",
              "name": " Paneer Porutu"
            },
            {
              "value": " Pansapottu Iguru",
              "name": " Pansapottu Iguru"
            },
            {
              "value": " Round Brinjal Sanaga Kaaram",
              "name": " Round Brinjal Sanaga Kaaram"
            }
          ]
        },
        {
          name: "GRAVY CURRIES (ANY ONE)",
          items: [
            {
              "value": " Baby corn, Cashew Full Nuts",
              "name": " Baby corn, Cashew Full Nuts"
            },
            {
              "value": " Battai Tonala Masala",
              "name": " Battai Tonala Masala"
            },
            {
              "value": " Beerakaya Chanaga Pappu Masala",
              "name": " Beerakaya Chanaga Pappu Masala"
            },
            {
              "value": " Bottle Gourd (Soorakaya Masala)",
              "name": " Bottle Gourd (Soorakaya Masala)"
            },
            {
              "value": " Brinjal, Tomato, Drumstick",
              "name": " Brinjal, Tomato, Drumstick"
            },
            {
              "value": " Cauliflower Tomato",
              "name": " Cauliflower Tomato"
            },
            {
              "value": " Cucumber, Cashew Nuts",
              "name": " Cucumber, Cashew Nuts"
            },
            {
              "value": " Cucumber, Tomato, Drumstick",
              "name": " Cucumber, Tomato, Drumstick"
            },
            {
              "value": " Gongura Macaroni Curry",
              "name": " Gongura Macaroni Curry"
            },
            {
              "value": " Gongura Phool Makhani Curry",
              "name": " Gongura Phool Makhani Curry"
            },
            {
              "value": " Gongura Sanagapappu",
              "name": " Gongura Sanagapappu"
            },
            {
              "value": " Mushroom, Cashew Full Nuts",
              "name": " Mushroom, Cashew Full Nuts"
            },
            {
              "value": " Natu chikkudukaya Curry",
              "name": " Natu chikkudukaya Curry"
            },
            {
              "value": " Round Brinjal",
              "name": " Round Brinjal"
            },
            {
              "value": " Tomato, Drumstick",
              "name": " Tomato, Drumstick"
            }
          ]
        },
        {
          name: " STANDARD ITEMS (ANY TWO)",
          items: [
            {
              "value": "Ulavacharu + Cream",
              "name": "Ulavacharu + Cream"
            },
            {
              "value": " Beetroot Rasam",
              "name": " Beetroot Rasam"
            },
            {
              "value": " Mysore Rasam",
              "name": " Mysore Rasam"
            },
            {
              "value": "Pepper Rasam",
              "name": "Pepper Rasam"
            },
            {
              "value": " Tomato Rasam",
              "name": " Tomato Rasam"
            },
            {
              "value": " Pachi Pulusu",
              "name": " Pachi Pulusu"
            },
            {
              "value": " Pesara Pappu CharuNethi Talimpu",
              "name": " Pesara Pappu CharuNethi Talimpu"
            },
            {
              "value": " Mix Veg. Sambar",
              "name": " Mix Veg. Sambar"
            },
            {
              "value": " Madras Onion Sambar",
              "name": " Madras Onion Sambar"
            }
          ]
        },
        {
          name: " PICKLES (ANY TWO)",
          items: [
            {
              "value": "Cauliflower",
              "name": "Cauliflower"
            },
            {
              "value": "Chikkudukaya",
              "name": "Chikkudukaya"
            },
            {
              "value": " Chow Chow",
              "name": " Chow Chow"
            },
            {
              "value": "Dosakya Avakai",
              "name": "Dosakya Avakai"
            },
            {
              "value": "Gongura Pandumirchi",
              "name": "Gongura Pandumirchi"
            },
            {
              "value": "Garlic Cashew Full nuts",
              "name": "Garlic Cashew Full nuts"
            },
            {
              "value": "Kotta Avakai",
              "name": "Kotta Avakai"
            },
            {
              "value": "Lemon",
              "name": "Lemon"
            },
            {
              "value": "Madras Onion",
              "name": "Madras Onion"
            },
            {
              "value": "Mixed Veg",
              "name": "Mixed Veg"
            },
            {
              "value": "Raw Papaya",
              "name": "Raw Papaya"
            }
          ]
        },
        {
          name: " GRINDED CHUTNIES (ANY TWO)",
          items: [
            {
              "value": "Beerakaya, Dondakai",
              "name": "Beerakaya, Dondakai"
            },
            {
              "value": " Brinjal, Tomato, Cucumber",
              "name": " Brinjal, Tomato, Cucumber"
            },
            {
              "value": " Dondakai Pachadi",
              "name": " Dondakai Pachadi"
            },
            {
              "value": " Dosakaya Mukkala Chutney",
              "name": " Dosakaya Mukkala Chutney"
            },
            {
              "value": " Chukkakura Kandi Pachadi",
              "name": " Chukkakura Kandi Pachadi"
            },
            {
              "value": " Gongura Onion",
              "name": " Gongura Onion"
            },
            {
              "value": " Cabbage",
              "name": " Cabbage"
            },
            {
              "value": " Green Chilli & Apple Pachadi",
              "name": " Green Chilli & Apple Pachadi"
            },
            {
              "value": " Kandi Pachadi",
              "name": " Kandi Pachadi"
            },
            {
              "value": " Kobbari Chintakaya Pachadi",
              "name": " Kobbari Chintakaya Pachadi"
            },
            {
              "value": " Mango Thururnu",
              "name": " Mango Thururnu"
            },
            {
              "value": " Pachi Jamakaya Chutney",
              "name": " Pachi Jamakaya Chutney"
            },
            {
              "value": "  Pachi Tomato Chutney",
              "name": "  Pachi Tomato Chutney"
            }
          ]
        },
        {
          name: " FRYUMS",
          items: [
            {
              "value": "AppadamPoolu",
              "name": "AppadamPoolu"
            },
            {
              "value": " Minapa Vadiyalu",
              "name": " Minapa Vadiyalu"
            },
            {
              "value": " Voora Mirapakayalu",
              "name": " Voora Mirapakayalu"
            }
          ]
        },
        {
          name: " CURD ITEMS",
          items: [
            {
              "value": "Curd in Pot",
              "name": "Curd in Pot"
            }
          ]
        },
        {
          name: " ICE CREAMS (ANY TWO)",
          items: [
            {
              "value": "Vanilla",
              "name": "Vanilla"
            },
            {
              "value": " Butter Scotch",
              "name": " Butter Scotch"
            },
            {
              "value": "Black Current",
              "name": "Black Current"
            },
            {
              "value": "Chocolate",
              "name": "Chocolate"
            },
            {
              "value": " Caramel nuts",
              "name": " Caramel nuts"
            },
            {
              "value": "Jello-mello",
              "name": "Jello-mello"
            },
            {
              "value": "Kaju & Kismis",
              "name": "Kaju & Kismis"
            },
            {
              "value": "Mango",
              "name": "Mango"
            },
            {
              "value": "Orange",
              "name": "Orange"
            },
            {
              "value": "Pista",
              "name": "Pista"
            },
            {
              "value": "Seetafal",
              "name": "Seetafal"
            },
            {
              "value": "Straw Berry",
              "name": "Straw Berry"
            }
          ]
        },

        {
          name: " HOTS (ANY ONE)",
          items: [
            {
              "value": "Ajwan Pakodi",
              "name": "Ajwan Pakodi"
            },
            {
              "value": " Capsicum Bhajji",
              "name": " Capsicum Bhajji"
            },
            {
              "value": " Gaare with tomato chutney",
              "name": " Gaare with tomato chutney"
            },
            {
              "value": " Gold Coin",
              "name": " Gold Coin"
            },
            {
              "value": " Madras Pakodi (Round)",
              "name": " Madras Pakodi (Round)"
            },
            {
              "value": " Mealmaker Keema Wada",
              "name": " Mealmaker Keema Wada"
            },
            {
              "value": " Mini Alsanda Wada",
              "name": " Mini Alsanda Wada"
            },
            {
              "value": " Mini Corn Samosa",
              "name": " Mini Corn Samosa"
            },
            {
              "value": " Mini Perugu Aawada",
              "name": " Mini Perugu Aawada"
            },
            {
              "value": " Nellore Chitti Gaare",
              "name": " Nellore Chitti Gaare"
            },
            {
              "value": " Paneer Wada",
              "name": " Paneer Wada"
            },
            {
              "value": " Pudina Masala Wada",
              "name": " Pudina Masala Wada"
            },
            {
              "value": " Shangai Roll",
              "name": " Shangai Roll"
            },
            {
              "value": " Vamu Mirchi Bajji",
              "name": " Vamu Mirchi Bajji"
            },
            {
              "value": " Veg Bullet",
              "name": " Veg Bullet"
            },
            {
              "value": " Veg Spring Rolls",
              "name": " Veg Spring Rolls"
            },
            {
              "value": " Veg. Lolly Pop",
              "name": " Veg. Lolly Pop"
            },
            {
              "value": " Veg. Roll",
              "name": " Veg. Roll"
            },
            {
              "value": " Cucumber 65",
              "name": " Cucumber 65"
            }
          ]
        },
        {
          name: "ROTIES (ANY ONE)",
          items: [
            {
              "value": "Tandoori Roti",
              "name": "Tandoori Roti"
            },
            {
              "value": " Rumali Roti",
              "name": " Rumali Roti"
            },
            {
              "value": " Achari Roti",
              "name": " Achari Roti"
            },
            {
              "value": "Baby Nan",
              "name": "Baby Nan"
            },
            {
              "value": "Besan Ke Roti",
              "name": "Besan Ke Roti"
            },
            {
              "value": " Butter Naan",
              "name": " Butter Naan"
            },
            {
              "value": "Butter Roti",
              "name": "Butter Roti"
            },
            {
              "value": " Cheese Kulcha",
              "name": " Cheese Kulcha"
            },
            {
              "value": " Jonna Roti",
              "name": " Jonna Roti"
            },
            {
              "value": " Kottimeera Parota",
              "name": " Kottimeera Parota"
            },
            {
              "value": " Laccha Parota",
              "name": " Laccha Parota"
            },
            {
              "value": " Masala Kulcha",
              "name": " Masala Kulcha"
            },
            {
              "value": " Masala Parota",
              "name": " Masala Parota"
            },
            {
              "value": " Palak Parota",
              "name": " Palak Parota"
            },
            {
              "value": " Pista Parota",
              "name": " Pista Parota"
            },
            {
              "value": " Plain Kulcha",
              "name": " Plain Kulcha"
            },
            {
              "value": "  Plain Naan",
              "name": "  Plain Naan"
            },
            {
              "value": " Plain Parota",
              "name": " Plain Parota"
            },
            {
              "value": " Pudina Parota",
              "name": " Pudina Parota"
            },
            {
              "value": " Pulkha",
              "name": " Pulkha"
            }
          ]
        },
        {
          name: " NON-VEG MAIN COURSES -CHICKEN -MUTTON- SEA FOOD - BIRYANI’S (ANY ONE)",
          items: [
            {
              "value": "Andhra Chicken Curry",
              "name": "Andhra Chicken Curry"
            },
            {
              "value": "Chicken Fry",
              "name": "Chicken Fry"
            },
            {
              "value": "Butter Chicken Curry",
              "name": "Butter Chicken Curry"
            },
            {
              "value": " Dum ka Chicken",
              "name": " Dum ka Chicken"
            },
            {
              "value": " Boneless Chicken Curry",
              "name": " Boneless Chicken Curry"
            },
            {
              "value": " Kadai Chicken",
              "name": " Kadai Chicken"
            },
            {
              "value": " Mogali Chicken Curry",
              "name": " Mogali Chicken Curry"
            },
            {
              "value": " Chicken Iguru",
              "name": " Chicken Iguru"
            },
            {
              "value": " Natukodi Pulusu",
              "name": " Natukodi Pulusu"
            },
            {
              "value": " Natukodi Iguru",
              "name": " Natukodi Iguru"
            },
            {
              "value": " Chicken Chintachiguru",
              "name": " Chicken Chintachiguru"
            },
            {
              "value": " Ginger Chicken Masala",
              "name": " Ginger Chicken Masala"
            },
            {
              "value": " Chicken Do Pyaza",
              "name": " Chicken Do Pyaza"
            },
            {
              "value": " Spicy Chicken Kurma",
              "name": " Spicy Chicken Kurma"
            },
            {
              "value": " Chicken Sagwala curry",
              "name": " Chicken Sagwala curry"
            },
            {
              "value": " Chicken Liver Fry",
              "name": " Chicken Liver Fry"
            },
            {
              "value": " Palak Chicken Curry",
              "name": " Palak Chicken Curry"
            },
            {
              "value": " Chicken Mirayala Vepudu",
              "name": " Chicken Mirayala Vepudu"
            },
            {
              "value": " Arakodi Fry",
              "name": " Arakodi Fry"
            },
            {
              "value": " Mutton Curry",
              "name": " Mutton Curry"
            },
            {
              "value": " Mutton Gongura",
              "name": " Mutton Gongura"
            },
            {
              "value": "  Mutton Chintachiguru",
              "name": "  Mutton Chintachiguru"
            },
            {
              "value": " Mutton Dosakaya",
              "name": " Mutton Dosakaya"
            },
            {
              "value": " Mutton Mango",
              "name": " Mutton Mango"
            },
            {
              "value": " Mutton Iguru",
              "name": " Mutton Iguru"
            },
            {
              "value": " Mutton Spicy Kurma",
              "name": " Mutton Spicy Kurma"
            },
            {
              "value": " Dum Ka Mutton",
              "name": " Dum Ka Mutton"
            },
            {
              "value": " Achari Mutton",
              "name": " Achari Mutton"
            },
            {
              "value": " Mutton Rogan Josh",
              "name": " Mutton Rogan Josh"
            },
            {
              "value": " Palak Mutton",
              "name": " Palak Mutton"
            },
            {
              "value": " Mutton Chops Masala",
              "name": " Mutton Chops Masala"
            },
            {
              "value": " Mutton Keema on tawa",
              "name": " Mutton Keema on tawa"
            },
            {
              "value": " Mutton Shahi Kurma",
              "name": " Mutton Shahi Kurma"
            },
            {
              "value": " Mutton Liver Fry",
              "name": " Mutton Liver Fry"
            },
            {
              "value": " Koramenu Chapala Pulusu",
              "name": " Koramenu Chapala Pulusu"
            },
            {
              "value": " Nellore Chapala Pulusu",
              "name": " Nellore Chapala Pulusu"
            },
            {
              "value": " Mango Chapala Pulusu",
              "name": " Mango Chapala Pulusu"
            },
            {
              "value": " Bommidyala Pulusu",
              "name": " Bommidyala Pulusu"
            },
            {
              "value": " Bommidyala Iguru",
              "name": " Bommidyala Iguru"
            },
            {
              "value": " Koramenu Iguru",
              "name": " Koramenu Iguru"
            },
            {
              "value": " Koramenu Fry ( with bone) on tawa",
              "name": " Koramenu Fry ( with bone) on tawa"
            },
            {
              "value": " Sorachapa Porutu",
              "name": " Sorachapa Porutu"
            },
            {
              "value": " Pandugappa Fry",
              "name": " Pandugappa Fry"
            },
            {
              "value": " Prawns Kobbari Iguru",
              "name": " Prawns Kobbari Iguru"
            },
            {
              "value": " Prawns Curry",
              "name": " Prawns Curry"
            },
            {
              "value": " Prawns Fry",
              "name": " Prawns Fry"
            },
            {
              "value": " Chintachiguru Prawns",
              "name": " Chintachiguru Prawns"
            },
            {
              "value": " Peethala Iguru",
              "name": " Peethala Iguru"
            },
            {
              "value": " Peethala Pulusu",
              "name": " Peethala Pulusu"
            },
            {
              "value": " Stuffed Crab Iguru",
              "name": " Stuffed Crab Iguru"
            },
            {
              "value": " Dosakaya Nethhalau",
              "name": " Dosakaya Nethhalau"
            },
            {
              "value": " Bilal Mutton Biryani",
              "name": " Bilal Mutton Biryani"
            },
            {
              "value": "  Hyderabadi Mugalai Mutton Biryani",
              "name": "  Hyderabadi Mugalai Mutton Biryani"
            },
            {
              "value": " Hyderabadi Chicken Dum Biryani",
              "name": " Hyderabadi Chicken Dum Biryani"
            },
            {
              "value": "  Vijawada Style Chicken Biryani",
              "name": "  Vijawada Style Chicken Biryani"
            },
            {
              "value": " Bilal Prawn Biryani",
              "name": " Bilal Prawn Biryani"
            },
            {
              "value": " Andhra Fish Biryani",
              "name": " Andhra Fish Biryani"
            },
            {
              "value": "   Chicken Ulavacharu Dum Biryani",
              "name": "   Chicken Ulavacharu Dum Biryani"
            },
            {
              "value": "  Chettinadu Chicken Dum Biryani",
              "name": "  Chettinadu Chicken Dum Biryani"
            },
            {
              "value": " Chettinadu Mutton Dum Biryani",
              "name": " Chettinadu Mutton Dum Biryani"
            },
            {
              "value": "  Chicken Fry Piece Biryani",
              "name": "  Chicken Fry Piece Biryani"
            }
          ]
        },
        {
          name: " SPECIAL RICES - FLAVORED RICE- PULAO - BIRYANI’S (ANY ONE)",
          items: [
            {
              "value": " Chintapandu Pulihora",
              "name": " Chintapandu Pulihora"
            },
            {
              "value": " Mamidikaya Pulihora",
              "name": " Mamidikaya Pulihora"
            },
            {
              "value": " Dabbakaya Pulihora",
              "name": " Dabbakaya Pulihora"
            },
            {
              "value": " Nimmakaya Pulihora",
              "name": " Nimmakaya Pulihora"
            },
            {
              "value": " Pudina Rice",
              "name": " Pudina Rice"
            },
            {
              "value": " Veg Dum Fried Rice",
              "name": " Veg Dum Fried Rice"
            },
            {
              "value": " Koemera Rice",
              "name": " Koemera Rice"
            },
            {
              "value": " Coconut Rice",
              "name": " Coconut Rice"
            },
            {
              "value": " Tomato Rice",
              "name": " Tomato Rice"
            },
            {
              "value": " Karivepaku rice",
              "name": " Karivepaku rice"
            },
            {
              "value": "Corn Methi Pulao",
              "name": "Corn Methi Pulao"
            },
            {
              "value": "Veg Pulao",
              "name": "Veg Pulao"
            },
            {
              "value": "Kashmiri Pulao",
              "name": "Kashmiri Pulao"
            },
            {
              "value": "Fresh Green Peas Pulao",
              "name": "Fresh Green Peas Pulao"
            },
            {
              "value": "Veg SaffronPulao",
              "name": "Veg SaffronPulao"
            },
            {
              "value": " Bilal Mushroom Biryani with katta",
              "name": " Bilal Mushroom Biryani with katta"
            },
            {
              "value": " Bilal Panasakaya Biryani with Katta",
              "name": " Bilal Panasakaya Biryani with Katta"
            },
            {
              "value": " Mixed Vegetable Biryani",
              "name": " Mixed Vegetable Biryani"
            },
            {
              "value": " Aloo Pudina Biryani",
              "name": " Aloo Pudina Biryani"
            },
            {
              "value": " Hyderabadi Ulavacharu dum Biryani",
              "name": " Hyderabadi Ulavacharu dum Biryani"
            },
            {
              "value": " Paneer & Baby corn Biryani",
              "name": " Paneer & Baby corn Biryani"
            },
            {
              "value": " Avakai Biryani",
              "name": " Avakai Biryani"
            }
          ]
        },
        {
          name: " PLAIN RICE ",
          items: [
            {
              "value": "Steamed Rice with Ghee",
              "name": "Steamed Rice with Ghee"
            }
          ]
        },
        {
          name: " KURMAS-PANEER (ANY ONE)",
          items: [
            {
              "value": "Butter Paneer Kurma",
              "name": "Butter Paneer Kurma"
            },
            {
              "value": " Malai Kofta",
              "name": " Malai Kofta"
            },
            {
              "value": " Methi Chaman",
              "name": " Methi Chaman"
            },
            {
              "value": " Mutter Paneer",
              "name": " Mutter Paneer"
            },
            {
              "value": " Paneer Tikka Masala",
              "name": " Paneer Tikka Masala"
            },
            {
              "value": " Paneer Moghlai Masala",
              "name": " Paneer Moghlai Masala"
            },
            {
              "value": "Paneer Sagwala",
              "name": "Paneer Sagwala"
            },
            {
              "value": " Palak Paneer",
              "name": " Palak Paneer"
            },
            {
              "value": " Paneer Single Beans Kurma",
              "name": " Paneer Single Beans Kurma"
            },
            {
              "value": " PaneerButter Masala",
              "name": " PaneerButter Masala"
            },
            {
              "value": " Shahi Paneer Kurma",
              "name": " Shahi Paneer Kurma"
            }
          ]
        },
        {
          name: " VEGETABLES-KURMA (ANY ONE)",
          items: [
            {
              "value": "Aloo Capsicum Kaju Kurma",
              "name": "Aloo Capsicum Kaju Kurma"
            },
            {
              "value": " Aloo Scoop Kurma",
              "name": " Aloo Scoop Kurma"
            },
            {
              "value": "Baby Corn Kaju Kurma",
              "name": "Baby Corn Kaju Kurma"
            },
            {
              "value": " Capsicum Kaju Kurma",
              "name": " Capsicum Kaju Kurma"
            },
            {
              "value": " Mixed Veg Kurma",
              "name": " Mixed Veg Kurma"
            },
            {
              "value": "Mushroom Kaju Kurma",
              "name": "Mushroom Kaju Kurma"
            },
            {
              "value": "Navaratan Kurma",
              "name": "Navaratan Kurma"
            },
            {
              "value": " Nilgeri Kurma",
              "name": " Nilgeri Kurma"
            },
            {
              "value": " Pool Makkan Kurma",
              "name": " Pool Makkan Kurma"
            },
            {
              "value": " Thotakoora Cube Kurma",
              "name": " Thotakoora Cube Kurma"
            }
          ]
        },
        {
          name: " MINERAL WATER",
          items: [
            {
              "value": "In Glasses",
              "name": "In Glasses"
            },
            {
              "value": "In 200 ml bottles @ Circulation extra cost.",
              "name": "In 200 ml bottles @ Circulation extra cost."
            }
          ]
        },
      ]
    }
  ];
  
  const [state, setState] = useState({
    Filters: packages,
    selected: [],
  });
  
  const handleCheckboxChange = (value) => {
    setState((state) => {
      const updatedEtables = state.selected.find((obj) => obj === value);
      const selected = updatedEtables
        ? state.selected.filter((obj) => obj !== value)
        : [...state.selected, value];
      const finalData = state.selected.length > 0 ? state.Filters : packages.filter((pkg) => pkg.name === selectedPackage)[0]["categories"]
      return {
        selected,
        Filters: [
          ...finalData.map((filter) => {
            return {
              ...filter,
              items: filter.items.map((ele) => {
                return {
                  ...ele,
                  checked: selected.includes(ele.value),
                };
              }),
            };
          }),
        ],
      };
    });
  };

  const handlePackageSelect = (packageName) => {
    setSelectedPackage(packageName);
    setState( {Filters: packages, selected: []})
    // Reset the previous package's toggle switch
    setIsVeg((prevIsVeg) => {
      const resetIsVeg = { ...prevIsVeg };
      Object.keys(resetIsVeg).forEach(pkg => {
        resetIsVeg[pkg] = false;
      });
      return resetIsVeg;
    });
  };
  
  useEffect(() => {
    const externalPackage = location.state.packageName
    const externalformData = location.state.externalformData
    if(externalPackage){
       handlePackageSelect(externalPackage)
    }
    if(externalformData){
      setFormData(externalformData)
    }
  }, []);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
  
  
 

  const handleVegToggle = (packageName) => {
    setIsVeg((prevIsVeg) => ({
      ...prevIsVeg,
      [packageName]: !prevIsVeg[packageName]
    }));
  };
  
  const onSubmit =()=>{
      const externalPackage = location.state.currentPackage
      const externalData = {...formData, selected: state.selected, packageName: externalPackage}
      const redirectPath = location.state.cateringType == "Event Catering" ?  "/event-catering" : 
                           (location.state.cateringType =="Corporate Catering" ? "/corporate-catering" : "/event-catering")
      Swal.fire({
      position: "center",
      icon: "success",
      title: "Items in the package are selected successfully",
      showConfirmButton: false,
      timer: 1500
    });
      navigate(redirectPath, {state:{data : externalData}})
  }

  const renderMenu = () => {
    if (!selectedPackage) {
      return <p className="text-black text-4xl font-semibold  ">Please select a package</p>;
    }
    
    
    const resultData = state.selected.length>0 ? state.Filters : packages.filter((pkg) => pkg.name === selectedPackage)[0]["categories"]
    
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">{selectedPackage} Menu</h2>  
      {resultData.map((ele) => {
        return (
          <React.Fragment>
            <br />
            <h3 className="text-md font-bold mb-2">{ele.name}</h3>
            {ele.items.map((item) => {
              return (
                <div class="checkboxes parent_div_1">
                  <label>{item.value}</label>
                  <input
                    checked={item.checked || false}
                    onChange={() => handleCheckboxChange(item.value)}
                    type="checkbox"
                  />
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
      <br />
    </div>
         
      

    );
  };

  return (
    <div>
      <div className="page-header1 mb-0">
        <div className="container">
          <div className="row mx-auto text-center justify-center">
            <div className="col-12">
              <h2 className="font-extrabold text-6xl text-green" >PACKAGES</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row ms-12 items-center">
      <div className="w-auto md:w-1/2  shadow-2xl" id="rendermenu" >
        {renderMenu()}
      </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-5xl font-bold mb-4" id="clippath2">{selectedPackage}</h2>
          <div className="mb-4 w-full">
            <div key={selectedPackage} className={`border shadow-2xl rounded-3xl p-10 text-xl mb-5 bg-white cursor-pointer flex justify-between items-center ${selectedPackage}`}>
              <div className="result-tab text-sm">
                <strong>Selected: </strong>
                <br />
                <ul >
                  {state.selected.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <br />
                <button 
                      onClick={onSubmit}
                      className="w-full px-4 py-2  bg-green text-white rounded-md hover:bg-green-dark"
                    >
                      Submit
                    </button>
                </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
            }  

export default Packages;
