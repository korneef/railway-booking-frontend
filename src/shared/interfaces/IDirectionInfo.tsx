export default interface IDirectionInfo {
  railway_station_name: string,
  city: {
    _id: string,
    name: string,
  },
  datetime: number,
}