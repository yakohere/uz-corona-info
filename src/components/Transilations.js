const transilations = (responseData) => {
  responseData.find((e) => e.country === "USA").country = "AQSH";
  responseData.find((e) => e.country === "Italy").country = "Italiya";
  responseData.find((e) => e.country === "Spain").country = "Ispaniya";
  responseData.find((e) => e.country === "Germany").country = "Germaniya";
  responseData.find((e) => e.country === "France").country = "Fransiya";
  responseData.find((e) => e.country === "Iran").country = "Eron";
  responseData.find((e) => e.country === "UK").country = "Buyuk Britaniya";
  responseData.find((e) => e.country === "Turkey").country = "Turkiya";
  responseData.find((e) => e.country === "Netherlands").country =
    "Niderlandiya";
  responseData.find((e) => e.country === "China").country = "Xitoy";
  responseData.find((e) => e.country === "Belgium").country = "Belgiya";
  responseData.find((e) => e.country === "Switzerland").country =
    "Shveytsariya";
  responseData.find((e) => e.country === "Brazil").country = "Brazilya";
};

export default transilations;
