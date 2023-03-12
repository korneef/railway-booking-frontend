import { SeatInformation } from "entities/index";

interface CoachProps {
  class: 1 | 2 | 3 | 4,
}

function Coach() {


  const seatsInfo = [
    {
      "coach": {
        "_id": "63329d7d591d1e00467e8db7",
        "name": "БЙГИТЗ-42",
        "class_type": "first",
        "have_wifi": true,
        "have_air_conditioning": true,
        "price": 3220,
        "top_price": 3455,
        "bottom_price": 3160,
        "side_price": 0,
        "linens_price": 216,
        "wifi_price": 248,
        "is_linens_included": true,
        "available_seats": 6,
        "train": "63329d80591d1e00467e941a"
      },
      "seats": [
        {
          "index": 1,
          "available": true
        },
        {
          "index": 2,
          "available": true
        },
        {
          "index": 3,
          "available": true
        },
        {
          "index": 4,
          "available": true
        },
        {
          "index": 5,
          "available": true
        },
        {
          "index": 6,
          "available": true
        }
      ]
    },
    {
      "coach": {
        "_id": "63329d7d591d1e00467e8db8",
        "name": "ИМЙДК-41",
        "class_type": "third",
        "have_wifi": true,
        "have_air_conditioning": false,
        "price": 0,
        "top_price": 3635,
        "bottom_price": 2650,
        "side_price": 4505,
        "linens_price": 134,
        "wifi_price": 65,
        "is_linens_included": false,
        "available_seats": 36,
        "train": "63329d80591d1e00467e941a"
      },
      "seats": [
        {
          "index": 1,
          "available": true
        },
        {
          "index": 2,
          "available": true
        },
        {
          "index": 3,
          "available": true
        },
        {
          "index": 4,
          "available": true
        },
        {
          "index": 5,
          "available": true
        },
        {
          "index": 6,
          "available": true
        },
        {
          "index": 7,
          "available": true
        },
        {
          "index": 8,
          "available": true
        },
        {
          "index": 9,
          "available": true
        },
        {
          "index": 10,
          "available": true
        },
        {
          "index": 11,
          "available": true
        },
        {
          "index": 12,
          "available": true
        },
        {
          "index": 13,
          "available": true
        },
        {
          "index": 14,
          "available": true
        },
        {
          "index": 15,
          "available": true
        },
        {
          "index": 16,
          "available": true
        },
        {
          "index": 17,
          "available": true
        },
        {
          "index": 18,
          "available": true
        },
        {
          "index": 19,
          "available": true
        },
        {
          "index": 20,
          "available": true
        },
        {
          "index": 21,
          "available": true
        },
        {
          "index": 22,
          "available": true
        },
        {
          "index": 23,
          "available": true
        },
        {
          "index": 24,
          "available": true
        },
        {
          "index": 25,
          "available": true
        },
        {
          "index": 26,
          "available": true
        },
        {
          "index": 27,
          "available": true
        },
        {
          "index": 28,
          "available": true
        },
        {
          "index": 29,
          "available": true
        },
        {
          "index": 30,
          "available": true
        },
        {
          "index": 31,
          "available": true
        },
        {
          "index": 32,
          "available": true
        },
        {
          "index": 33,
          "available": true
        },
        {
          "index": 34,
          "available": true
        },
        {
          "index": 35,
          "available": true
        },
        {
          "index": 36,
          "available": true
        }
      ]
    },
    {
      "coach": {
        "_id": "63329d7d591d1e00467e8db9",
        "name": "СИК-41",
        "class_type": "fourth",
        "have_wifi": false,
        "have_air_conditioning": false,
        "price": 0,
        "top_price": 984,
        "bottom_price": 577,
        "side_price": 0,
        "linens_price": 0,
        "wifi_price": 262,
        "is_linens_included": false,
        "available_seats": 50,
        "train": "63329d80591d1e00467e941a"
      },
      "seats": [
        {
          "index": 1,
          "available": true
        },
        {
          "index": 2,
          "available": true
        },
        {
          "index": 3,
          "available": true
        },
        {
          "index": 4,
          "available": true
        },
        {
          "index": 5,
          "available": true
        },
        {
          "index": 6,
          "available": true
        },
        {
          "index": 7,
          "available": true
        },
        {
          "index": 8,
          "available": true
        },
        {
          "index": 9,
          "available": true
        },
        {
          "index": 10,
          "available": true
        },
        {
          "index": 11,
          "available": true
        },
        {
          "index": 12,
          "available": true
        },
        {
          "index": 13,
          "available": true
        },
        {
          "index": 14,
          "available": true
        },
        {
          "index": 15,
          "available": true
        },
        {
          "index": 16,
          "available": true
        },
        {
          "index": 17,
          "available": true
        },
        {
          "index": 18,
          "available": true
        },
        {
          "index": 19,
          "available": true
        },
        {
          "index": 20,
          "available": true
        },
        {
          "index": 21,
          "available": true
        },
        {
          "index": 22,
          "available": true
        },
        {
          "index": 23,
          "available": true
        },
        {
          "index": 24,
          "available": true
        },
        {
          "index": 25,
          "available": true
        },
        {
          "index": 26,
          "available": true
        },
        {
          "index": 27,
          "available": true
        },
        {
          "index": 28,
          "available": true
        },
        {
          "index": 29,
          "available": true
        },
        {
          "index": 30,
          "available": true
        },
        {
          "index": 31,
          "available": true
        },
        {
          "index": 32,
          "available": true
        },
        {
          "index": 33,
          "available": true
        },
        {
          "index": 34,
          "available": true
        },
        {
          "index": 35,
          "available": true
        },
        {
          "index": 36,
          "available": true
        },
        {
          "index": 37,
          "available": true
        },
        {
          "index": 38,
          "available": true
        },
        {
          "index": 39,
          "available": true
        },
        {
          "index": 40,
          "available": true
        },
        {
          "index": 41,
          "available": true
        },
        {
          "index": 42,
          "available": true
        },
        {
          "index": 43,
          "available": true
        },
        {
          "index": 44,
          "available": true
        },
        {
          "index": 45,
          "available": true
        },
        {
          "index": 46,
          "available": true
        },
        {
          "index": 47,
          "available": true
        },
        {
          "index": 48,
          "available": true
        },
        {
          "index": 49,
          "available": true
        },
        {
          "index": 50,
          "available": true
        }
      ]
    }
  ]

  return (
    <div className="train-wagons-information__wagon-information wagon-information">
      <div className="wagon-information__wagon-number-section">
        <div className="wagon-information__wagon-number-wrapper">
          <div className="wagon-information__wagon-number">02</div>
          <div className="wagon-information__wagon-text">Вагон</div>
        </div>
      </div>
      <div className="wagon-information__seats-information">
        <div className="wagon-information__seats-types">
          <div className="wagon-information__seats-types-header-section">
            <div className="wagon-information__seats-types-header">Места <span>43</span></div>
            <div className="wagon-information__seats-price-header">Стоимость</div>
            <div className="wagon-information__service-header">Обслуживание <span>ФПК</span></div>
          </div >
          <div className="wagon-information__seats-list">
            <SeatInformation bemClass="wagon-information" type="Сидячий" count={10} price={1800}/>
            <SeatInformation bemClass="wagon-information" type="Стоячий" count={4} price={7800}/>
            <SeatInformation bemClass="wagon-information" type="Висячий" count={17} price={11800}/>
          </div>
        </div>
        <div className="wagon-information__seats-service"></div>
      </div>
    </div>
  );
}

export default Coach;