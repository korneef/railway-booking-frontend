import { TicketFilterForm, TicketsList, SeatsSelection } from "widgets";
import { LastTicketCard } from "features";

export default function OrderStep1() {
  const tickets = {
    "total_count": 7,
    "items": [
        {
            "have_first_class": false,
            "have_second_class": false,
            "have_third_class": false,
            "have_fourth_class": false,
            "have_wifi": false,
            "have_air_conditioning": false,
            "is_express": false,
            "min_price": 577,
            "available_seats": 110,
            "available_seats_info": {
                "first": 18,
                "third": 48,
                "fourth": 62
            },
            "departure": {
                "_id": "63329f96591d1e0046803df7",
                "have_first_class": true,
                "have_second_class": false,
                "have_third_class": true,
                "have_fourth_class": true,
                "have_wifi": true,
                "have_air_conditioning": true,
                "is_express": false,
                "min_price": 577,
                "duration": 329340,
                "available_seats": 128,
                "available_seats_info": {
                    "first": 18,
                    "third": 48,
                    "fourth": 62
                },
                "train": {
                    "_id": "63329d80591d1e00467e941a",
                    "name": "Тройка - 56"
                },
                "from": {
                    "railway_station_name": "Арсеньев",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a36",
                        "name": "арсеньев"
                    },
                    "datetime": 1672532318
                },
                "to": {
                    "railway_station_name": "Балаково",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a39",
                        "name": "балаково"
                    },
                    "datetime": 1672861658
                },
                "price_info": {
                    "first": {
                        "price": 3220,
                        "top_price": 3455,
                        "bottom_price": 3160
                    },
                    "third": {
                        "top_price": 3635,
                        "bottom_price": 2650,
                        "side_price": 4505
                    },
                    "fourth": {
                        "top_price": 984,
                        "bottom_price": 577
                    }
                }
            },
            "arrival": {
                "_id": "6332a1a4591d1e004681e369",
                "have_first_class": false,
                "have_second_class": false,
                "have_third_class": true,
                "have_fourth_class": true,
                "have_wifi": true,
                "have_air_conditioning": true,
                "is_express": false,
                "min_price": 723,
                "duration": 308640,
                "available_seats": 110,
                "available_seats_info": {
                    "third": 48,
                    "fourth": 62
                },
                "train": {
                    "_id": "63329d81591d1e00467e948f",
                    "name": "Брусника - 95"
                },
                "from": {
                    "railway_station_name": "Балаково",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a39",
                        "name": "балаково"
                    },
                    "datetime": 1673050224
                },
                "to": {
                    "railway_station_name": "Арсеньев",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a36",
                        "name": "арсеньев"
                    },
                    "datetime": 1673358864
                },
                "price_info": {
                    "third": {
                        "top_price": 3335,
                        "bottom_price": 2920,
                        "side_price": 3055
                    },
                    "fourth": {
                        "top_price": 731,
                        "bottom_price": 723
                    }
                }
            }
        },
        {
            "have_first_class": false,
            "have_second_class": false,
            "have_third_class": false,
            "have_fourth_class": false,
            "have_wifi": false,
            "have_air_conditioning": false,
            "is_express": false,
            "min_price": 675,
            "available_seats": 62,
            "available_seats_info": {
                "fourth": 62,
                "second": 96
            },
            "departure": {
                "_id": "63329f94591d1e0046803c1b",
                "have_first_class": false,
                "have_second_class": false,
                "have_third_class": false,
                "have_fourth_class": true,
                "have_wifi": false,
                "have_air_conditioning": false,
                "is_express": false,
                "min_price": 675,
                "duration": 94740,
                "available_seats": 62,
                "available_seats_info": {
                    "fourth": 62
                },
                "train": {
                    "_id": "63329d7f591d1e00467e939c",
                    "name": "Тройка - 44"
                },
                "from": {
                    "railway_station_name": "Арсеньев",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a36",
                        "name": "арсеньев"
                    },
                    "datetime": 1672546656
                },
                "to": {
                    "railway_station_name": "Балаково",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a39",
                        "name": "балаково"
                    },
                    "datetime": 1672641396
                },
                "price_info": {
                    "fourth": {
                        "top_price": 794,
                        "bottom_price": 675
                    }
                }
            },
            "arrival": {
                "_id": "6332a3a6591d1e0046837f99",
                "have_first_class": false,
                "have_second_class": true,
                "have_third_class": false,
                "have_fourth_class": false,
                "have_wifi": true,
                "have_air_conditioning": true,
                "is_express": false,
                "min_price": 1596,
                "duration": 156000,
                "available_seats": 96,
                "available_seats_info": {
                    "second": 96
                },
                "train": {
                    "_id": "63329d7f591d1e00467e9350",
                    "name": "Тройка - 60"
                },
                "from": {
                    "railway_station_name": "Балаково",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a39",
                        "name": "балаково"
                    },
                    "datetime": 1673052658
                },
                "to": {
                    "railway_station_name": "Арсеньев",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a36",
                        "name": "арсеньев"
                    },
                    "datetime": 1673208658
                },
                "price_info": {
                    "second": {
                        "top_price": 1779,
                        "bottom_price": 1596
                    }
                }
            }
        },
        {
            "have_first_class": false,
            "have_second_class": false,
            "have_third_class": false,
            "have_fourth_class": false,
            "have_wifi": false,
            "have_air_conditioning": false,
            "is_express": false,
            "min_price": 521,
            "available_seats": 160,
            "available_seats_info": {
                "second": 32,
                "third": 48,
                "fourth": 62,
                "first": 18
            },
            "departure": {
                "_id": "6332a3bb591d1e00468390cf",
                "have_first_class": false,
                "have_second_class": true,
                "have_third_class": true,
                "have_fourth_class": true,
                "have_wifi": true,
                "have_air_conditioning": true,
                "is_express": false,
                "min_price": 527,
                "duration": 138900,
                "available_seats": 204,
                "available_seats_info": {
                    "second": 32,
                    "third": 48,
                    "fourth": 124
                },
                "train": {
                    "_id": "63329d7f591d1e00467e9384",
                    "name": "undefined - 61"
                },
                "from": {
                    "railway_station_name": "Арсеньев",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a36",
                        "name": "арсеньев"
                    },
                    "datetime": 1672566920
                },
                "to": {
                    "railway_station_name": "Балаково",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a39",
                        "name": "балаково"
                    },
                    "datetime": 1672705820
                },
                "price_info": {
                    "second": {
                        "top_price": 2532,
                        "bottom_price": 2685
                    },
                    "third": {
                        "top_price": 3860,
                        "bottom_price": 4290,
                        "side_price": 2565
                    },
                    "fourth": {
                        "top_price": 898,
                        "bottom_price": 527
                    }
                }
            },
            "arrival": {
                "_id": "63329f9a591d1e0046804118",
                "have_first_class": true,
                "have_second_class": true,
                "have_third_class": true,
                "have_fourth_class": true,
                "have_wifi": true,
                "have_air_conditioning": true,
                "is_express": false,
                "min_price": 521,
                "duration": 351900,
                "available_seats": 160,
                "available_seats_info": {
                    "first": 18,
                    "second": 32,
                    "third": 48,
                    "fourth": 62
                },
                "train": {
                    "_id": "63329d82591d1e00467e94f1",
                    "name": "Перун - 75"
                },
                "from": {
                    "railway_station_name": "Балаково",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a39",
                        "name": "балаково"
                    },
                    "datetime": 1673086662
                },
                "to": {
                    "railway_station_name": "Арсеньев",
                    "city": {
                        "_id": "63329d7b591d1e00467e8a36",
                        "name": "арсеньев"
                    },
                    "datetime": 1673438562
                },
                "price_info": {
                    "first": {
                        "price": 4505,
                        "top_price": 2695,
                        "bottom_price": 3480
                    },
                    "second": {
                        "top_price": 2139,
                        "bottom_price": 2760
                    },
                    "third": {
                        "top_price": 2525,
                        "bottom_price": 4345,
                        "side_price": 4620
                    },
                    "fourth": {
                        "top_price": 521,
                        "bottom_price": 891
                    }
                }
            }
        }
    ]
}

  const last = [{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":1812,"available_seats":96,"available_seats_info":{"second":96},"departure":{"_id":"6332a3cc591d1e0046839e35","have_first_class":false,"have_second_class":true,"have_third_class":false,"have_fourth_class":false,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":1812,"duration":130500,"available_seats":96,"available_seats_info":{"second":96},"train":{"_id":"63329d80591d1e00467e93f5","name":"Ураган - 54"},"from":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1672811436},"to":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1672941936},"price_info":{"second":{"top_price":1989,"bottom_price":1812}}}},{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":2700,"available_seats":144,"available_seats_info":{"third":144},"departure":{"_id":"6332a3cc591d1e0046839e34","have_first_class":false,"have_second_class":false,"have_third_class":true,"have_fourth_class":false,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":2700,"duration":215160,"available_seats":144,"available_seats_info":{"third":144},"train":{"_id":"63329d81591d1e00467e944b","name":"Перун - 18"},"from":{"railway_station_name":"Ярославский","city":{"_id":"63329d7b591d1e00467e8a30","name":"москва"},"datetime":1672339236},"to":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1672554396},"price_info":{"third":{"top_price":2700,"bottom_price":3495,"side_price":3125}}}},{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":527,"available_seats":204,"available_seats_info":{"second":32,"third":48,"fourth":124},"departure":{"_id":"6332a3cc591d1e0046839e33","have_first_class":false,"have_second_class":true,"have_third_class":true,"have_fourth_class":true,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":527,"duration":132600,"available_seats":204,"available_seats_info":{"second":32,"third":48,"fourth":124},"train":{"_id":"63329d7f591d1e00467e9384","name":"undefined - 61"},"from":{"railway_station_name":"Аткарск","city":{"_id":"63329d7b591d1e00467e8a38","name":"аткарск"},"datetime":1672083036},"to":{"railway_station_name":"Ладожский","city":{"_id":"63329d7b591d1e00467e8a31","name":"санкт-петербург"},"datetime":1672215636},"price_info":{"second":{"top_price":2532,"bottom_price":2685},"third":{"top_price":3860,"bottom_price":4290,"side_price":2565},"fourth":{"top_price":898,"bottom_price":527}}}},{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":875,"available_seats":190,"available_seats_info":{"second":32,"third":96,"fourth":62},"departure":{"_id":"6332a3cc591d1e0046839e32","have_first_class":false,"have_second_class":true,"have_third_class":true,"have_fourth_class":true,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":875,"duration":193260,"available_seats":190,"available_seats_info":{"second":32,"third":96,"fourth":62},"train":{"_id":"63329d81591d1e00467e94c4","name":"Ураган - 93"},"from":{"railway_station_name":"Архангельск","city":{"_id":"63329d7b591d1e00467e8a37","name":"архангельск"},"datetime":1672624776},"to":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1672818036},"price_info":{"second":{"top_price":1968,"bottom_price":2409},"third":{"top_price":2535,"bottom_price":3940,"side_price":3395},"fourth":{"top_price":996,"bottom_price":875}}}},{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":2100,"available_seats":128,"available_seats_info":{"second":32,"third":96},"departure":{"_id":"6332a3cc591d1e0046839e31","have_first_class":false,"have_second_class":true,"have_third_class":true,"have_fourth_class":false,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":2100,"duration":150120,"available_seats":128,"available_seats_info":{"second":32,"third":96},"train":{"_id":"63329d80591d1e00467e9420","name":"Иволга - 12"},"from":{"railway_station_name":"Анапа","city":{"_id":"63329d7b591d1e00467e8a35","name":"анапа"},"datetime":1669657356},"to":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1669807476},"price_info":{"second":{"top_price":2886,"bottom_price":2100},"third":{"top_price":3710,"bottom_price":4105,"side_price":4070}}}}]

  return (
    <div className="wrapped">
      <div className="order">
        <div className="order__aside">
        <TicketFilterForm/>
        <div>
          {last.map(item => <LastTicketCard key={item.departure._id} {...item.departure}/>)}
        </div>
        </div>
        <SeatsSelection ticket={tickets.items[0].departure} direciton="departure"/>
        {/* <TicketsList total_count={tickets.total_count}>
          {tickets.items}
        </TicketsList> */}
      </div>
    </div>
  );
}