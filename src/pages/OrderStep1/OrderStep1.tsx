import { TicketFilterForm, TicketsList, SeatsSelection } from "widgets";
import { LastTicketCard } from "features";

export default function OrderStep1() {
  const tickets = {"total_count":3,"items":[{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":630,"available_seats":80,"available_seats_info":{"first":18,"fourth":62,"second":32},"departure":{"_id":"63329fc8591d1e0046806631","have_first_class":true,"have_second_class":false,"have_third_class":false,"have_fourth_class":true,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":868,"duration":241860,"available_seats":80,"available_seats_info":{"first":18,"fourth":62},"train":{"_id":"63329d7f591d1e00467e935b","name":"Тройка - 14"},"from":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1643699729},"to":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1643941589},"price_info":{"first":{"price":3190,"top_price":2670,"bottom_price":3775},"fourth":{"top_price":868,"bottom_price":996}}},"arrival":{"_id":"63329fae591d1e00468050f5","have_first_class":false,"have_second_class":true,"have_third_class":false,"have_fourth_class":true,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":630,"duration":271440,"available_seats":94,"available_seats_info":{"second":32,"fourth":62},"train":{"_id":"63329d82591d1e00467e94f3","name":"Транзит - 63"},"from":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1643677142},"to":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1643948582},"price_info":{"second":{"top_price":2598,"bottom_price":2307},"fourth":{"top_price":961,"bottom_price":630}}}},{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":657,"available_seats":132,"available_seats_info":{"second":32,"third":48,"fourth":124,"first":36},"departure":{"_id":"63329dad591d1e00467eb61b","have_first_class":false,"have_second_class":true,"have_third_class":true,"have_fourth_class":true,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":657,"duration":124020,"available_seats":204,"available_seats_info":{"second":32,"third":48,"fourth":124},"train":{"_id":"63329d80591d1e00467e9404","name":"Транзит - 1"},"from":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1643723129},"to":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1643847149},"price_info":{"second":{"top_price":2499,"bottom_price":2949},"third":{"top_price":4500,"bottom_price":3465,"side_price":3955},"fourth":{"top_price":742,"bottom_price":657}}},"arrival":{"_id":"63329da8591d1e00467eb2a9","have_first_class":true,"have_second_class":false,"have_third_class":true,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":true,"is_express":false,"min_price":2660,"duration":104760,"available_seats":132,"available_seats_info":{"first":36,"third":96},"train":{"_id":"63329d81591d1e00467e944f","name":"Иволга - 29"},"from":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1643706505},"to":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1643811265},"price_info":{"first":{"price":4075,"top_price":4320,"bottom_price":2865},"third":{"top_price":2660,"bottom_price":2790,"side_price":3365}}}},{"have_first_class":false,"have_second_class":false,"have_third_class":false,"have_fourth_class":false,"have_wifi":false,"have_air_conditioning":false,"is_express":false,"min_price":1812,"available_seats":68,"available_seats_info":{"second":32,"first":36},"departure":{"_id":"6332a1c0591d1e004681f9b6","have_first_class":false,"have_second_class":true,"have_third_class":false,"have_fourth_class":false,"have_wifi":true,"have_air_conditioning":true,"is_express":false,"min_price":1812,"duration":80640,"available_seats":96,"available_seats_info":{"second":96},"train":{"_id":"63329d80591d1e00467e93f5","name":"Ураган - 54"},"from":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1643737912},"to":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1643818552},"price_info":{"second":{"top_price":1989,"bottom_price":1812}}},"arrival":{"_id":"6332a1be591d1e004681f8df","have_first_class":true,"have_second_class":true,"have_third_class":false,"have_fourth_class":false,"have_wifi":true,"have_air_conditioning":false,"is_express":false,"min_price":2607,"duration":251400,"available_seats":68,"available_seats_info":{"first":36,"second":32},"train":{"_id":"63329d7f591d1e00467e938c","name":"Ласточка - 41"},"from":{"railway_station_name":"Балаково","city":{"_id":"63329d7b591d1e00467e8a39","name":"балаково"},"datetime":1643717331},"to":{"railway_station_name":"Арсеньев","city":{"_id":"63329d7b591d1e00467e8a36","name":"арсеньев"},"datetime":1643968731},"price_info":{"first":{"price":3115,"top_price":3020,"bottom_price":3400},"second":{"top_price":2910,"bottom_price":2607}}}}]}

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