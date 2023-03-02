import { TicketFilterForm } from "widgets";
import { LastTicketCard, TicketCard } from "features";

export default function OrderStep1() {
  const ticket = {
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    is_express: false,
    min_price: 723,
    available_seats: 80,
    available_seats_info: {
      first: 18,
      fourth: 62,
      third: 48
    },
    departure: {
      _id: "63329f93591d1e0046803ba8",
      have_first_class: true,
      have_second_class: false,
      have_third_class: false,
      have_fourth_class: true,
      have_wifi: true,
      have_air_conditioning: true,
      is_express: false,
      min_price: 868,
      duration: 113820,
      available_seats: 80,
      available_seats_info: {
        first: 18,
        fourth: 62
      },
      train: {
        _id: "63329d7f591d1e00467e935b",
        name: "Тройка - 14"
      },
      from: {
        railway_station_name: "Арсеньев",
        city: {
          _id: "63329d7b591d1e00467e8a36",
          name: "арсеньев"
        },
        datetime: 1672746816
      },
      to: {
        railway_station_name: "Балаково",
        city: {
          _id: "63329d7b591d1e00467e8a39",
          name: "балаково"
        },
        datetime: 1672860636
      },
      price_info: {
        first: {
          price: 3190,
          top_price: 2670,
          bottom_price: 3775
        },
        fourth: {
          top_price: 868,
          bottom_price: 996
        }
      }
    },
    arrival: {
      _id: "6332a1a4591d1e004681e369",
      have_first_class: false,
      have_second_class: false,
      have_third_class: true,
      have_fourth_class: true,
      have_wifi: true,
      have_air_conditioning: true,
      is_express: false,
      min_price: 723,
      duration: 308640,
      available_seats: 110,
      available_seats_info: {
        third: 48,
        fourth: 62
      },
      train: {
        _id: "63329d81591d1e00467e948f",
        name: "Брусника - 95"
      },
      from: {
        railway_station_name: "Балаково",
        city: {
          _id: "63329d7b591d1e00467e8a39",
          name: "балаково"
        },
        datetime: 1673050224
      },
      to: {
        railway_station_name: "Арсеньев",
        city: {
          _id: "63329d7b591d1e00467e8a36",
          name: "арсеньев"
        },
        datetime: 1673358864
      },
      price_info: {
        third: {
        top_price: 3335,
          bottom_price: 2920,
          side_price: 3055
        },
        fourth: {
          top_price: 731,
          bottom_price: 723
        }
      }
    }
  }

  return (
    <div className="wrapped">
      <TicketCard ticket={ticket}/>
    </div>
  );
}