const initialState = [
  {
    id: 0,
    name: "Rishabh Pandey",
    email: "rishahpandey.rp19@gmail.com",
    number: 9119927181,
  },
  {
    id: 1,
    name: "Rohit Singh",
    email: "rohitSingh@gmail.com",
    number: 1233112314,
  },
];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      state = [...state, action.payload];
      return state;
    case "UPDATE_DATA":
      const updateState = state.map((data) =>
        data.id === action.payload.id ? action.payload : data
      );

      state = updateState;
      return state;
    case "DELETE_DATA":
      const filterData = state.filter(
        (data) => data.id !== action.payload && data
      );
      state = filterData;
      return state;

    default:
      return state;
  }
};

export default Reducer;
