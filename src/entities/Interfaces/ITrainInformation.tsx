import { IAviableSeatsInfo, IDirectionInfo, ISeatPriceInfo } from "shared";

export default interface ITrainInformation {
  available_seats: number,
  available_seats_info: IAviableSeatsInfo,
  duration: number,
  from: IDirectionInfo,
  to: IDirectionInfo,
  have_air_conditioning: boolean,
  have_first_class: boolean,
  have_fourth_class: boolean,
  have_second_class: boolean,
  have_third_class: boolean,
  have_wifi: boolean,
  is_express: boolean,
  min_price: number,
  price_info: ISeatPriceInfo,
  _id: string
  train: {
    _id: string,
    name: string,
  },
}
